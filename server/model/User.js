const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	flagsGiven: [
		{
			"employee": {type: mongoose.Schema.Types.ObjectId, ref: "Employee"},
			"flags": {
				"red": { type: Boolean, default: false },
				"orange": { type: Boolean, default: false },
				"yellow": { type: Boolean, default: false },
				"green": { type: Boolean, default: false }
			}
		}
	],
	employees: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Employees" }
	]

});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		employees: Joi.array().label('employees array')
	});
	return schema.validate(data);
};

module.exports = { User, validate };

import React, { useEffect } from "react";
import Card from "../components/Card";
import TableRow from "../components/TableRow";
import { useState } from "react";

import getData from "../getInfo/getEmployee";

const HeroSection = (props) => {
	const [data, setData] = useState([]);

	const employeesOfUsers = props.data[0].employees

	useEffect(()=>{
		async function fetchdata(userId) {
            const newData = await getData({ _id: userId });
			setData(prevState=>[...prevState, newData])
        }

		employeesOfUsers.map((empId, key)=>{
			fetchdata(empId);
		})
	}, [])

	useEffect(()=> {
		console.log(data)
	}, [data])

	return (
		<>
			<div className="hero-wrapper">
				<div className="hero-sec">
					<div className="hero-sec-text">
						<div className="hero-title">
							Manage Employee
						</div>
						<div className="hero-sub-text">
							Check your daily tasks and schedules
						</div>
						<button>
							Manage Now
						</button>
					</div>
					<div className="hero-sec-img">
						<img src="/images/hero.png" alt="" />
					</div>
				</div>
				<div className="hero-sec">
					<div className="hero-sec-text">
						<div className="hero-title">
							Top Employee
						</div>
						<div className="hero-sub-text">
							Check your daily tasks and schedules
						</div>
						<button>
							Manage Now
						</button>
					</div>
					<div className="hero-sec-img">
						<img src="/images/cup.png" alt="" />
					</div>
				</div>
			</div>
			<div className="hero-cards-wrapper">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<table className="">
				<thead>
					<tr>
						<th className="flex justify-center">Profile</th>
						<th>Name of Employee</th>
						<th>Contact</th>
						<th>Aadhaar</th>
						<th>Pan</th>
						<th>Worker Type</th>
						<th>Experience</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data.map((employee, key) => (
						<TableRow
							key={key}
							_id={employee[0]._id}
							profile={employee[0].profile}
							name={employee[0].first_name}
							contact={employee[0].phone_number}
							aadhaar={employee[0].aadhar_number}
							pan={employee[0].pan_number}
							workerType={employee[0].workerType="chef"}
							experience={employee[0].experience}
							active={employee[0].active}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default HeroSection;

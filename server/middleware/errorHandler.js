const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.headers.origin}\t${req.url}`, 'errLog.log');

    console.log('Error: ', err.stack);

    const status = res.statusCode ? res.statusCode : 500; //500 is server error

    res.status(status);
    res.json({ message: err.message });
}

module.exports = errorHandler
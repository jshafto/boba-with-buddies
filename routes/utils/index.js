const { validationResult } = require('express-validator');


// note: if comparing to soon mi's twitter lite, she implemented this same function
// and called it routeHandler
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);


const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);
        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        next(err);
    }
    next();
}

module.exports = {
    asyncHandler,
    handleValidationErrors
}

const jwt = require("jsonwebtoken");

const authMiddleware = async(req, res, next) => {
    const token = req.header("Authorization");

    if(!token) {
        return res.status(401).json({ message: "Unauthorization HTTP, Token not provided"});
    }
    console.log("token from auth middleware", token);

    next();
};

module.exports = authMiddleware;
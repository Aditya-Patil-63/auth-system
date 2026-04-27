const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // 1. Get the token from the request "Header"
    const token = req.header('Authorization');

    // 2. If there is no token, block them!
    if (!token) {
        return res.status(401).json({ message: "No token, access denied!" });
    }

    try {
        // 3. Verify the token using our Secret Key
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // 4. Attach the user data to the request so the next function can use it
        req.user = verified;

        // 5. THE MOST IMPORTANT PART: "next()"
        next(); 

    } catch (error) {
        res.status(400).json({ message: "Invalid token!" });
    }
};

module.exports = authMiddleware;

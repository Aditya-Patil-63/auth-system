const User = require('../models/User');
const bcrypt = require('bcryptjs'); // 1. Import bcrypt
const jwt = require('jsonwebtoken'); // 1. Import JWT

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 2. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // 3. Hash the password (The "Shredder")
        const salt = await bcrypt.genSalt(10); // Generate a random "Salt"
        const hashedPassword = await bcrypt.hash(password, salt); // Mix salt + password

        // 4. Create and Save the user
        const newUser = new User({
            username,
            email,
            password: hashedPassword // Save the hashed version, NOT the real one!
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        res.status(500).json({ message: "Error in registration", error });
    }
};
// This function will handle "Login"
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // 2. Compare passwords
        // bcrypt.compare takes (Plain Password, Hashed Password)
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // 3. Success message for now
        // 3.1. Create the "Wristband" (Token)
        const token = jwt.sign(
            { userId: user._id },       // Data we want to hide in the token
            process.env.JWT_SECRET,      // The "Stamp" used to sign the token
            { expiresIn: '1h' }         // Token dies after 1 hour for safety
        );

        // 3.2. Send the token back to the user
        res.status(200).json({ 
            message: "Login successful!", 
            token: token 
        });


    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

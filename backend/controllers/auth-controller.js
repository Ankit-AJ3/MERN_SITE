const User = require("../models/user-model"); 
const bcrypt = require('bcryptjs');
 
const home = async (req, res) =>{
    try {
        res.status(200).send("Welcome to merstack series");
    } catch (error){
        console.log(error);
    }
};

const register = async (req, res) =>{
    try {
        console.log(req.body);

        const { username, email, phone, password} = req.body;

        const userExists = await User.findOne({ email: email});

        if(userExists){
            return res.status(400).json({msg: "User already exists"});
        }

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password
        });

        res.status(201).json({
             msg: "registration successfully",
             token: await userCreated.generateToken(),
             userId: userCreated._id.toString(), 
             });

    } catch (error) {

        res.status(500).send("internal server error");
    }
}

const login = async (req, res)=>{
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }
        // const user = await bcrypt.compare(password, userExist.password);

        const user = await userExist.comparePassword(password);

        if (user){
            res.status(200).json({
                msg:"Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
        });
     }else{
        res.status(401).json({message: "Invalid email or password"});
     }
    } catch (error) {
        // console.log(error);
        // res.status(500).json("internal server error");
        next(error)
    }
}

// ---------to send user data --User Logic-------

const user = async(req, res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        // res.status(200).json({msg: "hi user"}) 
        return res.status(200).json({ userData });
    }catch {
        console.log(`error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user};
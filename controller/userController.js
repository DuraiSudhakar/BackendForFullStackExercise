import User from "../models/userDetails.js"
import jwt from "jsonwebtoken"

const secret = process.env.SECRET;

function createToken(_id) {
    return jwt.sign({_id}, secret, {expiresIn : '3d'})
}
export const userSignUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};

export const userLogin = async (req, res) => {
   const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
       res.status(200).json({ email, token })
   } catch (err) {
       res.status(400).json({ error: err.message })
   } 
}
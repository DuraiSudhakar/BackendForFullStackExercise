import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userModel =  Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userModel.statics.signup = async function (email, password) {
    const exists = await this.findOne({ email })
    if (!email || !password) {
        throw Error("Enter all feilds");
    }
    if (exists) {
        throw Error("Email already exist");
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a strong Password")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash })

    return user
};

userModel.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error("Enter all feilds")
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Email doesn't exist")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect Password")
    }

    return user;
};

const User = model("UserDetails", userModel);
export default User;

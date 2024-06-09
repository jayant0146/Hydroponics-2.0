import mongoose from "mongoose";

//Schema or database created
const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})

//Now ccreate the collection
//Registered_Users is the name of the collection
const Register = new mongoose.model("Register", usersSchema);
export default Register;
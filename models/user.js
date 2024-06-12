import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: [true,"email already exists !"],
        required: [true, "Email is required !"],
    },
    username:{
        type:String,
        required: [true, "Email is required !"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image:{
        type: String,
    }
},{timestamps:true})

// export default  User = mongoose.model("User",UserSchema) 

// we would have used it when the server was always up and running but in next js we create a route only when  time it is called 
export const  User = mongoose.models.User || mongoose.model("User",UserSchema)
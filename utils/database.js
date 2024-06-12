import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log("database is already connected ");
        return ;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log("Connected to the database");
    } catch (error) {
        console.log(error);
    }
}
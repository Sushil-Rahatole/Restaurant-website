import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT-WEBSITE"
    }).then(()=>{
        console.log("Connection Successful!");
    }).catch(err=>{
        console.log(`Error occur while connecting to database : ${err}`);
    })
}
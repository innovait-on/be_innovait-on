"use strict";

const dotenv = require('dotenv')
dotenv.config();

const { connectDB } = require("../Connect/Connect");

const storeEmail = async(req, res) => {
    const collectionName = process.env.COLLECTION_NAME

    const { name, email } = req.body;
    
    let mongoDB = await connectDB();
    let collection = mongoDB.collection(collectionName);
    let dbResponse = await collection.findOne({ email: email });
    
    if(dbResponse){
        res.status(208).json({ message: "Email ID already exists !" });
        console.log("Insertion failed..duplicate email Id")
        
    }

    else {
        try{
            collection.insertOne({
                name:name,
                email:email,
                
            })
            console.log("Inserted data");
            res.status(200).json({ message: "Subscribed Succesfully !" });
            } catch(err){
                console.log(err);
            }
    }
}

module.exports = {
    storeEmail,
}
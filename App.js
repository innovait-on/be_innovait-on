'use strict'
require('dotenv').config({path:__dirname+'/./../../.env'})
const { storeEmail } = require('./NewsletterData/StoreEmail');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB using MongooseJS");
  });

  const app = express();

  app.use(cors());
  const port = process.env.PORT
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post('/storeEmail', async(req,res) => {
   
            await storeEmail(req,res);
  })
  


   app.listen(port, () => {
    console.log("Server is live and listening at :", port);
  })

const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const dotenv =require("dotenv");
const cors =require("cors");
const app= express();
require("dotenv").config();

const PORT =process.env.PORT || 8079;

app.use(cors());
app.use(bodyParser.json());

const URL =process.env.MONGODB_URL;

mongoose.connect(URL,{});

const conn = mongoose.connection;
conn.once("open",()=>{
    console.log("Mogodb Connection successful")
})

app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT}`)
})
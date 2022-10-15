const express =require("express");
const mongoose =require("mongoose");
const boayParser =require("boday-parser");
const dotenv =require("dotenv");
const cors =require("cors");
const app= express();
require("dotenv").config();

const PORT =process.env.PORT || 8079;

app.use(cors());
app.use(boayParser.json());

const URL =process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedToologyL:true,
    useFindAndModify:false

});

const conn = mongoose.connection;
conn.once("open",()=>{
    console.log("Mogodb Connection successful")
})

app.listen(PORT,()=>{
    console.log('Server is up and running on ${PORT}')
})
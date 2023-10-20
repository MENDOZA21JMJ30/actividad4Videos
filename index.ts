//transpilar 
// EcmaScript ES modules 
// **import express from "express"
// CommonJS: const express = require("express")
const express = require("express")
import router from './src/routes';

const app = express();

const example = function(){
    console.log("estoy a la escucha");
}

router(app);

app.listen(
    9000, example
)

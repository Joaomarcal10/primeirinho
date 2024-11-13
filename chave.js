const express = require('express')
const app = express();
const Bodyparser = require('body-parser')
const axios = require('axios');
const fs = require('fs');
const salvarCep = require('./cep')
const salvarCnpj = require('./api')

app.use(Bodyparser.urlencoded({ extended: false }));
app.use(Bodyparser.json());

app.get("/form",(req,res)=>{
    let cnpj = req.body.cnpj;
    if(cnpj != undefined){
        cnpj = cnpj.replace(/[^\d]/g, '');
        axios.get(`https://publica.cnpj.ws/cnpj/${cnpj}`)
        console.log(response.data)
    }
})
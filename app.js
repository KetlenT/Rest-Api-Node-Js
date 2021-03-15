const express = require("express");
const app = express();

app.use((req, res, next)=>{
    res.status(200).send({
        mensasgem: 'ok, tudo certo!'
    });
})
module.exports = app;
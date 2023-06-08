const express = require ("express");

const app = express ();
const port = 3003;

const path =  require("path");

app.get ("/",(req,res) => {
    res.sendFile(__dirname, "views", "index.html")
})

app.get ("/register",(req,res) => {
    res.send("Crea tu cuenta")
})

app.get ("/login",(req,res) => {
    res.send("Ingresa a tu cuenta")
})


app.listen (port, () => {
    console.log("Servidor corriendo en el puerto" + port);
    console.log("http://localhost:" + port);
});
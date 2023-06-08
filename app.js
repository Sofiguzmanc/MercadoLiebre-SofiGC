const express = require ("express");

const app = express ();
const port = 3002;

const path =  require("path");

console.log(path.join(__dirname, "views", "index.html"));

app.get ("/",(req,res) => {
    res.sendFile(__dirname, "views", "home.html")
})

app.listen (port, () => {
    console.log("Servidor corriendo en el puerto" + port);
    console.log("http://localhost:" + port);
});

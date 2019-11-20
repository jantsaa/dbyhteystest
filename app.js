/*const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Create connection
const db = mysql.createConnection({
    host: 'kiinteistodata.database.windows.net',
    user: 'Nepe',
    password: 'K1vaK0ulu',
    database: 'kiinteistodata',
    port: '1433'
});


db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MYSQL Connected...");
});

app.listen("5000", () => {
    console.log("Server started");
});*/

const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');

const app = express();

//Create connection
const db = mysql.createConnection({
    host: 'kiinteistodata.database.windows.net',
    user: 'Nepe',
    password: 'K1vaK0ulu',
    database: 'kiinteistodata',
    port: '1433'
});

db.connect( (err) => {
    if(err) {
        throw err;
    }
    console.log("MYSQL Conneted....");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.send("Testi");
})

app.listen("3000", () => {
    console.log("Server started on port 3000");
});
const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const path = require('path');
const ifl = path.join(__dirname, '/views/assets/');
const port = process.env.PORT = 3000;

app.set('view engine', 'ejs');
app.use('/assets',express.static(ifl));

//CONNECTION CONFIGURATION
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phentom"
   });


app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.get('/askquestion', (req, res) =>{
    con.query(`INSERT INTO contactq (name, email, subject, massage) VALUES ('${req.query.name}', '${req.query.email}', '${req.query.subject}', '${req.query.message}')`, function (err, result, fields) {
      if (err) throw err;
      res.redirect('https://phenomit.com/');
    });
});

app.listen(port,() => {
    console.log("listening on port " + port);
});
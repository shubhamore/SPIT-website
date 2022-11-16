const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./model/adminLoginSchema')

// const ejs = require('ejs');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
  }));
mongoose.connect('mongodb://localhost:27017/test_project')
var db=mongoose.connection;
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.get(['/', '/index'], (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/src/academics', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/academics.html'))
})
app.get('/src/clubs', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/clubs.html'))
})
app.get('/src/placements', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/placements.html'))
})
app.get('/src/contactus', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/contactus.html'))
})
app.get('/src/admission', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/admission.html'))
})
app.get('/src/admin', (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/admin.html'))
})
app.get('/src/dashboard', (req, res) => {
    console.log("dashboard appeared in url");
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, 'src/dashboard.html'))
})

app.listen(3000, () => {
    console.log("listening on port 3000...");
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'invalid username/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        console.log("you are logged in ...");
        return res.redirect('/src/dashboard')
        // return res.sendFile(path.resolve(__dirname, 'src/dashboard.html'))
        // return res.json({status:'ok',data:'loggedin'})
    }
    res.json({ status: 'error',error:"invalid username/password" })
})

app.post('/contactform', function (req, res) {
    // console.log("logging the body now");
    // console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var data = {
        "name": name,
        "email": email,
        "message": message,
    }
    db.collection('contact_details').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    //return res.redirect('/src/dashboard.html');
    // return res.json({status:"ok", data:"logged in"})
})
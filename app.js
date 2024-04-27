const express = require('express');
const path = require("path");
const app = express();
const ejs = require("ejs");

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const static_path = path.join(__dirname, "../PROJECT6THSEM");

app.use(express.static(static_path));
app.set("view engine", "ejs");

require('./database.js').connect();

app.get('/', (req, res)=>{
    res.render("index");
});

app.get('/about.ejs', (req, res)=>{
    res.render("about");
});

app.get('/contact.ejs', (req, res)=>{
    res.render("contact");
});
app.get('/jobs.ejs', (req, res)=>{
    res.render("jobs");
});
app.get('/login.ejs', (req, res)=>{
    res.render("login");
});
app.get('/register.ejs', (req, res)=>{
    res.render("register");
});
app.get('/view_company.ejs', (req, res)=>{
    res.render("view_company");
});
app.get('/view_job', (req, res)=>{
    res.render("view_job");
});

const user = require("./Models/user.js");

app.post('/register', async (req, res)=> {
    try{
        //fetch data
        const {name, email, pass, c_pass} = req.body;

        //check if user already exits
        const existingUser = await user.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'User already Exist',
            });
        }
        
        // checking if both password are same
        if(pass === c_pass){
            //create entry for User
            const newUser = await user.create({
                name, email, pass, c_pass
            });
            return res.status(201).render("index");
        }
        else{
            return res.status(402).json({
                success: false,
                message: 'Password did not match!',
            });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "User cannot be created, try again later"
        });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
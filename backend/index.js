const express=require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");
const cors=require("cors");

var smtpTransport = require('nodemailer-smtp-transport');
const app=express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Welcome!");
})


const transporter = nodemailer.createTransport(smtpTransport({
    service:'gmail',
    // host: 'smtp.gmail.com', 
    // port: 465,
    // secure:true,
    auth: {
      user: process.env.email,
      pass: process.env.pass
    }
  }));
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


app.post('/send', (req, res, next) => {
    
    var email = req.body.email
    var message="Thank you for subscribing to our newsletter!"
  
    var mail = {
        from:'user@gmail.com',
        to:email,
        subject:'Subscription for doc2pen',
        html:`<h6>${message}</h6>`
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          status: 'fail'
        })
      } else {
        console.log("Sent!");
        res.json({
         status: 'success'
        })
      }
    })
  })

  const PORT=process.env.PORT || 3001;

  app.listen(PORT, ()=>{
      console.log(`Server is listening at ${PORT}`)
  })
// const express = require('express')
// const mongoose =  require('mongoose')
// const url='mongodb+srv://emanikandan9750:emanikandan9750@aliendbex.ccbso58.mongodb.net/?retryWrites=true&w=majority&appName=AlienDBex'

// const app=express()

// mongoose.connect(url,{userNewUrlParser:true})
// const con=mongoose.connection

// con.on('open',function(){
//     console.log("connected...")
// })


// const express = require('express');
// const mongoose = require('mongoose');

// const url = 'mongodb+srv://emanikandan9750:emanikandan9750@aliendbex.ccbso58.mongodb.net/?retryWrites=true&w=majority&appName=AlienDBex';

// const app = express();



// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const con = mongoose.connection;

// con.on('open', () =>{
//     console.log("connected...")
// })

// app.use(express.json());


// const alienRouter =require('./routers/aliens')
// app.use('/aliens',alienRouter)

// app.listen(3000, () =>{
//      console.log('Server is running on port 3000')
//  })


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb+srv://emanikandan9750:emanikandan9750@aliendbex.ccbso58.mongodb.net/?retryWrites=true&w=majority&appName=AlienDBex';

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling
const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);

// MongoDB connection and server listening
// Ensure your MongoDB connection setup is correct
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log("connected...");
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});




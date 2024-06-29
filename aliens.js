// const express= require('express')
// const router =express.Router()
// const Alien=require('./models/alien')

// router.get('/',async(req,res)=>{
//    try{
// const aliens= await Alien.find()

// res.json(aliens)
//    }
//    catch(err){
// res.send('ERRor'+ err)
//    }
// })

// router.post('/',async(res,req)=>{
//     const { name, tech, sub } = req.body;
//     const alien=new Alien({
//         name:name,
//         tech:tech,
//         sub:sub
//     });

//     try{
//            const a1=await alien.save()
//            res.json(a1)
//     }
//     catch(err){
//         res.send("ERROR"+err)
//     }
// })

// module.exports= router


// const express = require('express');
// const router = express.Router();
// const Alien = require('../models/alien'); // Adjust the path to your alien model

// router.get('/', async (req, res) => {
//     try {
//         const aliens = await Alien.find();
//         res.json(aliens);
//     } catch (err) {
//         res.status(500).send('Error: ' + err);
//     }
// });

// router.post('/', async (req, res) => {
   
//     const { name, tech, sub } = req.body;
//     try {
//     const alien = new Alien({
//         name: name,
//         tech: tech,
//         sub: sub
//     });

    
//         const savedAlien = await alien.save();
//         res.json(savedAlien);
//     } catch (err) {
//         res.status(500).send('Error: ' + err);
//     }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, tech, sub } = req.body;

    try {
        const alien = new Alien({
            name: name,
            tech: tech,
            sub: sub
        });

        const savedAlien = await alien.save();
        res.status(201).json(savedAlien);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

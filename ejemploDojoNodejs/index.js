const express = require('express');
const cors = require('cors');
const app = express();
const uri = require('./app/config/db.config');
const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(uri, (err, res) => {
 
    if (err) throw err;
    console.log("Base de datos online")
 }); 

const corsOption = {
    origin: "http://localhost:3000" 
};

app.use(cors(corsOption));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
   });

app.get('/', async (req,res)=>{
    res.send('Espoti fai');
})
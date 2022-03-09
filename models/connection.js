require("dotenv").config();
const mongoose = require('mongoose');


/////////
//Database Connection
/////////

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish 

mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
    .on('open', () => console.log('We are in the building'))
    .on('close', () => console.log('Mongo Has left the building'))
    .on('error', (error) => console.log(error))

module.exports = mongoose;
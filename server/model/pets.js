const mongoose = require('mongoose')

const { Schema, model } = mongoose;


const petSchema =  new mongoose.Schema({
 
  name: { 
    type: String,
    required: true
  },
 age: Number,
 breed: String,
 img:
    {
        data: Buffer,
        contentType: String
    }
 
})



module.exports = mongoose.model("Pets", petSchema)
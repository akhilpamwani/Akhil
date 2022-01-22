// Importing statements

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Creating Schema
  const Contact = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    detail: { type: String, required: true },
   


})

// Creting Model
  const ContactModel = mongoose.model('ContactModel', Contact)
module.exports=ContactModel
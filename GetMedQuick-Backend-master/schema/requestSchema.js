const mongoose = require('mongoose');


const RequestSchema = new mongoose.Schema(
    {
        tohospital :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
        to: {
               type : String
        },
        fromhospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
        },
        message: {
            type: String,
        },
        contact: {
            type: String,
        },
        type: {
            type: String,
        },
        status: {
            type: String,
            default: 'pending'
        },
        itemname:{
            type : String
        },
        itemname:{
            type : String
        },
        price:{
            type : String
        }
    }
);

const Request = mongoose.model('Person', RequestSchema);

module.exports = Request;
const mongoose = require('mongoose')


const EquipmentSchema = new mongoose.Schema(
    {

        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        },
        name: {
            type: String
        },
        quantity: {
            type: Number
        },
        price:{
            type: String
        }
    }
);

const BloodSchema = new mongoose.Schema(
    {

        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        },
        name: {
            type: String
        },
        quantity: {
            type: Number
        },        price:{
            type: String
        }
    }
);

const OrganSchema = new mongoose.Schema(
    {
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        },
        name: {
            type: String
        },
        quantity: {
            type: Number
        }   ,     price:{
            type: String
        }
    }
);


const MedicineSchema = new mongoose.Schema(
    {

        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        },
        name: {
            type: String
        },
        quantity: {
            type: Number
        },        price:{
            type: String
        }
    }
);


const Equipment = mongoose.model('Equipment', EquipmentSchema);

const Blood = mongoose.model('Blood', BloodSchema);

const Organ = mongoose.model('Organ', OrganSchema);

const Medicine = mongoose.model('Medicine', MedicineSchema);


module.exports = { Medicine, Organ, Equipment, Blood };


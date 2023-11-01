const mongoose = require('mongoose');
require('dotenv').config()

const YoloSchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true
    },
    operationHours: {
        type: String,
        required: true
    },
    operationDays: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    phoneNumber: {
        type: Number
    },
    website: {
        type: String
    },
    address: {
        address1: {
            type: String,

        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    },


    comment: [{
        message: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    activityImage: [String],
    likes: Number,
}, {
    timestamps: true,
}
);
module.exports = Yolo = mongoose.model('yolo', YoloSchema);
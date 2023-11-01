const mongoose = require('mongoose');
require('dotenv').config()

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    }, 
    lastName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    userImage:{
        type: [String],
   
    },
    events:[{
        eventPurchased:{type:String},
        dateOfEvent:{type:String},
       
    }],
    paymentInfo:{
        address:{String},
        city:{String},
        state:{String},
        zipcode:{String},
        creditCardType:{String},
        creditCard:{Number},
        expiration:{Number},
        cvv:{Number},
    
    }
},
{
    timestamps: true,
  }
);
module.exports = User = mongoose.model('user', UserSchema);

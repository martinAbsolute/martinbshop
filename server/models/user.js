const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    avatar: {
        type: String,
        default: "https://icstravelgroup.com/wp-content/uploads/2017/07/icstravelgroup_clients_icons00001.png"
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        default: "male"
    },
    email: {
        type: String,
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Order'
    },
    address: {
        address1: String,
        address2: String,
        city: String,
        country: String,
        zip: String,
        phone: String
    }
});

module.exports = mongoose.model('User', userSchema);
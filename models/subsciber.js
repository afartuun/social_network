const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema ({
    name :{
        type: String,
        required: true

    },
    subscribedToChannel : {
        type: String,
        required: true

    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema);
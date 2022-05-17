const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "SetUp must be at least 3 characters"]
    },
    punchline:{
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Jokes', JokesSchema);
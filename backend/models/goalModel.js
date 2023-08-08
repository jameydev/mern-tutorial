const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Goal text is required."],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Goal", goalSchema);
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is required."],
        ref: "User",
    },
    text: {
        type: String,
        required: [true, "Goal text is required."],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Goal", goalSchema);
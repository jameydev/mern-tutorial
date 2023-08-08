const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

/**
 * @desc Get goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
});

/**
 * @desc Set goal
 * @route POST /api/goals
 * @access Private
 */
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please include a goal text.");
    }

    res.status(200).json({message: "POST'd to server!"});
});

/**
 * @desc Update goals
 * @route PUT /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `PUT to server with id: ${req.params.id}`});
});


/**
 * @desc Delete goal
 * @route DELETE /api/goals/:id
 * @access Private
 */
const deleteGoal = async (req, res) => {
    res.status(200).json({message: `DELETE from server with id: ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
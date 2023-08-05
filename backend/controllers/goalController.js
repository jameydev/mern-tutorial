/**
 * @desc Get goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = function(req, res) {
    res.status(200).json({message: "Hello from server!"});
}

/**
 * @desc Set goal
 * @route POST /api/goals
 * @access Private
 */
const setGoal = function(req, res) {
    res.status(200).json({message: "POST'd to server!"});
}

/**
 * @desc Update goals
 * @route PUT /api/goals/:id
 * @access Private
 */
const updateGoal = function(req, res) {
    res.status(200).json({message: `PUT to server with id: ${req.params.id}`});
}


/**
 * @desc Delete goal
 * @route DELETE /api/goals/:id
 * @access Private
 */
const deleteGoal = function(req, res) {
    res.status(200).json({message: `DELETE from server with id: ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
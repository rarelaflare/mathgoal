const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalmodel')


// @desc Get goals initally
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc Set goals 
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    
    res.status(200).json({
        message: 'Set goals.. This is a Sprint not a Lap!...'
    })
})

// @desc Update goals 
// @route PUT /api/goals
// @access Private

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goals ${req.params.id}`
    })
})

// @desc Delete goals 
// @route DELETE /api/goals
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goals ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoals, 
    updateGoals,
    deleteGoals,
}
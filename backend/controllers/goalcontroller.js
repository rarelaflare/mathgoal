// @desc Get goals initally
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goals.. The Marathon Continues'
    })
}

// @desc Set goals 
// @route POST /api/goals
// @access Private

const setGoals = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    
    res.status(200).json({
        message: 'Set goals.. This is a Sprint not a Lap!...'
    })
}

// @desc Update goals 
// @route PUT /api/goals
// @access Private

const updateGoals = (req, res) => {
    res.status(200).json({
        message: `Update goals ${req.params.id}`
    })
}

// @desc Delete goals 
// @route DELETE /api/goals
// @access Private

const deleteGoals = (req, res) => {
    res.status(200).json({
        message: `Delete goals ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoals, 
    updateGoals,
    deleteGoals,
}
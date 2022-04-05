const express = require('express')
const router = express.Router()
// Refactored to bring function in from controller
const { 
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals
} = require('../controllers/goalcontroller') 

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

// Lines 6-9 can be refactored to:
router.route('/').get(getGoals).post(setGoals)

router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports = router
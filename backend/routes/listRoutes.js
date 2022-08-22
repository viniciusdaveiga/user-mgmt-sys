const express = require('express')
const router = express.Router()
const { 
  getList, 
  setListItem, 
  updateListItem, 
  deleteListItem, 
} = require('../controllers/listController')

router.route('/').get(getList).post(setListItem)
router.route('/:id').delete(deleteListItem).put(updateListItem)

module.exports = router
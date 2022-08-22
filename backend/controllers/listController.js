const asyncHandler = require('express-async-handler')

// @desc    Get list
// @route   GET /api/list
// @access  Private
const getList = asyncHandler(async (req, res) => {
  res.status(200).json({ message:'Get list' })
})

// @desc    Set list item
// @route   POST /api/list
// @access  Private
const setListItem = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message:'Set list item' })
})

// @desc    Update list item
// @route   PUT /api/list/:id
// @access  Private
const updateListItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update list item ${req.params.id}` })
})

// @desc    Delete list item
// @route   DELETE /api/list/:id
// @access  Private
const deleteListItem = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete list item ${req.params.id}` })
})

module.exports = {
  getList,
  setListItem,
  updateListItem,
  deleteListItem,
}
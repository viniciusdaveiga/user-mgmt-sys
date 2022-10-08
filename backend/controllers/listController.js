const asyncHandler = require('express-async-handler')

const List = require('../models/listModel')

// @desc    Get list
// @route   GET /api/list
// @access  Private
const getList = asyncHandler(async (req, res) => {
  const list = await List.find()

  res.status(200).json(list)
})

// @desc    Set list item
// @route   POST /api/list
// @access  Private
const setListItem = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const listItem = await List.create({
    text: req.body.text
  })

  res.status(200).json(listItem)
})

// @desc    Update list item
// @route   PUT /api/list/:id
// @access  Private
const updateListItem = asyncHandler(async (req, res) => {
  const listItem = await List.findById(req.params.id)

  if(!listItem) {
    res.status(400)
    throw new Error('List item not found')
  }

  const updatedListItem = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updateListItem)
})

// @desc    Delete list item
// @route   DELETE /api/list/:id
// @access  Private
const deleteListItem = asyncHandler(async (req, res) => {
  const listItem = await List.findById(req.params.id)

  if(!listItem) {
    res.status(400)
    throw new Error('List item not found')
  }

  await listItem.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getList,
  setListItem,
  updateListItem,
  deleteListItem,
}
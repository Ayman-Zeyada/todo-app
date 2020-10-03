const express = require("express");
const router = express.Router();

// Todo model
const Todo = require("../../models/todo");

// @route   GET api/todos
// @desc    Get All Todos
// @access  Public   
router.get("/", (req, res) => {
  Todo.find().then((todos) => res.json(todos));
});

// @route   POST api/todos
// @desc    Create A Todo
// @access  Public
router.post("/", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });
  newTodo.save().then((todo) => res.json(todo));
});

// @route   Patch api/todos/:id
// @desc    Edit A Todo
// @access  Public
router.patch('/:id', (req, res) => {
    Todo.findOneAndUpdate({_id: req.params.id}, { title: req.body.title, isDone: req.body.isDone }, { new: true })
      .then((updatedTodo) => res.json(updatedTodo))
      .catch(() => res.status(404).json({ success: false }));
});

// @route   Delete api/todos/:id
// @desc    Delete A Todo
// @access  Public
router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

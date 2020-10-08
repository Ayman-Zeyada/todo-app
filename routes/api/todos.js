const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Todo model
const Todo = require("../../models/todo");

// @route   GET api/todos
// @desc    Get All Todos
// @access  Private
router.get("/", auth, (req, res) => {
  Todo.find({ owner: req.user.id }).then((todos) => res.json(todos));
});

// @route   POST api/todos
// @desc    Create A Todo
// @access  Private
router.post("/", auth, (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    owner: req.user.id,
  });
  newTodo.save().then((todo) => res.json(todo));
});

// @route   Patch api/todos/:id
// @desc    Edit A Todo
// @access  Private
router.patch("/:id", auth, (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.id },
    { title: req.body.title, isDone: req.body.isDone },
    { new: true }
  )
    .then((updatedTodo) => res.json(updatedTodo))
    .catch(() => res.status(404).json({ success: false }));
});

// @route   Delete api/todos/:id
// @desc    Delete A Todo
// @access  Private
router.delete("/:id", auth, (req, res) => {
  Todo.findOne({ _id: req.params.id, owner: req.user.id })
    .then((todo) => todo.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

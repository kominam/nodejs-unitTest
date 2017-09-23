require('babel-polyfill');
import Todo from '../models/Todo';

let index = async function (req, res) {
  try {
    let todos = await Todo.find({});
    res.status(200).json({
      data: todos
    })
  } catch(err) {
    res.status(500).json({
      err
    });
  }
}

let store = async function (req,res) {
  try {
    let newTodo = await Todo.create({
        content: req.body.content
    });
    res.status(200).json({
        data: newTodo
    })
  } catch(err) {
    res.status(500).json({
        err
    });
  }
}

export { index, store };

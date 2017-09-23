import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
  content: String,
  isComplete: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Todo', todoSchema);

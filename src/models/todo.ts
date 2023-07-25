import mongoose from "mongoose";

export interface ITodo {
  title: string;
  desc: string;
}

const todoSchema = new mongoose.Schema<ITodo>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;

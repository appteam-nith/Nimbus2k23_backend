import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

 const QuestionModel = new Schema({
    id: {
        type: Number,
        required: true
      },
      question: {
        type: String,
        required: true,
        default:'what is your name'
      },
      options: [{
        type: String,
        required: true
      }]
 });
 
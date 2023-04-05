const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  user1Id: {
    type: String,
    required: true
  },
  user2Id: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['filled', 'oneUser'],
    default: 'oneUser'
  }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
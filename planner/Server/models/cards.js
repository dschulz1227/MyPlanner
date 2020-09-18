const mongoose = require('mongoose');
const { default: TaskCard } = require('../../Client/src/components/TaskCard');
const mongoCard = require('./TaskCard');


//full collection

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 1 },
  cards: [TaskCard.schema],
});

module.exports = mongoose.model('Collection', collectionSchema);
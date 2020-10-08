const mongoose = require('mongoose');
const { CreateTask } = require('../../Client/src/components/CreateTask');


//full collection

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 1 },
  cards: [CreateTask.schema],
});

module.exports = mongoose.model('Collection', collectionSchema);
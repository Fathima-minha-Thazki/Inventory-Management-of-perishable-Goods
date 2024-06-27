const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  goodType: { type: String, required: true },
  good: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
  storageTemperature: { type: Number, required: true },
  storageHumidity: { type: Number, required: true },
  storedMethod: { type: String, required: true }
});

module.exports = mongoose.model('Form', FormSchema);

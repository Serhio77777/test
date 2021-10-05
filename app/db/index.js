const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://serhiosalat:dambldor@cluster0.arh9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

const qwertyScheme = mongoose.Schema({
  title: String,
  author: String,
  year: String,
  pages: Number,
  comment: String,
  date: { type: Date, default: Date.now }
});

const Qwerty = mongoose.model('Qwerty', qwertyScheme);

module.exports = {
  connection,
  Qwerty
}
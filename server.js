const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  require('dotenv').config();
}

//Backend API
app.use(require('./routes'));

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

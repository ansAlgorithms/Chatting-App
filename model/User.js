const mongoose = require('mongoose');

//Create s Schema which represents the model of the user.
const userSchema = new mongoose.Schema({   
      name: {
          type: String,
          required: true
      },
      message: {
          type: String,
          required: true
      }
});

module.exports = mongoose.model('User', userSchema);

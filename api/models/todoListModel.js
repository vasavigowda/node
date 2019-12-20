var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  fname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  lname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
 
  
});

module.exports = mongoose.model('Tasks', TaskSchema);
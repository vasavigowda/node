module.exports = function(app) {
  var userData = require('../controllers/todoListController');
  var hospitaldet=require('../controllers/todoListController');
  var timer=require('../controllers/todoListController');
  var appoint=require('../controllers/todoListController');
  var selectdoctor = require('../controllers/todoListController');
  var isAuth = require('../Middleware/isAuth')
  app.route('/signup')
  .post(userData.userSignup)
  .get(userData.getAllUsers)
  app.route('/signin',isAuth)
  .post(userData.userSignin) 
  .get(userData.getAllSignin) 
  app.route('/details')
  .get(hospitaldet.hospitalDetails)
  app.route('/count')
  .get(timer.counting)
  app.route('/appointment')	
  .post(appoint.getAppointment)
  .get(appoint.getAppointmentDetails)	
  app.route('/selectdoctor')	
  .post(selectdoctor.postSelectDoctor)
  .get(selectdoctor.getSelectDoctor)
  app.route('/selectdoctor/:id')
  .delete(selectdoctor.deleteDoctor)
  .put(selectdoctor.updateAppointment)
  };
  
  
  
  
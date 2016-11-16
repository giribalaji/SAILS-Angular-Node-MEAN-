/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'app',
    locals: {
      layout: false
    }
  },  
  '/home': {
    view: 'index',
  },
  '/courses.html': 'Web.Courses', 
  '/instructor.html': {
    view: 'instructor',
  }, 
  '/services.html': {
    view: 'services',
  },
  '/test.html': {
    view: 'test',
  },
  '/contact.html': {
    view: 'contact',
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'POST /api/User/login':'Users.login',
  'POST /api/User/create':'Users.create',
  //Student
  'GET /api/student/list':'Student.list',
  'GET /api/student/:id':'Student.findById',
  'POST /api/student/create':'Student.create',
  'PUT /api/student/update/:id': 'Student.update',

  //Course
  'GET /api/course/list':'Courses.list',
  'GET /api/course/:id':'Courses.findById',

  //Batch
  'GET /api/batch/list':'Batch.list',
  'GET /api/batch/:id':'Batch.findById',

  //Payment
  'GET /api/payment':'Payment.find',
  'GET /api/payment/:id':'Payment.findById',
  'GET /api/payment/student/:id':'Payment.findByStudentId',
  'GET /api/payment/batch/:id':'Payment.findByBatchId',
  'GET /api/payment/course/:id':'Payment.findByCourseId',
  'GET /api/payment/type/:id':'Payment.findByTypeId',
  'GET /api/payment/method/:id':'Payment.findByMethodId',
  'POST /api/payment/student/add': 'Payment.addStudentPayment',

  //Dashboard
  'GET /api/dashboard/student/latest':'Dashboard.recentlyJoinedStudent',
  'GET /api/dashboard/batch/latest':'Dashboard.latestBatch',
  'GET /api/dashboard/payment/latest':'Dashboard.latestPayment',
  'GET /api/dashboard/dues/latest':'Dashboard.latestDues',
  'GET /api/dashboard/resultcount':'Dashboard.resultCount',


};

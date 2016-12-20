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
    view: 'homepage'
  },
    // 'get/class':'ClassController.index',
    'get /class':'ClassController.show',
    'post /class':'ClassController.create',
    'put /class/:id':'ClassController.update',
    'delete /class/:id':'ClassController.destroy',
 
    // // 'get/subjects':'SubjectController.index',
    // 'get /class/:classId/subjects/:id':'SubjectController.show',
    // 'post /class/:classId/subjects':'SubjectController.create',
    // 'put /class/:classId/subjects/:id':'SubjectController.update',
    // 'delete /class/:classId/subjects/:id':'SubjectController.destroy',
 
    // // // 'get /strands':'StrandController.index',
    // 'get /class/:classId/subjects/:subjectId/strands/:id':'StrandController.show',
    // 'post /class/:classId/subjects/:subjectId/strands':'StrandController.create',
    // 'put /class/:classId/subjects/:subjectId/strands/:id':'StrandController.update',
    // 'delete /class/:classId/subjects/:subjectId/strands/:id':'StrandController.destroy',
       

     // 'get /strands':'StrandController.index',
    'get /subjects/:id':'SubjectController.show',
    'post /subjects':'SubjectController.create',
    'put /subjects/:id':'SubjectController.update',
    'delete /subjects/:id':'SubjectController.destroy',

     // 'get /strands':'StrandController.index',
    'get /strands/:id':'StrandController.show',
    'post /strands':'StrandController.create',
    'put /strands/:id':'StrandController.update',
    'delete /strands/:id':'StrandController.destroy',


    // 'get /strands':'StrandController.index',
    'get /subscopes/:id':'SubscopeController.show',
    'post /subscopes':'SubscopeController.create',
    'put /subscopes/:id':'SubscopeController.update',
    'delete /subscopes/:id':'SubscopeController.destroy',

    // 'get /strands':'StrandController.index',
    'get /elos':'StrandController.show',
    // 'get /elos/:id':'EloController.show',
    'post /elos':'EloController.create',
    'put /elos/:id':'EloController.update',
    'delete /elos/:id':'EloController.destroy',
     

    // 'get /class/:classId/subjects/:subjectId/strands/:strandId /subscopes/:id':'SubscopeController.show',
    // 'post /class/:classId/subjects/:subjectId/strands/:strandId/subscopes':'SubscopeController.create',
    // 'put /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:id':'SubscopeController.update',
    // 'delete /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:id':'SubscopeController.destroy',

    // 'get /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:subscopeId/elos/:id':'EloController.show',
    // 'post /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:subscopeId/elos':'EloController.create',
    // 'put /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:subscopeId/elos/:id':'EloController.update',
    // 'delete /class/:classId/subjects/:subjectId/strands/:strandId/subscopes/:subscopeId/elos/:id':'EloController.destroy',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

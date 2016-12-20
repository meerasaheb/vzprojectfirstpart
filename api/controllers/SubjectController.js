/**
 * SubjectController
 *
 * @description :: Server-side logic for managing subjects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SubjectController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `SubjectController.show()`
   */
  show: function (req, res) {
     var id = req.param('id');
     Subject.find().populate('strand').exec(function(err, showSubject) {
            if (err) { res.send(err, 500);
            }
            res.json({ showSubject: showSubject });
        });
  },


  /**
   * `SubjectController.create()`
   */
  create: function (req, res) {
    var params = req.params.all()
    Subject.create(params, function(err,createSubject){
      // var id = createClass.id
          if(err){
            res.send(err, 500)
          }
       res.json(createSubject)
     })
  },


  /**
   * `SubjectController.update()`
   */
  update: function (req, res) {
    var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Subject.update(id, params, function(err, updateSubject) {
            if (err) return res.send(err, 500);
            console.log(updateSubject)
            res.json({ updateSubject: updateSubject });
        });
  },


  /**
   * `SubjectController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `SubjectController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
        console.log(id);
       Subject.destroy(id, function(err, destroySubject) {
            if (err) return res.send(err, 500);
            res.json({ destroySubject: "delete" });
        });
  }
};


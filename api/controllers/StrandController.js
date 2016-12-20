/**
 * StrandController
 *
 * @description :: Server-side logic for managing strands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Q = require("q");
module.exports = {
	


  /**
   * `StrandController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `StrandController.show()`
   */
  show: function (req, res) {
     var temp = [];
     // var name = req.param('name')
     Strand.find().where().exec(function(err, showStrand) {
            if (err) { 
              res.send(err, 500);
            }
            Q.all(_.map( showStrand, all =>{
              var id = all.id;
              var result = all
              // console.log(id)
             
              return Subscope.find().where({strandId : id }).populate('elos').then(function(showSubscope){
                  
                  // console.log(showSubscope)
                   result["Subscope"]= [showSubscope]
                   // res.json(result)
                   return result
              })
            }))
            .then(function(value){
              res.json(value)
            })
          })
  },


  /**
   * `StrandController.create()`
   */
  create: function (req, res) {
    var params = req.params.all()
    Strand.create(params, function(err,createStrand){
      // var id = createClass.id
          if(err){
            res.send(err, 500)
          }
       res.json(createStrand)
     })
  },


  /**
   * `StrandController.update()`
   */
  update: function (req, res) {
     var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Strand.update(id, params, function(err, updateStrand) {
            if (err) return res.send(err, 500);
            console.log(updateStrand)
            res.json({ updateStrand: updateStrand });
        });
  },


  /**
   * `StrandController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `StrandController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
        console.log(id);
       Strand.destroy(id, function(err, destroyStrand) {
            if (err) return res.send(err, 500);
            res.json({ destroyStrand: "delete" });
        });
  }
};


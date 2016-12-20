/**
 * EloController
 *
 * @description :: Server-side logic for managing eloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EloController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `EloController.show()`
   */
  show: function (req, res) {
   var id = req.param('id');
        Elo.findOne(id).exec(function(err, showELo) {
            if (err) {
                res.send(err, 500);
            }
            res.json({ showELo: showELo });
        });
  },


  /**
   * `EloController.create()`
   */
  create: function (req, res) {
   var params = req.params.all()
    Elo.create(params, function(err,createElo){
      // var id = createClass.id
          if(err){
            res.send(err, 500)
          }
       res.json(createElo)
     })
  },


  /**
   * `EloController.update()`
   */
  update: function (req, res) {
   
         var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Elo.update(id, params, function(err, updateElo) {
            if (err) return res.send(err, 500);
            console.log(updateElo)
            res.json({ updateElo: updateElo });
        });
  },


  /**
   * `EloController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `EloController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
        console.log(id);
       Elo.destroy(id, function(err, destroyElo) {
            if (err) return res.send(err, 500);
            res.json({ destroyElo: "delete" });
        });
  }
};


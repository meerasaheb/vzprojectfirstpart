/**
 * SubscopeController
 *
 * @description :: Server-side logic for managing subscopes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `SubscopeController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `SubscopeController.show()`
     */
    show: function(req, res) {
        var id = req.param('id');
        Subscope.find().populate('elos').exec(function(err, showSubscope) {
            if (err) {
                res.send(err, 500);
            }
            res.json({ showSubscope: showSubscope });
        });
    },


    /**
     * `SubscopeController.create()`
     */
    create: function(req, res) {
        var params = req.params.all()
    Subscope.create(params, function(err,createSubscope){
      // var id = createClass.id
          if(err){
            res.send(err, 500)
          }
       res.json(createSubscope)
     })
    },


    /**
     * `SubscopeController.update()`
     */
    update: function(req, res) {
         var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Subscope.update(id, params, function(err, updateSubscope) {
            if (err) return res.send(err, 500);
            console.log(updateSubscope)
            res.json({ updateSubscope: updateSubscope });
        });
    },


    /**
     * `SubscopeController.edit()`
     */
    edit: function(req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `SubscopeController.destroy()`
     */
    destroy: function(req, res) {
         var id = req.param('id');
        console.log(id);
       Subscope.destroy(id, function(err, destroySubscope) {
            if (err) return res.send(err, 500);
            res.json({ destroySubscope: "delete" });
        });
    }
};

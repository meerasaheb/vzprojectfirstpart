/**
 * ClassController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require("q");
module.exports = {

    // index: function (req, res) {
    //     Class.find()
    //     //.populate("entites")
    //     .populateAll()
    //     //.populate('token')
    //     .exec(function(err,tenentss){
    //     if(err){
    //       return res.json(err);
    //     }
    //     res.json({model:tenentss});
    //    });
    //   },

    /**
     * `ClassController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `ClassController.show()`
     */
    show: function(req, res) {
        // var id = req.param('id');
        // var temp = [];
        Class.find().exec(function(err, showClass) {
            if (err) {
                res.send(err, 500);
            }
            Q.all(_.map(showClass, all => {
                    var id = all.id;
                    var result = all
                    console.log(id)
                    console.log(result)

                    // return Subject.find().where({ classId : id}).exec(function(err,showSubject){
                    //     console.log(showSubject)
                    //    if (err) { res.send(err, 500);
                    //     }

                    //    result.Subject = [showSubject]
                    // return "result
                    // result
                    // res.json(result);

                    // var id = showSubject.id
                    //  var strand = showSubject
                    //  console.log(id)
                    // return  Strand.find().where({ subjectId : id }).then(function(err,showStrand){
                    //       if (err) { res.send(err, 500);
                    //       }
                    //      // console.log(showStrand)
                    //        strand.Strand = [showStrand]
                    //        return  result.Subject = [strand]
                    //      // result.
                    //     // res.json(result)
                    //     var id = showStrand.id
                    //     console.log(id)
                    //     var sub = showStrand
                    //    return Subscope.find().where({strandId : id}).populate('elos').exec(function(err,showSubscopeandElos){
                    //           if (err) { res.send(err, 500);
                    //       }
                    //       console.log(showSubscopeandElos)
                    //        return sub.Subscope = [showSubscopeandElos]
                    //       // result.Subject = [sub]
                    //       // res.json(result)
                    //     })
                    // })
                    // }))
                    // })

                    return Subject.find().where({ classId: id }).then(function(showSubject) {
                        // console.log(showSubject)
                        result["Subject"] = showSubject;
                           // _.map(showSubject, showSubject => {})
                        var id = showSubject[0].id
                        var strand = showSubject[0]
                        console.log(id)
                        return Strand.find().where({ subjectId: id }).then(function(showStrand) {
                            // console.log(showStrand)
                            strand["Strand"] = showStrand;
                            result["Subject"] = [strand];
                            // return result;
                            var id = showStrand[0].id
                            var sub = showStrand[0]
                            return Subscope.find().where({ strandId: id }).populate('elos').then(function(showSuscope) {
                              sub["Subscope"] = showSuscope;
                                return result;

                            })

                        })
                    })
                }))
                .then(function(value) {
                    console.log("total values ---->", value)
                    res.json(value);
                })

        });

    },


    /**
     * `ClassController.create()`
     */
    create: function(req, res) {
        var params = req.params.all()
        Class.create(params, function(err, createClass) {
            // var id = createClass.id
            if (err) {
                res.send(err, 500)
            }
            res.json(createClass)
        })
    },


    /**
     * `ClassController.update()`
     */
    update: function(req, res) {
        var params = req.params.all();
        // console.log(params)
        var id = req.param('id');
        // console.log(id)
        Class.update(id, params, function(err, updateClass) {
            if (err) return res.send(err, 500);
            console.log(updateClass)
            res.json({ updateSubScope: updateClass });
        });
    },


    /**
     * `ClassController.edit()`
     */
    edit: function(req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `ClassController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        console.log(id);
        Class.destroy(id, function(err, destroyClass) {
            if (err) return res.send(err, 500);
            res.json({ destroySubScope: "delete" });
        });
    }
};

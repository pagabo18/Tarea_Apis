const Database = require("../../core/database");
const linkAs = require("./linkA.models");
const Database = require('../../core/database');
const User = require('../users/user.model');

const linkAsController = {
    getAll: (req, res) => {
        const linkA = new linkAs();
        linkA.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const linkA = new linkAs();
        linkA.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    addUser: (req, res) => {
        const linkA = new linkAs();

        linkA.getOne(req.params.invite).then(result => {
            if(result){
                Database.collection("linkA").updateOne({_id: result._id}, {$set: {requester: req.body.requester, room: req.body.room, rol: req.body.rol}}, function(err, res) {
                    if(err) console.log("err");
                    else console.log("succes");
                });
            }
        });
    }
}

module.exports = linkAsController;
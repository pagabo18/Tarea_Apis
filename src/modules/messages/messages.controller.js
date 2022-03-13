const Message = require("./messages.models");
const Database = require('../../core/database');

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },

    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
 
    create: (req, res) => {
        const message = {
            name: req.body.name,
            messages: req.body.messages,
            sender: req.body.Father
        };

        Database.collection("messages").insertOne(message, function(err, res) {
            if(err) console.log("err");
            else console.log("Todo bien")
            
        });
       res.send(message);

    },
}

module.exports = MessagesController;
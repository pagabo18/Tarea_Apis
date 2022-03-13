const rooms = require('./rooms.model');
const Database = require('../../core/database');
const User = require('../users/user.model');

const roomsController = {
    getAll: (req, res) => {
        const room = new rooms();
        room.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        console.log(req.body);
        const room = new rooms();
        room.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },

    create: (req, res) => {
        console.log(req.body.name);
        console.log(req.body.description);

        const room = {
            name: req.body.name,
            messages: req.body.messages,
            roles: req.body.roles,
            Father: req.body.Father
        };
        Database.collection("rooms").insertOne(room, function(err, res) {
            if(err) console.log("err");
            else console.log( "success");
            
        });
       res.send(room);

    },

    linkCreate: (req, res) => {
        const roomsa = new rooms();

        const link = {
            requester: req.body.requester,
            room: req.body.room,
            rol: req.body.rol
        }

        roomsa.getOne(req.body.room).then(result => {
            if(result){
               if(result.Father == req.body.requester){
                    Database.collection("linkA").insertOne(link,function(err,res) {
                        if(err) console.log("err");
                        else console.log("succes");
                    }); res.send("localhost:3000/api/rooms/invite/"+ link._id);
               }else{res.send(403)}
            } else {res.send(404);}
        });
    },

    linkRecieve: () =>{
        const room = new rooms();


        

        // recibo 
        // link: 622d679fc549577f808c4cb4
        // user: 6229a2983113ff1afed5b3c4


    }
     
}

module.exports = roomsController;
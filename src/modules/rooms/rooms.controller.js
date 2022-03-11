const rooms = require('./rooms.model');

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
        const user = new User({
            name: req.body.name,
            description: req.body.description,
            roles: ["622aef0c8a2fa28a1d9abb1d"],
            users: [],
            messages: []
        });
    
        user.save()
            .then((result => {
                res.post(result);
            })
            )
            .catch((err) => console.log(err))
      },
}

module.exports = roomsController;
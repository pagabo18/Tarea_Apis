const roles = require("./roles.models");

const rolesController = {
    getAll: (req, res) => {
        const role = new roles();
        role.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const role = new roles();
        role.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        res.send('create role');
    }
}

module.exports = rolesController;
const User = require("./user.model");
const Database = require('../../core/database');

const UsersController = {
  getAll: (req, res) => {
    const user = new User();
    user.getAll().then((results) => {
      res.send(results);
    });
  },

  getOne: (req, res) => {
    const user = new user();
    user.getOne(req.params.id).then(result => {
        if(result) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
},

  login: (req, res) => {
    const user = new User();

    user.findEmail(req.body.email).then((result) => {
      if (result) {
        if(req.body.password == result.password) {
          result.connected = true;
          res.send(result);
          
        } else res.send(404);
      } else {
        res.sendStatus(404);
      }
    });
  },


  signIn: (req, res) => {
    console.log(req.body);

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        connected: false,
      };

      Database.collection("users").insertOne(user, function(err, res) {
          if(err) console.log("err");
          else console.log("Todo bien")
          
      });
     res.send(user);
  },
};





// user A room B role C
// room B add user A to userList 
// UPDATE  user A role with room B: role C pair



module.exports = UsersController;
//user
// session conectado o no
//link grupo & asigna un roll

// group
//GROUP creator link grupo
//role admin o no
// channel
// user

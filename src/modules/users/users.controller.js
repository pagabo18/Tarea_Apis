const User = require("./user.model");

const UsersController = {
  getAll: (req, res) => {
    const user = new User();
    user.getAll().then((results) => {
      res.send(results);
    });
  },
  getOne: (req, res) => {
    const user = new User();
    user.getOne(req.params.id).then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.sendStatus(404);
      }
    });
  },

  login: (req, res) => {
    const user = new User();
    user.getOne({ "email": req.params.email }).then((result) => {
      if (
        result.password === req.params.password &&
        req.params.connected != true
      ) {
        const connected = true;
        connected.push(req.body.connected);
        result.url ="http://127.0.01:3000/users/" + result._id;

        user.findOneAndUpdate({ _id: result._id }, { connected: connected });
      } else {
        res.sendStatus(404);
      }
    });
  },

  create: (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        role: "622aef0c8a2fa28a1d9abb1d",
    });

    user.save()
        .then((result => {
            res.post(result);
        })
        )
        .catch((err) => console.log(err))
  },
};

module.exports = UsersController;

//user
// session conectado o no
//link grupo & asigna un roll

// group
//GROUP creator link grupo
//role admin o no
// channel
// message

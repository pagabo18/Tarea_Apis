const router = require("express").Router();

const userRoutes = require("./../modules/users/user.routes");
const messageRoutes = require("../modules/messages/messages.routes");
const rolesRoutes = require("./../modules/roles/roles.routes");
const roomsRoutes = require('./../modules/rooms/rooms.routes');
const linkARoutes = require('./../modules/linkA/linkA.routes');
// const groupRoutes = require("../modules/groups/groups.routes");

router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/roles", rolesRoutes);
router.use('/rooms', roomsRoutes);
router.use('/linkAs', linkARoutes);
// router.use("/group", groupRoutes);


module.exports = router;

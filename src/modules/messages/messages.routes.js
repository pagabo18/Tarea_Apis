const router = require('express').Router();
const controller = require('./messages.controller');

/** 
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *         - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get("/", controller.getAll);


 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *         - Messages
  *       description: Get a user by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the user
  *       responses:
  *         200:
  *           description: User
  */
 router.get("/:id", controller.getOne);
 
 module.exports = router;
 
module.exports = router;


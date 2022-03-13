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
  *       description: Get a message by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the message
  *       responses:
  *         200:
  *           description: message
  */
 router.get("/:id", controller.getOne);


 /**
 * @swagger
 *   /api/messages:
 *     post:
 *       tags:
 *         - Messages
 *       description: Create a new message
 *       parameters:
 *         - in: body
 *           name: sender
 *           description: name of the message
 *           type: string
 *           required: true
 *         - in: body
 *           name: message
 *           description: message 
 *           type: string
 *           required: true
 *          
 */
router.post("/", controller.create);

module.exports = router;



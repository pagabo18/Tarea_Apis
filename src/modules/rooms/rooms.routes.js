const router = require('express').Router();
const controller = require('./rooms.controller');

/** 
 * @swagger
 *   /api/rooms:
 *     get:
 *       tags:
 *        - rooms
 *       description: Get all rooms
 *       responses:
 *         200:
 *           description: Array with a list of rooms
 */
 router.get("/", controller.getAll);


 /**
  * @swagger
  *   /api/rooms/{id}:
  *     get:
  *       tags:
  *         - rooms
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
 
 /**
 * @swagger
 *   /api/rooms:
 *     post:
 *       tags:
 *         - rooms
 *       description: Create a new room
 *     parameters:
 *       - in: body
 *         name: name
 *         description: name of the room
 *         type: string
 *       - in: body
 *         name: users
 *         description: users
 *         type: array
 *       - in: body
 *         name: messages
 *         description: messages
 *         type: array
 *       - in: body
 *         name: roles
 *         description: user role
 *         type: array
 *       - in: body
 *         name:father
 *         description: user father
 *         type: string
 *          
 */
router.post('/', controller.create);

/**
 *  @swagger
  *   /api/rooms/invite:
 *     post:
 *       tags:
 *         - rooms
 *       description: Create a new room
 *     parameters:
 *       - in: body
 *         name: room
 *         description: the room
 *         type: string
 *       - in: body
 *         name: requester
 *         description: room requester
 *         type: string
 *       - in: body
 *         name: role
 *         description: new user role
 *         type: array
 *       - in: body
 */
router.post('/invite', controller.linkCreate);



//localhost:3000/api/rooms/invite/622d7000aba6e4547bffb035
// router.put('/:id', controller.update);
// router.delete('/:id', controller.delete);


module.exports = router;

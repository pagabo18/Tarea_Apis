const router = require('express').Router();
const controller = require('./linkA.controller');

/** 
 * @swagger
 *   /api/linkA:
 *     get:
 *       tags:
 *         - linkA
 *       description: Get all linkA
 *       responses:
 *         200:
 *           description: Array with a list of linkA
 */
 router.get("/", controller.getAll);


 /**
  * @swagger
  *   /api/linkA/{id}:
  *     get:
  *       tags:
  *         - linkA
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
 router.get("/:id", controller.addUser);

 
 module.exports = router;
 

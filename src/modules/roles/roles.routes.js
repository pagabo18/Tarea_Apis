const router = require('express').Router();
const controller = require('./roles.controller');

/** 
 * @swagger
 *   /api/roles:
 *     get:
 *       tags:
 *         - roles
 *       description: Get all roles
 *       responses:
 *         200:
 *           description: Array with a list of roles
 */
 router.get("/", controller.getAll);


 /**
  * @swagger
  *   /api/roles/{id}:
  *     get:
  *       tags:
  *         - roles
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
 

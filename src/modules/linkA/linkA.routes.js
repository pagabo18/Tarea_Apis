const router = require('express').Router();
const controller = require('./linkA.controller');

/** 
 * @swagger
 *   /api/linkAs:
 *     get:
 *       tags:
 *         - linkAs
 *       description: Get all linkAs
 *       responses:
 *         200:
 *           description: Array with a list of linkAs
 */
 router.get("/", controller.getAll);


 /**
  * @swagger
  *   /api/linkAs/{id}:
  *     get:
  *       tags:
  *         - linkAs
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
 

const router = require("express").Router();
const controller = require("./users.controller");

/** 
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *        - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get("/", controller.getAll);


/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *         - Users
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
 *   /api/users{email, password}:
 *     put:
 *       tags:
 *         - Users
 *       description: Login
 *     parameters:
 *       - in: body
 *         name: email
 *         description: email of the user
 *         type: string
 *       - in: body
 *         name: password
 *         description: user password
 *         type: string
 */
router.put("/:email/:password", controller.login);


/**
 * @swagger
 *   /api/users{email, password, name}:
 *     post:
 *       tags:
 *         - Users
 *       description: Create a new user
 *     parameters:
 *       - in: body
 *         name: email
 *         description: email of the user
 *         type: string
 *       - in: body
 *         name: password
 *         description: user password
 *         type: string
 *       - in: body
 *         name: name
 *         description: user name
 *         type: string
 *       - in: body
 *         name: role
 *         description: user role
 *         type: object
 *          
 */
router.post("/:email/:password", controller.create);

module.exports = router;

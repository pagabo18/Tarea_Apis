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
 *   /api/users:
 *     put:
 *       tags:
 *         - Users
 *       description: Login
 *       parameters:
 *         - in: body
 *           name: email
 *           description: email of the user
 *           type: string
 *         - in: body
 *           name: password
 *           description: user password
 *           type: string
 */
router.put("/login", controller.login);


/**
 * @swagger
 *   /api/users:
 *     post:
 *       tags:
 *         - Users
 *       description: Create a new user
 *       parameters:
 *         - in: body
 *           name: email
 *           description: email of the user
 *           type: string
 *           required: true
 *         - in: body
 *           name: password
 *           description: user password
 *           type: string
 *           required: true
 *         - in: body
 *           name: name
 *           description: user name
 *           type: string
 *           required: true
 *         - in: body
 *           name: role
 *           description: user role
 *           type: array
 *           required: true
 *          
 */
router.post("/signin", controller.signIn);

module.exports = router;

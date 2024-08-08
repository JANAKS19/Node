const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/CreateUser:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Internal Server Error
 */
const usermasterController = require('../Controller/UserMaster');

router.post('/createUser', usermasterController.createUser);


/**
 * @swagger
 * /api/UpdateUser:
 *   post:
 *     summary: Update a  user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User Updated successfully
 *       500:
 *         description: Internal Server Error
 */

router.post('/updateuser', usermasterController.updateuser);   



/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Get Cities
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal Server Error
 */

router.get('/cities', usermasterController.getAllCities);



/**
 * @swagger
 * /api/states:
 *   get:
 *     summary: Get states
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal Server Error
 */

router.get('/states', usermasterController.getAllStates);

/**
 * @swagger
 * /getUserById/{userId}:
 *   get:
 *     summary: Get User by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal Server Error
 */


router.get('/getUserById/:userId', usermasterController.getUserById);


module.exports = router;

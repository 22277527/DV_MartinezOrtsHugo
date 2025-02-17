const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Registrar un nuevo usuario
router.post('/register', userController.registerUser);

// Listar todos los usuarios
router.get('/', userController.listUsers);

// Obtener un usuario por ID
router.get('/:id', userController.getUserById);

// Eliminar un usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;

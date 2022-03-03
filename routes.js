const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/articulos",     cors(), controller.readArticulos);  // Read All
router.get    ("/articulos/:id", cors(), controller.readArticulo);   // Read
router.delete ("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post   ("/articulos",     cors(), controller.createArticulo); // Create


router.get    ("/profesores",     cors(), controller.readProfesores);  // Read All
router.get    ("/profesores/:id", cors(), controller.readProfesor);   // Read
router.delete ("/profesores/:id", cors(), controller.deleteProfesor); // Delete
router.put    ("/profesores/:id", cors(), controller.updateProfesor); // Update
router.post   ("/profesores",     cors(), controller.createProfesor); // Create

router.get    ("/asignaturas",      cors(), controller.readAsignaturas);   // Read All
router.get    ("/asignaturas/:id",  cors(), controller.readAsignatura);    // Read
router.delete ("/asignaturas/:id",  cors(), controller.deleteAsignatura);  // Delete
router.put    ("/asignaturas/:id",  cors(), controller.updateAsignatura);  // Update
router.post   ("/asignaturas",      cors(), controller.createAsignatura);  // Create

module.exports = router;

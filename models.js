const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Profesor = mongoose.model('Profesor',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Asignatura = mongoose.model('Asignatura',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Cliente: Cliente,
  Articulo: Articulo,
  Profesor: Profesor,
  Asignatura: Asignatura
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }

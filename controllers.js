const { Cliente, Articulo, Profesor, Asignatura } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

    // ------- PROFESORES

exports.readProfesores = (req, res) =>
Profesor.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.readProfesor = (req, res) =>
Profesor.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.deleteProfesor = (req, res) =>
Profesor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.updateProfesor = (req, res) =>
Profesor.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);


exports.createProfesor = (req, res) =>
new Profesor({ nombre: req.body.nombre, apellidos: req.body.apellidos })
.save((err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});



// ------ ASIGNATURAS

exports.readAsignaturas = (req, res) =>
Asignatura.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.readAsignatura = (req, res) =>
Asignatura.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.deleteAsignatura= (req, res) =>
Asignatura.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});



exports.updateAsignatura = (req, res) =>
Asignatura.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);


exports.createAsignatura = (req, res) =>
new Asignatura({ nombre: req.body.nombre, precio: req.body.precio })
.save((err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});



const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(cors());

app.get('/', function(req, res) {
    res.send('Hola mundo desde el sena');
});

app.listen(3000, function() {
    console.log(`Server running at port ${PORT}`);
});

app.get('/about', function(req, res) {
    res.send('about')
})

app.route('/book')
    .get(function(req, res) {
        res.json([{ "id": "1", "nombre": "Jose", "edad": "25", "genero": "masculino", "email": "josegonzales9871@gmail.com", "localidad": "Madrid", "telefono": "912546524" }, { "id": "2", "nombre": "Juan", "edad": "31", "genero": "masculino", "email": "juanrodriguez65465@gmail.com", "localidad": "Barcelona", "telefono": "934654654" }, { "id": "3", "nombre": "Antonio", "edad": "43", "genero": "masculino", "email": "antoni654654@gmail.com", "localidad": "Valencia", "telefono": "214748366" }, { "id": "4", "nombre": "Angelina", "edad": "35", "genero": "femenino", "email": "angelina654456@gmail.com", "localidad": "New York", "telefono": "247483647" }]);
    })
    .post(function(req, res) {
        res.send('Add a book')
    })
    .put(function(req, res) {
        res.json({ user: 'tobi' })
    })
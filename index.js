// Constantes

const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


//Creamos el servidor
const app = express();
//Conectamos a la base datos
conectarDB();
app.use(cors())
app.use(express.json());

app.get('/prueba', (req,res) =>{
    res.send('API MONGO');
})

app.use('/api/citas', require('./routes/cita')); // Manda a llamar la API a MongoDB <get,post>
app.put('/api/citas/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.use('/api/denuncias', require('./routes/denuncia')); // Manda a llamar la API a MongoDB <get,post>
app.put('/api/denuncias/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.use('/api/auth', require('./routes/usuario'));
app.listen(PORT, () => {console.log(`Server encendido en http://localhost:${PORT}`);});
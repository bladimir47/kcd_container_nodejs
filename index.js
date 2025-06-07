const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const vars = require("./config/vars.config")
const PORT = vars.PORT

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


// Importa el archivo de rutas centralizado

app.use('/gt', routes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API KCD GUATEMALA 2025');
});

app.listen(PORT, () => {
    console.log(`HOLA KCD GUATEMALA 2025 - ESTOY CORRIENDO EN EL PUERTO:${PORT}`);
});

const express = require('express');
const cors = require('cors');  // Importa el módulo cors
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./configuracion/mongoose.config');

const JokeRoutes = require('./rutas/jokes.routes');
app.use(JokeRoutes);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

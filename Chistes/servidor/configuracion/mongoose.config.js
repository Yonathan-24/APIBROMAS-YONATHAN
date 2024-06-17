const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chistes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a la base de datos chistes'))
    .catch(err => console.error('No se pudo conectar a la base de datos chistes', err));

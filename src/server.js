// Requests
const path = require('path');
const methodOverride = require('method-override');
const express = require('express');

// Inicializaciones
const app = express();

// Settings
app.set('port', process.env.PORT || 288);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Routes
app.use(require('./routes/index'));

// Ficheros estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});
const express = require('express');
const app = express();
const port = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');


// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'Pagina principal', content: 'Contenido de la página principal'});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de..', content: 'Contenido de la página Acerca de' });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

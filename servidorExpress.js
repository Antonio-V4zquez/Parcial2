const express = require('express');
const app = express();
const PORT = 3000;

// Este es el recurso que solicitaste
app.get('/mi-recurso', (req, res) => {
    res.send('<h1>Servidor Express Activo</h1><p>Has navegado exitosamente a la ruta GET</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
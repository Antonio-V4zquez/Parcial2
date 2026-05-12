const express = require('express');
const app = express();
const PORT = 3000;

app.get('/mi-recurso', (req, res) => {
    res.send('<h1>Servidor Express Activo</h1><p>Has navegado exitosamente a la ruta GET</p>');
});

// --- FUNCIÓN MANEJADORA DE ERRORES 
app.use((err, req, res, next) => {
    console.error(err.stack); // Muestra el error en la consola
    res.status(500).send('¡Algo salió mal en el servidor!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
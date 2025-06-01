import express from 'express';
import router from './routes/router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// Carpeta pública para archivos CSS
app.use(express.static(path.join(__dirname, 'public')));

// Motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use(router);

// Iniciar servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

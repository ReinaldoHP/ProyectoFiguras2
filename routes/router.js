import express from 'express';
import FiguraController from '../controllers/FiguraController.js';
 
const router = express.Router();
const figuraController = new FiguraController();
 
// Ruta de inicio
router.get('/', (req, res) => res.render('index'));
 
// Rutas GET con variables iniciales para evitar errores en las vistas
router.get('/rombo', (req, res) =>
  res.render('rombo', {
    resultadoArea: null,
    resultadoPerimetro: null,
    error: null
  })
);
 
router.get('/rectangulo', (req, res) =>
  res.render('rectangulo', {
    resultadoArea: null,
    resultadoPerimetro: null,
    error: null
  })
);
 
router.get('/trapecio', (req, res) =>
  res.render('trapecio', {
    resultadoArea: null,
    resultadoPerimetro: null,
    error: null
  })
);
 
// Rutas POST que procesan los cálculos
router.post('/rombo', (req, res) => figuraController.calcularRombo(req, res));
router.post('/rectangulo', (req, res) => figuraController.calcularRectangulo(req, res));
router.post('/trapecio', (req, res) => figuraController.calcularTrapecio(req, res));
 
export default router;
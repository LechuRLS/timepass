const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
  res.send(`
    <h1>Bienvenido a /endroute</h1>
    <p>Ruta protegida accedida correctamente a las ${req.horaActual}:00</p>
    <a href="/">Volver al inicio</a>
  `);
});

module.exports = router;

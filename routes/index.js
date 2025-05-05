const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
  const mensaje = req.query.mensaje || '';
  res.send(`
    <h1>Bienvenido a la página principal</h1>
    <p>Hora actual del servidor: ${req.horaActual}</p>
    ${mensaje ? `<p style="color:red;">${mensaje}</p>` : ''}
    <form action="/endroute" method="GET">
      <button type="submit">Ir a la ruta protegida</button>
    </form>
  `);
});

module.exports = router;

const horaMiddleware = (req, res, next) => {
    const ahora = new Date();
    req.hora = ahora.getHours();
    req.minuto = ahora.getMinutes();
    req.horaActual = `${req.hora}:${req.minuto.toString().padStart(2, '0')}`;
    next();
};
  
module.exports = horaMiddleware;
  
  
  
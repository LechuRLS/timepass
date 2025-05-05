const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use(express.urlencoded({ extended: false }));

app.use('/endroute', endrouteRouter);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

'use strict';

const app = require('./server/app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
});

const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const morgan = require('koa-morgan');
const route = require('koa-route');
const static = require('koa-static');

const PORT = process.env.PORT || 9000;
const app = new Koa();

app.use(morgan('dev'));

app.use(static(path.resolve('build')));

app.use(route.get('*', function* () {
  this.body = fs.readFileSync(path.resolve(path.join('build', 'index.html')), 'utf8');
}));

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

const Koa = require('koa');
const app = new Koa();

// load the list of redirect hostname groups
var hostGroups = require('./config/hosts');

app.use(async ctx => {
  var fullURL = ctx.protocol + '://' + ctx.host + ctx.path + (ctx.querystring ? '?' + ctx.querystring : '');
  var host = ctx.host.split(':')[0]; // ctx.host is hostname[:port];
  redirectTo = hostGroups.find(group => {
    return group.domains.indexOf(host) !== -1;
  });
  if(redirectTo) {
    ctx.status = 301;
    ctx.redirect(url.replace(host, redirectTo.host));
  } else {
    ctx.status = 404;
  }
})

app.listen(process.env.PORT || 3000);

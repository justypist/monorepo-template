import { userConrtoller } from '@controller/user.controller';
import { database } from '@middleware/database';
import { catcher } from '@middleware/error';
import { logger } from '@middleware/logger';
import Koa from 'koa';
import KoaBody from 'koa-body';
import Koa2Cors from 'koa2-cors';

const bodyParser = KoaBody();

const app = new Koa();

app.use(logger);
app.use(catcher);
app.use(bodyParser);
app.use(Koa2Cors({ origin: '*' }));
app.use(database);

app.use(userConrtoller.prefix('/user').routes());

app.use(async ctx => {
  ctx.status = 404;
  ctx.body = `path not found: ${ctx.url}`;

  throw new Error('test');
});

app.addListener('error', console.log);

app.listen(2000);

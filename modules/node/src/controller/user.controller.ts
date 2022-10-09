import KoaRouter from '@koa/router';
import { BaseResponse } from '@template/util';

export const userConrtoller = new KoaRouter();

userConrtoller.all('/', async ctx => {
  ctx.state.userRepo.find();
  ctx.body = new BaseResponse();
});

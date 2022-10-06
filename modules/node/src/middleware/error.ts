import { BaseException, BaseResponse } from '@template/util';

import { Middleware } from 'koa';

export const catcher: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch(error) {
    if (error instanceof BaseException) {
      ctx.body = new BaseResponse(error.code, error.message);
      return;
    }

    ctx.body = new BaseResponse(500, 'unknown exception');
  }
};

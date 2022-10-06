import { BaseResponse as BaseResponseInterface } from '@template/type/response/base.response';

export class BaseResponse implements BaseResponseInterface {
  code: number;
  message: string;

  constructor(code = 0, message = 'ok') {
    this.code = code;
    this.message = message;
  }
}

import { BaseException as BaseExceptionAttrs } from '@template/type/exception/base.exception';

export class BaseException extends Error implements BaseExceptionAttrs {
  code: number;

  constructor(code: number, message?: string) {
    super(message);
    this.code = code;
  }
}

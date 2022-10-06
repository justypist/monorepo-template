import { DataResponse as DataResponseAttrs } from '@template/type/response/data.response';
import { BaseResponse } from './base.response';

export class DataResponse<T> extends BaseResponse implements DataResponseAttrs<T> {
  data: T;

  constructor(data: T, code?: number, message?: string) {
    super(code, message);
    this.data = data;
  }
}

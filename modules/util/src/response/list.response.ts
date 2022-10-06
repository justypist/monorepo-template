import { ListResponse as ListResponseAttrs } from '@template/type/response/list.response';
import { BaseResponse } from './base.response';

export class ListResponse<T> extends BaseResponse implements ListResponseAttrs<T> {
  data: T[];

  constructor(data: T[], code?: number, message?: string) {
    super(code, message);
    this.data = data;
  }
}

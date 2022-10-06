import { Pagination } from '@template/type/common/pagination';
import { PaginationResponse as PaginationResponseAttrs } from '@template/type/response/pagination.response';
import { ListResponse } from './list.response';

export class PaginationResponse<T> extends ListResponse<T> implements PaginationResponseAttrs<T> {
  pagination: Pagination;

  constructor(data: T[], pagination: Pagination, code?: number, message?: string) {
    super(data, code, message);
    this.pagination = pagination;
  }
}

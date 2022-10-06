import { Pagination } from '../common/pagination';
import { ListResponse } from './list.response';

export interface PaginationResponse<T> extends ListResponse<T> {
  pagination: Pagination;
}

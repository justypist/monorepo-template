import { Pagination as PaginationAttrs } from '@template/type/common/pagination';

const defaultPageSize = 10;

export class Pagination implements PaginationAttrs {
  pageIndex: number;
  pageSize: number;
  totalPage: number;
  totalSize: number;

  constructor(params?: Partial<PaginationAttrs>) {
    this.pageIndex = params?.pageIndex ?? 0;
    this.pageSize = params?.pageSize ?? defaultPageSize;
    this.totalPage = params?.totalPage ?? 0,
    this.totalSize = params?.totalSize ?? 0;
  }

  clone(params?: Partial<PaginationAttrs>) {
    return new Pagination({
      ...this,
      ...params
    });
  }
}

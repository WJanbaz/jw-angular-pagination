import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class JwPaginationComponent implements OnInit, OnChanges {
    items: Array<any>;
    changePage: EventEmitter<any>;
    initialPage: number;
    pageSize: number;
    pager: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setPage(page);
}
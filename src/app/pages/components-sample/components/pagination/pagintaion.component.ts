/**
 * Created by xiaoxiao on 5/1/17.
 */
/**
 * Created by xiaoxiao on 5/1/17.
 */
import { Component, OnInit , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'paging',
    styles: [require('./pagination.scss')],
    template: require('./pagination.html'),
})


export class PaginationComponent {
    pagingObj: any = {
        'pageLabelsGroup' : ['5', '10', '15', '25', '40', '100'],
        'currentPageSize' : '10',
        'currentPageNum': '',
        'totalPages': '100'
    };
    query:any={};

    constructor() {

    }

    updatePaging(x){
        this.query['currentPageSize'] = x.currentPageSize;
        this.query['currentPageNum'] = x.currentPageNum+1;
        this.query['totalPages'] = x.totalPages;
    }


    ngOnInit(){
        this.updatePaging(this.pagingObj);
    }

}
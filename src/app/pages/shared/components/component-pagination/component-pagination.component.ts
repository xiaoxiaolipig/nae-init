/**
 * Created by xiaoxiao on 5/1/17.
 */
import { Component, OnInit , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'pagination',
    styles: [require('./component-pagination.scss')],
    template: require('./component-pagination.html'),
    providers: [],
    inputs: ['pagingObj'],
    outputs: ['activePaging']
})


export class PaginationComponent {
    pagingObj: any = {
        'pageLabelsGroup' : ['5', '10', '15', '25', '40', '100'],
        'currentPageSize' : '10',
        'currentPageNum': '0',
        'totalPages': ''
    };

    activePaging = new EventEmitter();
    constructor() {

    }

    pagingChange(type, value){
        // this._logger.debug(`paging change is fired`, this.pagingObj);

        if (type== "size"){
            this.pagingObj.currentPageSize = value;
            //reset pageNum
            this.pagingObj.currentPageNum = 0;
            this.activePaging.emit(this.pagingObj);
        }
        if(type=="next"){
            if(this.pagingObj.currentPageNum +1 < this.pagingObj.totalPages){
                // this._logger.debug(`clicked next`, this.pagingObj);
                this.pagingObj.currentPageNum = Number(this.pagingObj.currentPageNum) +1;
                this.activePaging.emit(this.pagingObj);
            }
        }
        if(type=="pre"){
            if(this.pagingObj.currentPageNum >= 1){
                // this._logger.debug(`clicked pre`, this.pagingObj);
                this.pagingObj.currentPageNum = Number(this.pagingObj.currentPageNum) -1;
                this.activePaging.emit(this.pagingObj);
            }
        }
        if(type=="enter"){
            value = parseInt(value)-1;
            if(value!=this.pagingObj.currentPageNum && value>-1 && value<=this.pagingObj.totalPages-1){
                this.pagingObj.currentPageNum = value;
                this.activePaging.emit(this.pagingObj);
            }
        }
    }

    ngOnInit(){
    }

}
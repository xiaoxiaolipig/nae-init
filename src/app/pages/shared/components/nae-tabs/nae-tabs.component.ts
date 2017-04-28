import {Component,EventEmitter} from '@angular/core';

@Component({
    selector: 'nae-tabs',
    styles: [require('./nae-tabs.scss')],
    template: require('./nae-tabs.html'),
    providers:[],
    inputs:[
        'tabsGroup',
        'defaultActiveItem'
    ],
    outputs:['activeItem']
})


export class TabsComponent {
    tabsGroup:any =[];
    defaultActiveItem: string = '';
    currentActiveTab: string = '';
    activeItem = new EventEmitter();
    constructor() {}

    switchTabs(index) {
        this.currentActiveTab = index;
        this.activeItem.emit(index);
    }

    ngOnInit(){
        this.currentActiveTab = this.defaultActiveItem;
    }

}
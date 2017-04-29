import {Component} from '@angular/core';


@Component({
    selector: 'tabs',
    template: require('./tabs.html')
})
export class TabsComponent {
    currentActiveTab:any = 'information';
    tabsGroup: any = [
        {"value":"information","display":"Information"},
        {"value":"alarms","display":"Alarms"},
        {"value":"historicalData","display":"Historical Data"},
        {"value":"software","display":"Software"},
        {"value":"historicalOperations","display":"Historical Operations"},
        {"value":"setting","display":"Settings"}
    ]

    constructor() {

    }


    updateActiveItem(x) {
        this.currentActiveTab = x;
    }

}

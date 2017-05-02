import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'process-steps',
    encapsulation: ViewEncapsulation.None,

    template: require('./component-process-steps.html'),
    styles: [require('./component-process-steps.scss')],
    inputs:['stepsArray']
})
export class ProcessStepsComponent {

    constructor() {

    }

}
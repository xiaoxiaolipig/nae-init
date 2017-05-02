import {Component} from '@angular/core';
import { TranslateService } from '../shared/pipes/translate';

@Component({
    selector: 'translate-sample',
    styleUrls: ['./translate-sample.scss'],
    templateUrl: './translate-sample.html'
})
export class TranslateSampleComponent {

    public translatedText: string;
    public supportedLanguages: any[];
    public reloadHint:boolean = false;

    constructor(private _translate: TranslateService) {
    }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: '中文', value: 'zh' },
        ];
    }

    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
        this.refreshText();
        this.reloadHint = true;
    }

    refreshText() {
        this.translatedText = this._translate.instant('hello world');
    }
}

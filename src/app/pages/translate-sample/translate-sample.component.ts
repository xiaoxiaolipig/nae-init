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

    constructor(private _translate: TranslateService) {
    }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: '华语', value: 'zh' },
        ];

        this.selectLang('es');

    }

    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        this.translatedText = this._translate.instant('hello world');
    }
}

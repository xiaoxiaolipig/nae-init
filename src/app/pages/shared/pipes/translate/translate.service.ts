
import {Injectable, Inject} from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
    private _currentLang: string;



    // inject our translations
    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public get currentLang() {
        // get current language
        let preferLanguage = localStorage.getItem('lang');
        if(preferLanguage === null){
            localStorage.setItem('lang','en');
            preferLanguage = 'en';
        }
        return preferLanguage;
    }

    public use(lang: string): void {
        // set current language
        localStorage.setItem('lang',lang);
    }

    private translate(key: string): string {
        // private perform translation
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // public perform translation
        return this.translate(key);
    }
}
/**
 * Created by wei on 12/23/16.
 */
/* * * ./app/services/utils.service.ts * * */
// Imports
import {Injectable}     from '@angular/core';

@Injectable()
export class UtilService {

    constructor() {
    }

    /** Helper functions for manipulating Cookies **/

    public getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "").trim();
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

    public deleteCookie(name) {
        this.setCookie(name, "", -1);
    }

    public setCookie(name: string, value: string, expireSeconds: number, path: string = "") {
        let d: Date = new Date();
        d.setTime(d.getTime() + expireSeconds * 1000);
        let expires: string = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }

}

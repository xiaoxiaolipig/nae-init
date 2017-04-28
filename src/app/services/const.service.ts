/**
 * Created by wei on 12/23/16.
 */
/* * * ./app/services/const.service.ts * * */
// Imports
import {Injectable}     from '@angular/core';

@Injectable()
export class ConstService {

    // private instance variable to hold base url
    /* aws */
    private host: string = 'http://52.88.49.104:8000';
    private baseUrl: string = 'http://52.88.49.104:8000/api/v1';
    /* same origin * /
     private host: string = '';
     private baseUrl: string = '/api/v1';
     /* end host choice */

    constructor() {
    }

    public getBaseUrl(): string {
        return this.baseUrl;
    }

    public getHost(): string {
        return this.host;
    }

}

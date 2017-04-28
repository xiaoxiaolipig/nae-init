/**
 * Created by wei on 12/23/16.
 */
/* * * ./app/services/auth.service.ts * * */
// Imports
import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ConstService} from "./const.service";
import {Router, CanActivateChild} from "@angular/router";

// Import JWT util library
import {JwtHelper} from 'angular2-jwt';
import {UtilService} from "./utils.service";

@Injectable()
export class AuthenticationService implements CanActivateChild {

    private jwtHelper: JwtHelper = new JwtHelper();

    // Resolve HTTP using the constructor
    constructor(private http: Http,
                private constService: ConstService,
                private router: Router,
                private utils: UtilService) {
    }

    // retrieve accessToken from cookie
    public getAccessToken(): string {
        return this.utils.getCookie('accessToken');
    }

    // retrieve refreshToken from cookie
    public getRefreshToken(): string {
        return this.utils.getCookie('refreshToken');
    }

    // exchange username and password for token
    public getTokenByCredentials(username: string, password: string): Observable<any> {

        let urlEncodedForm = `username=${username}&password=${password}&client_id=${AuthenticationService.getClientId()}&grant_type=${AuthenticationService.getGrantTypePassword()}&redirect_uri=${AuthenticationService.getRedirectUri()}`; // url encoded form
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        // ...using get request
        return this
            .http.post(
                `${this.constService.getBaseUrl()}${AuthenticationService.getAuthOApiPath()}?${urlEncodedForm}`,
                null,
                options
            )
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...do side effect to parse and save the token response
            .do(this.tokenResponseHandler)
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getTokenByRefreshToken(): Observable<any> {

        let urlEncodedForm = `client_id=${AuthenticationService.getClientId()}&grant_type=${AuthenticationService.getGrantTypeRefreshToken()}&refresh_token=${this.getRefreshToken()}`; // url encoded form
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Auth-Token': `${this.getAccessToken()}`
        }); // ... Set content type to JSON ... apply token header
        let options = new RequestOptions({headers: headers}); // Create a request option
        // ...using get request
        return this
            .http.post(
                `${this.constService.getBaseUrl()}${AuthenticationService.getAuthOApiPath()}?${urlEncodedForm}`,
                null,
                options
            )
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...do side effect to parse and save the token response
            .do(this.tokenResponseHandler)
            //...errors if any
            .catch((error: any) => {
                if (error.status >= 500) {
                    Observable.throw(error.json().error || 'Server error');
                }
                else if (error.status === 400) {
                    // Refresh token has been revoked or expired. Delete cookie.
                    this.utils.deleteCookie('accessToken');
                    this.utils.deleteCookie('refreshToken');
                    return Observable.throw(new Error(error.json().error));
                }
            });

    }

    private static getGrantTypePassword(): string {
        // const to hole the grant_type
        return 'password';
    }

    private static getGrantTypeRefreshToken(): string {
        // const to hole the grant_type
        return 'refresh_token';
    }

    private static getAuthOApiPath(): string {
        // private instance variable to hold the auth api path
        return '/oauth2/token';
    }

    private static getClientId(): string {
        // const to hole the client_id
        return 'nae-portal';
    }

    private static getRedirectUri(): string {
        // currently support only one redirect uri. should refactor to array
        // const to hole the redirect_uri
        return 'http%3A%2F%2Flocalhost%3A3000';
    }

    public canActivateChild(): boolean {
        // Check to see if a user has a valid JWT
        if (!this.isRefreshTokenExpired()) {
            // If they do, return true and allow the user to load the home component
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/login']).catch(e => console.error(e));
        return false;
    }

    public isAccessTokenExpired(): boolean {
        let token = this.utils.getCookie('accessToken');
        let result = true;
        console.debug(`Checking access token: ${token}`);
        if (null == token || !token.length) {
            console.debug('Access token seems invalid.');
            return result;
        }
        else {
            result = this.jwtHelper.getTokenExpirationDate(token).getTime() < new Date().getTime();
            console.debug(`Access token seems ${ result ? 'in' : ''}valid.`);
            return result;
        }
    }

    public isRefreshTokenExpired(): boolean {
        let refreshToken = this.utils.getCookie('refreshToken');
        console.debug(`Refresh token seems ${ !refreshToken.length ? 'in' : ''}valid.`);
        return !refreshToken.length;
    }

    public tokenResponseHandler = (tokenResponse) => {
        // log token object
        console.debug('Got token from server:', tokenResponse);
        // validate token
        // TODO: add token validate body here
        let decodedAccessToken = this.jwtHelper.decodeToken(tokenResponse.access_token);
        decodedAccessToken.nbf_h = new Date(decodedAccessToken.nbf * 1000);
        decodedAccessToken.exp_h = new Date(decodedAccessToken.exp * 1000);
        decodedAccessToken.iat_h = new Date(decodedAccessToken.iat * 1000);
        console.debug('Decoded JWT type access token body: ', decodedAccessToken);
        // save token response
        this.utils.setCookie('accessToken', tokenResponse.access_token, tokenResponse.expires_in, '');
        this.utils.setCookie('refreshToken', tokenResponse.refresh_token, tokenResponse.expires_in, '');
        console.debug(`Stored access token: ${this.utils.getCookie('accessToken')}`);
        console.debug(`Stored refresh token: ${this.utils.getCookie('refreshToken')}`);
    }

}

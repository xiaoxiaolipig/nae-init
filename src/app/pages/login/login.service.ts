/**
 * Created by wei on 12/22/16.
 */
import {Injectable} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

    constructor(private authService: AuthenticationService) {

    }

    public checkClientHasValidTokenToProceed(): Observable<any> {

        // Check to see if the client got valid grant already
        if (!this.authService.isRefreshTokenExpired()) {
            // Checking on the access token
            if (!this.authService.isAccessTokenExpired()) {
                return Observable.from([true]);
            } else {
                // Client got expired access token and the refresh token is good.
                // For security purposes validate refresh token against authorization
                // server.
                console.debug('Access token has expired. Trying to renew.');
                return this.authService.getTokenByRefreshToken();
            }
        } else {  // no valid grant found in client
            return Observable.throw(new Error('No valid grant found.'));
        }

    }

    public signInWithCredentials(username: string, password: string): Observable<any> {
        return this.authService.getTokenByCredentials(username, password);
    }

}

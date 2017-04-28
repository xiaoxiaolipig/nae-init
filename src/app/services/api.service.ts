/**
 * Created by wei on 12/23/16.
 */
/* * * ./app/services/api.service.ts * * */
// Imports
import {Injectable}     from '@angular/core';
import {Observable} from "rxjs";
import {Http, Headers, Response} from "@angular/http";
import {AuthenticationService} from './authentication.service';
import {ConstService} from './const.service';

@Injectable()
export class ApiService {

  private renewTokenLogString: string = 'Access token has expired. Trying to renew.';
  private defaultErrorMessage: string = 'Server error';
  private tokenHeaderKey: string = 'X-Auth-Token';

  constructor(private http: Http,
              private authService: AuthenticationService,
              private constService: ConstService) {
  }

  parseIfRelativeUrl(url) {
    let regexForAbsoluteUrl = /^https?:\/\//ig;
    return (regexForAbsoluteUrl.test(url)) ? url : (this.constService.getBaseUrl() + url);
  }

  public GET(requestUrl: string, additionalHeaders?: Headers): Observable<any> {
    requestUrl = this.parseIfRelativeUrl(requestUrl);
    let headers = additionalHeaders ? additionalHeaders : new Headers({});
    headers.append('Content-Type', 'application/json');
    if (this.authService.isAccessTokenExpired()) {
      console.debug(this.renewTokenLogString);
      return this.authService
        .getTokenByRefreshToken()
        .flatMap(() => {
          headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
          return this.http
            .get(requestUrl, {
              headers: headers
            })
            .map((res: Response) => this.tryParseJsonResponse(res))
            .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
        });
    } else {
      headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
      return this.http
        .get(requestUrl, {
          headers: headers
        })
        .map((res: Response) => this.tryParseJsonResponse(res))
        .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
    }
  }

  public POST(requestUrl: string, body: any, additionalHeaders?: Headers): Observable<any> {
    requestUrl = this.parseIfRelativeUrl(requestUrl);
    let headers = additionalHeaders ? additionalHeaders : new Headers({});
    headers.append('Content-Type', 'application/json');
    if (this.authService.isAccessTokenExpired()) {
      console.debug(this.renewTokenLogString);
      return this.authService
        .getTokenByRefreshToken()
        .flatMap(() => {
          headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
          return this.http
            .post(
              requestUrl,
              body,
              {
                headers: headers
              }
            )
            .map((res: Response) => this.tryParseJsonResponse(res))
            .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
        });
    } else {
      headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
      return this.http
        .post(
          requestUrl,
          body,
          {
            headers: headers
          }
        )
        .map((res: Response) => this.tryParseJsonResponse(res))
        .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
    }
  }

  public PUT(requestUrl: string, body: any, additionalHeaders?: Headers): Observable<any> {
    requestUrl = this.parseIfRelativeUrl(requestUrl);
    let headers = additionalHeaders ? additionalHeaders : new Headers({});
    headers.append('Content-Type', 'application/json');

    if (this.authService.isAccessTokenExpired()) {
      console.debug(this.renewTokenLogString);
      return this.authService
        .getTokenByRefreshToken()
        .flatMap(() => {
          headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
          return this.http
            .put(
              requestUrl, body, {
                headers: headers
              }
            )
            .map((res: Response) => this.tryParseJsonResponse(res))
            .catch((error: any) => {
              console.debug('120' + error);
              return Observable.throw(error.json().error || this.defaultErrorMessage);
            });
        });
    } else {
      headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
      return this.http
        .put(
          requestUrl, body, {
            headers: headers
          }
        )
        .map((res: Response) => this.tryParseJsonResponse(res))
        .catch((error: any) => {
          return Observable.throw(error.json().error || this.defaultErrorMessage);
        });
    }
  }

  public DELETE(requestUrl: string, additionalHeaders?: Headers): Observable<any> {
    requestUrl = this.parseIfRelativeUrl(requestUrl);
    let headers = additionalHeaders ? additionalHeaders : new Headers({});
    headers.append('Content-Type', 'application/json');
    if (this.authService.isAccessTokenExpired()) {
      console.debug(this.renewTokenLogString);
      return this.authService
        .getTokenByRefreshToken()
        .flatMap(() => {
          headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
          return this.http
            .delete(requestUrl, {
              headers: headers
            })
            .map((res: Response) => this.tryParseJsonResponse(res))
            .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
        });
    } else {
      headers.append(this.tokenHeaderKey, this.authService.getAccessToken());
      return this.http
        .delete(requestUrl, {
          headers: headers
        })
        .map((res: Response) => this.tryParseJsonResponse(res))
        .catch((error: any) => Observable.throw(error.json().error || this.defaultErrorMessage));
    }
  }

  private tryParseJsonResponse(res: Response) {
    let json = {};
    try {
      json = res.json();
    } catch (e) {
      console.warn(e.message, e);
    }
    return json;
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class WeeksService {
  private endpoint: string = 'http://localhost:3000/week/';

  constructor(private http: Http) {}

  get(week_string: string): Observable<object> {
    return this.http.get(this.endpoint + week_string)
      .map((res: Response) => res.json())
      .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  create(week_string: string): Observable<object> {
    return this.http.post(this.endpoint + week_string, '')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


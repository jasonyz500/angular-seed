import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class ResponsesService {
  private endpoint: string = 'http://localhost:3000/responses/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  get(id: string): Observable<object> {
    return this.http.get(this.endpoint + id)
      .map((res: Response) => res.json())
      .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  update(response: any): Observable<object> {
    return this.http.patch(this.endpoint + response._id, JSON.stringify(response), {headers: this.headers})
      .map((res: Response) => res.json())
      .do(data => console.log('server data:', data))  // debug
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


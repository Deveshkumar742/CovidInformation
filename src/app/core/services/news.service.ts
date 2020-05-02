import { Injectable } from '@angular/core';
import { INews } from '../../shared/interfaces/INews';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class NewsService{

  private apiURL = "api/newsList";

  constructor(private http: HttpClient) { }

  /** GET ALL NEWS LIST */
  getNewsList(): Observable<INews[]> {
    return this.http.get<INews[]>(this.apiURL);
  }

  addNews(newsNews: INews): Observable<INews> {
    return this.http.post<INews>(this.apiURL, newsNews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

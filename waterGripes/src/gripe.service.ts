import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Gripe } from './app/gripe';
import { MessageService } from './app/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GripeService {

  private gripesUrl = 'api/gripes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGripes(): Observable<Gripe[]> {
    return this.http.get<Gripe[]>(this.gripesUrl)
      .pipe(
        tap(gripes => this.log('fetched gripes')),
        catchError(this.handleError('getGripes', []))
      );
  }

  /** GET gripe by id. Return `undefined` when id not found */
  getGripeNo404<Data>(id: number): Observable<Gripe> {
    const url = `${this.gripesUrl}/?id=${id}`;
    return this.http.get<Gripe[]>(url)
      .pipe(
        map(gripes => gripes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} gripe id=${id}`);
        }),
        catchError(this.handleError<Gripe>(`getGripe id=${id}`))
      );
  }

  /** GET Gripe by id. Will 404 if id not found */
  getGripe(id: number): Observable<Gripe> {
    const url = `${this.gripesUrl}/${id}`;
    return this.http.get<Gripe>(url).pipe(
      tap(_ => this.log(`fetched gripe id=${id}`)),
      catchError(this.handleError<Gripe>(`getGripe id=${id}`))
    );
  }

  /* GET gripes whose name contains search term */
  searchGripesByZipcode(term: number): Observable<Gripe[]> {
    if (!term) {
      // if not search term, return empty Gripe array.
      return of([]);
    }
    return this.http.get<Gripe[]>(`${this.gripesUrl}/?zipcode=${term}`).pipe(
      tap(_ => this.log(`found gripes matching "${term}"`)),
      catchError(this.handleError<Gripe[]>('searchGripes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new gripe to the server */
  addGripe(gripe: Gripe): Observable<Gripe> {
    return this.http.post<Gripe>(this.gripesUrl, gripe, httpOptions).pipe(
      tap((gripe: Gripe) => this.log(`added gripe w/ id=${gripe.id}`)),
      catchError(this.handleError<Gripe>('addGripe'))
    );
  }
  /** PUT: update the gripe on the server */
  updateGripevote(gripe: Gripe): Observable<any> {
    return this.http.put(this.gripesUrl, gripe, httpOptions).pipe(
      tap(_ => this.log(`updated gripe id=${gripe.id}`)),
      catchError(this.handleError<any>('updateGripe'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a GripeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GripeService: ${message}`);
  }
}

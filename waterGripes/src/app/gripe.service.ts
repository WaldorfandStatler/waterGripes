import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Gripe } from './gripe';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root' })

export class GripeService {

  private gripesUrl = '/gripes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGripes(): Observable<Gripe[]> {
    return this.http.get<Gripe[]>(this.gripesUrl)
      .pipe(
        tap(gripes => console.log(gripes, 'fetched gripes')),
        catchError(this.handleError('getGripes', []))
      );
  }

  /** GET Gripe by id. Will 404 if id not found */
  getGripe(id: number): Observable<Gripe> {
    const url = `${this.gripesUrl}/${id}`;
    return this.http.get<Gripe>(url).pipe(
      tap(_ => console.log(`fetched gripe id=${id}`)),
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
  addUser(user) {
    console.log('userpost', user);
    return this.http.post('/users', user, httpOptions).subscribe(res => console.log(res));
  }




  /** POST: add a new gripe to the server */
  addGripe(gripe: Gripe): Observable<Gripe> {
    return this.http.post<Gripe>(this.gripesUrl, gripe, httpOptions).pipe(
      tap((gripe: Gripe) => this.log(`added gripe w/ id=${gripe.id}`)),
      catchError(this.handleError<Gripe>('addGripe'))
    );
  }

  /** PUT: update the gripe on the server */
  updateGripevote(id: number, votes: number){
    console.log(id, votes);
    return this.http.patch('/gripes/:id', { id, votes}, httpOptions)
      .subscribe(res => console.log(res));
  }

  //get geolaction by address
  getPostion(address) {
    console.log(address);
    return this.http.get(`/gripe/${address}`).subscribe(res => console.log(res));
      // .pipe(tap(any => console.log(any)));
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

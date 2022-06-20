import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'https://graby.nebula.cat/api/person/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(person: any): Observable<Person> {
    return this.httpClient.post<Person>(this.apiUrl, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.apiUrl + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, person: any): Observable<Person> {
    return this.httpClient.put<Person>(this.apiUrl + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number): Observable<Person> {
    return this.httpClient.delete<Person>(this.apiUrl + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}

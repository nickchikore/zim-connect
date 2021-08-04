import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service';
import {RealEstateProperty} from '../_models/real-estate';
import {Observable, of} from 'rxjs';

@Injectable()
export class RealEstateService {
  private reUrl = 'api/properties';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getProperties(): Observable<RealEstateProperty[]> {
    return this.http.get<RealEstateProperty[]>(this.reUrl)
      .pipe(
        tap(_ => this.log('fetched properties')),
        catchError(this.handleError<RealEstateProperty[]>('getProperties', []))
      );
  }
  getProperty(id: number): Observable<RealEstateProperty> {
    const url = `${this.reUrl}/${id}`;
    return this.http.get<RealEstateProperty>(url).pipe(
      tap(_ => this.log(`fetched property id=${id}`)),
      catchError(this.handleError<RealEstateProperty>(`getProperty id=${id}`))
    );
  }
  getPropertyNo404<Data>(id: number): Observable<RealEstateProperty> {
    const url = `${this.reUrl}/?id=${id}`;
    return this.http.get<RealEstateProperty[]>(url)
      .pipe(
        map(properties => properties[0]), // returns a {0|1} element array
        tap(p => {
          const outcome = p ? `fetched` : `did not find`;
          this.log(`${outcome} property id=${id}`);
        }),
        catchError(this.handleError<RealEstateProperty>(`getProperty id=${id}`))
      );
  }
  updateProperty(property: RealEstateProperty): Observable<any> {
    return this.http.put(this.reUrl, property, this.httpOptions).pipe(
      tap(_ => this.log(`updated property id=${property.id}`)),
      catchError(this.handleError<any>('updateProperty'))
    );
  }
  addProperty(property: RealEstateProperty): Observable<RealEstateProperty> {
    return this.http.post<RealEstateProperty>(this.reUrl, property, this.httpOptions).pipe(
      tap((newProperty: RealEstateProperty) => this.log(`added property w/ id=${newProperty.id}`)),
      catchError(this.handleError<RealEstateProperty>('addProperty'))
    );
  }
  searchProperties(term: string): Observable<RealEstateProperty[]> {
    if (!term.trim()) {
      // if not search term, return empty property array.
      return of([]);
    }
    return this.http.get<RealEstateProperty[]>(`${this.reUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found properties matching "${term}"`) :
        this.log(`no properties matching "${term}"`)),
      catchError(this.handleError<RealEstateProperty[]>('searchProperties', []))
    );
  }
  deleteProperty(id: number): Observable<RealEstateProperty> {
    const url = `${this.reUrl}/${id}`;

    return this.http.delete<RealEstateProperty>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted property id=${id}`)),
      catchError(this.handleError<RealEstateProperty>('deleteProperty'))
    );
  }
  private log(message: string): void {
    this.messageService.add(`RealEstateService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

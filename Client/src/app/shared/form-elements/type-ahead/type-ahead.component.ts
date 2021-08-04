import {Component, Input, OnInit, Injectable} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import {RealEstateService} from '../../../_services/real-estate.service';


@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  providers: [RealEstateService],
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent implements OnInit {
  searchFailed: any;
  model: any;
  searching: any;
  @Input() label: any;
  service: any;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:variable-name
  constructor(private _service: RealEstateService) {}

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.searchProperties(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

}

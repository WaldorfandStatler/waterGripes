import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Gripe } from '../gripe';
import { GripeService } from '../../gripe.service';

@Component({
  selector: 'app-gripe-search',
  templateUrl: './gripe-search.component.html',
  styleUrls: ['./gripe-search.component.css']
})
export class GripeSearchComponent implements OnInit {
  gripes$: Observable<Gripe[]>;
  private searchTerms = new Subject<number>();

  constructor(private gripeService: GripeService) { }

  // Push a search term into the observable stream.
  search(term: number): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.gripes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: number) => this.gripeService.searchGripesByZipcode(term)),
    );
  }
}
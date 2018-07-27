import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Gripe } from './app/gripe';
import { GRIPES } from './app/mock-gripes';


@Injectable({
  providedIn: 'root'
})
export class GripeService {

  constructor() { }

  getGripes(): Observable<Gripe[]> {
    return of(GRIPES);
  }
}

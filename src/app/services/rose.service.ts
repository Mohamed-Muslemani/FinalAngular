import { Injectable } from '@angular/core';
import {ROSES} from '../Shared/mock-roses';
import {Observable, of} from 'rxjs';
import {Rose} from '../Shared/roses'
@Injectable({
  providedIn: 'root'
})
export class RoseService {
  //Create a local copy of the data to serve to the components
  private roses: Rose[] = ROSES;

  constructor() { }
  //Method to return all roses in list
  getRoses(): Observable<Rose[]> {
    return of(this.roses);
  }

  //Method to return a single rose by id
  getRoseById(id: number): Observable<Rose | undefined> {
    return of(this.roses.find((rose) => rose.id === id));
  }
}

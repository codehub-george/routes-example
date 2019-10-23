import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    return of(false);
  }

  allData(): Observable<any> {
    return from([{name: 'George'}, {name: 'John'}]);
  }
}

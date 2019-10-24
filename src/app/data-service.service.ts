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
    return from([{ name: 'George' }, { name: 'John' }]);
  }

  getPeople(): Person[] {
    return [
      {
        name: 'George',
        age: 32,
        isDev: true
      },
      {
        name: 'John',
        age: 19,
        isDev: false
      },
      {
        name: 'Maria',
        age: 60,
        isDev: true
      },
      {
        name: 'Ioanna',
        age: 20,
        isDev: true
      }
    ];
  }
}

interface Person {
  name: string;
  age: number;
  isDev: boolean;
}

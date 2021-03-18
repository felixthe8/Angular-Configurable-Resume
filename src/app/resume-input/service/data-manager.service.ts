import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private _firstName: string;

  set firstName(fN) {
    if(fN) {
      this._firstName = fN;
    }
  }

  get firstName(): string {
    return this._firstName;
  }

  constructor() { }
}

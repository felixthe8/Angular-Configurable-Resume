import { Injectable } from '@angular/core';
import { Education } from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private _firstName: string;

  private _education: Set<Education> = new Set();

  set firstName(fN: string) {
    if(fN) {
      this._firstName = fN;
    }
  }

  get firstName(): string {
    return this._firstName;
  }


  set education(edu: Set<Education>) {
    this._education = edu;
  }

  get education(): Set<Education> {
    return this._education;
  }

  constructor() { }
}

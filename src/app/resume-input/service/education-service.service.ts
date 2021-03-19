import { Injectable } from '@angular/core';
import { Education } from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {

  constructor() { }

  ////////////////////////////////////////
  //  Education Tab data
  ////////////////////////////////////////
  private _educationEntries: Set<Education> = new Set();
  set educationEntries(edu: Set<Education>) {
    this._educationEntries = edu;
  }

  get educationEntries(): Set<Education> {
    return this._educationEntries;
  }
}

import { Injectable } from '@angular/core';
import { Education } from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  ///////////////////////////////////////////
  //   Personal Details Tab data
  //////////////////////////////////////////
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  private _email: string;
  private _linkedInURL: string;
  private _summaryOfQualifications: string;

  set firstName(fN: string) {
    if(fN) {
      this._firstName = fN;
    }
  }

  get firstName(): string {
    return this._firstName;
  }

  set lastName(lN: string) {
    if(lN) {
      this._lastName = lN;
    }
  }

  get lastName():string {
    return this._lastName;
  }

  set email(email: string) {
    if(email) {
      this._email = email;
    }
  }

  get email(): string {
    return this._email;
  }

  set phoneNumber(pN: string) {
    if(pN) {
      this._phoneNumber = pN;
    }
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set linkedInURL(lN: string) {
    if(lN) {
      this._linkedInURL = lN;
    }
  }

  get linkedInURL(): string {
    return this._linkedInURL;
  }

  set summaryOfQualifications(summary: string) {
    if(summary) {
      this._summaryOfQualifications = summary;
    }
  }

  get summaryOfQualifications(): string {
    return this._summaryOfQualifications;
  }

  constructor() { }
}

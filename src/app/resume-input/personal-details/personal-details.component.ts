import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataManagerService } from '../service/data-manager.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private dataManager: DataManagerService) { }

  set firstName(fN: string) {
    if(fN) {
      this.dataManager.firstName = fN;
    }
  }

  set lastName(lN: string) {
    if(lN) {
      this.dataManager.lastName = lN;
    }
  }

  set linkedInURL(linkedInURL: string) {
    if(linkedInURL) {
      this.dataManager.linkedInURL = linkedInURL;
    }
  }

  set email(email: string) {
    if(email) {
      this.dataManager.email = email;
    }
  }

  set phoneNumber(phone: string) {
    if(phone) {
      this.dataManager.phoneNumber = phone;
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { IconButton } from 'src/app/interfaces/interface';
import { PersonalDetailsService } from '../service/personal-details.service';
import { PersonalDetails } from '../../interfaces/interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private personalDetailsSvc: PersonalDetailsService) { }

  get personalDetails(): PersonalDetails {
    return {
      firstName: this.personalDetailsSvc.firstName,
      lastName: this.personalDetailsSvc.lastName,
      email: this.personalDetailsSvc.email,
      phoneNumber: this.personalDetailsSvc.phoneNumber,
      summaryOfQualifications: this.personalDetailsSvc.summaryOfQualifications,
      linkedInURL: this.personalDetailsSvc.linkedInURL
    }
  }


  generateButton: IconButton = {
    buttonLabel: 'Generate Resume',
    icon: 'article'
  }



  ngOnInit(): void {
  }

}

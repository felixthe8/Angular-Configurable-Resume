import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetails } from '../interfaces/interface';

@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.scss']
})
export class ResumeViewerComponent implements OnInit {

  personal: PersonalDetails;

  constructor(private router: Router) { 
    if(this.router.getCurrentNavigation().extras.state === undefined) {
      this.router.navigateByUrl("/");
    }

    else {
      this.personal = this.router.getCurrentNavigation().extras.state.personal;
    }

  }

  ngOnInit(): void {
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.personal = this.router.getCurrentNavigation().extras.state.personal;
  }

}

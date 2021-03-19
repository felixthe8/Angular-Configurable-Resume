import { Component, OnInit } from '@angular/core';
import { Education, IconButton } from 'src/app/interfaces/interface';
import { EducationServiceService } from '../service/education-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private dataService: EducationServiceService) { }

  addButton: IconButton = {
    buttonLabel: 'Add Education',
    icon: 'add'
  }

  get educationEntries(): Set<Education> {
    return this.dataService.educationEntries;
  }

  ngOnInit(): void {
  }

  addEducationEntry(): void {
    this.educationEntries.add({institution: '', yearStarted: '', yearCompleted: '', degreeType: '', fieldOfStudy: ''});
  }

}

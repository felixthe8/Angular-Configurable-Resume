import { Component, OnInit } from '@angular/core';
import { Education, IconButton } from 'src/app/interfaces/interface';
import { DataManagerService } from '../service/data-manager.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private dataService: DataManagerService) { }

  addButton: IconButton = {
    buttonLabel: 'Add Education',
    icon: 'add'
  }

  get educationEntries(): Set<Education> {
    return this.dataService.education;
  }

  ngOnInit(): void {
  }

  addEducationEntry(): void {
    this.educationEntries.add({institution: '', yearStarted: '', yearCompleted: '', degreeType: '', fieldOfStudy: ''});
  }

}

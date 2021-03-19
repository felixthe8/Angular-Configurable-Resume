import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../../interfaces/interface';
import { EducationServiceService } from '../../service/education-service.service';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.scss']
})
export class EducationEntryComponent implements OnInit {
  @Input() entry: Education;

  yearRange: Array<String>;
  yearStart: string;
  yearComplete: string;

  fieldsOfStudy: Observable<any> = this.httpClient.get('../../../assets/majors.json');
  degreeTypes: Array<string> = ['High School / GE','Professional Certification', 'Associate', 'Bachelor', 'Master', 'Doctoral']

  constructor(private httpClient: HttpClient, private dataManager: EducationServiceService) { }

  ngOnInit(): void {
    this.yearRange = this.getLast50Years();
  }

  getLast50Years(): Array<String> {
    const years = [];
    const currentYear = new Date().getFullYear();
    for(let i=0; i<50; i++) {
      years.push((currentYear - i).toString());
    }

    return years;
  }

  removeEntry(): void {
    if(this.entry) {
      this.dataManager.educationEntries.delete(this.entry);
    }
  }

}

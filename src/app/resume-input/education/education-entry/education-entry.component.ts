import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.scss']
})
export class EducationEntryComponent implements OnInit {

  yearRange: Array<String>;
  yearStart: string;
  yearComplete: string;

  fieldsOfStudy: Observable<any> = this.httpClient.get(
                  '../../../assets/majors.json',
                  );

  constructor(private httpClient: HttpClient) { }

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

}

import { Component, OnInit } from '@angular/core';
import { IconButton } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  addButton: IconButton = {
    buttonLabel: 'Add Education',
    icon: 'add'
  }

  ngOnInit(): void {
  }

}

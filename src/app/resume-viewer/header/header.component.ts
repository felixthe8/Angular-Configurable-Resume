import { Component, Input, OnInit } from '@angular/core';
import { PersonalDetails } from '../../interfaces/interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() data: PersonalDetails;

  ngOnInit(): void {
  }

}

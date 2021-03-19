import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  firstName = environment.name.firstName;
  lastName = environment.name.lastName;
  phoneNumber = environment.contact.phone;
  email = environment.contact.email;
  linkedin = environment.contact.linkedin;

  ngOnInit(): void {
  }

}

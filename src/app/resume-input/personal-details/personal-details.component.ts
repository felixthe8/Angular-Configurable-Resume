import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataManagerService } from '../service/data-manager.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private dataManager: DataManagerService) { }

  set firstName(fN) {
    if(fN) {
      this.dataManager.firstName = fN;
    }
  }

  ngOnInit(): void {
  }

}

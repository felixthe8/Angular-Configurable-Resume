import { Component, OnInit } from '@angular/core';
import { IconButton } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  generateButton: IconButton = {
    buttonLabel: 'Generate Resume',
    icon: 'article'
  }

  ngOnInit(): void {
  }

}

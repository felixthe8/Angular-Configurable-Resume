import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IconButton } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() config: IconButton;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  clickEmit($event): void {
    this.onClick.emit($event);
  }

}

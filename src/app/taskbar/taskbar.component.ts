import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  @Input() windows: any[];

  constructor() { }
  ngOnInit() {
    console.log(this.windows);
  }

}

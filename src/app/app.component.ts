import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  windows: any[];

  ngOnInit(): void {
    const test = {title: 'test'};
    this.windows =  [test];
  }
}

import { DonutListComponent } from './admin/container/donut-list/donut-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-donut-list></app-donut-list> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Hello World!');
  }
}

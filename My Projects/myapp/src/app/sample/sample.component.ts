import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  // selector: '[app-sample]',
  // selector: '.app-sample',
  // templateUrl: './sample.component.html',
  template: `<p>Inline template</p>
    <h2>Hello world</h2>`,
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

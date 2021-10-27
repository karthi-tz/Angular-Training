import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-design]',    // attribute selector
  // selector: '.app-design',    // class selecter
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  username: string = '';
  password = 'Depressed King';
  showPassword = true;
  count = 0;
  logArray: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  checkName() {
    if(this.username === '')
      return true;
    return false;
  }

  clickCheck() {
    this.count++;
    this.logArray.push(new Date());
  }
}

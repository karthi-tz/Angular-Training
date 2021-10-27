import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{counter: number}>();
  private count = 0;
  private intervalRef;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalRef = setInterval(() => this.gameStarted.emit({counter: ++this.count}), 1000);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }

}

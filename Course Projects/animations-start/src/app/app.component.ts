import { Component } from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'cyan',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'red',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(1000)),
      // transition('highlighted => normal', animate(500))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'cyan',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'red',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'lightgreen',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(1000)),
      transition('highlighted => normal', animate(500)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50%'
        })),
        animate(600)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        'opacity': 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        'opacity': 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'orange'
          })),
          animate(700, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {

  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

    onAnimate() {
      this.state = (this.state === 'normal') ? 'highlighted' : 'normal';
      this.wildState = (this.wildState === 'normal') ? 'highlighted' : 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }

    animationStarted(event) {
      console.log(event);
    }

    animationEnded(event) {
      console.log(event);
    }
}

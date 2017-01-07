import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return rotateInOut();
}

function rotateInOut() {
  return trigger('routerTransition', [
    state('void', style({
      opacity: 0,
      WebkitTransform: 'rotateX(-90deg)',
      transform: 'rotateX(-90deg)'
    })),
    state('*', style({
      opacity: 1,
      WebkitTransform: 'rotateX(0deg)',
      transform: 'rotateX(0deg)'
    })),
    transition(':enter', [
      // Note: delay the 'enter' animation, so that the previous route's 'leave' animation has time to complete
      animate('0.5s 0.5s ease-in-out', style({
        opacity: 1,
        WebkitTransform: 'rotateX(0deg)',
        transform: 'rotateX(0deg)'
      }))
    ]),
    transition(':leave', [
      animate('0.5s ease-in-out', style({
        opacity: 0,
        WebkitTransform: 'rotateX(-90deg)',
        transform: 'rotateX(-90deg)'
      }))
    ])
  ]);
}



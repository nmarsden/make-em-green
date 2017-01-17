import { trigger, state, animate, style, transition } from '@angular/core';
export function routerTransition() {
    return rotateInOut();
}
function rotateInOut() {
    return trigger('routerTransition', [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition(':enter', [
            // Note: delay the 'enter' animation, so that the previous route's 'leave' animation has time to complete
            animate('0.5s 0.5s ease-in-out', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate('0.5s ease-in-out', style({
                opacity: 0
            }))
        ])
    ]);
}
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/app.routes.animations.js.map
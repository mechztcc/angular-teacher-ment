import { animate, style, transition, trigger } from '@angular/animations';

export const growRight = trigger('growRight', [
  transition(':enter', [
    style({ width: 0, height: '*' }),
    animate(1000, style({ width: '*', height: '*' })),
  ]),
  transition(':leave', [
    style({ width: '*', opacity: 1, height: '*' }),
    animate(1000, style({ width: '0', opacity: 0, height: '*' })),
  ]),
]);

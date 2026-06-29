import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-donut',
  template: `
    <svg viewBox="704 313 253 253" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M704 439.5C704 509.364 760.636 566 830.5 566C900.364 566 957 509.364 957 439.5C957 369.636 900.364 313 830.5 313C760.636 313 704 369.636 704 439.5ZM892.047 439.5C892.047 473.491 864.491 501.047 830.5 501.047C796.509 501.047 768.953 473.491 768.953 439.5C768.953 405.509 796.509 377.953 830.5 377.953C864.491 377.953 892.047 405.509 892.047 439.5Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandDonut {
  readonly color = input('#76D0FC');
}

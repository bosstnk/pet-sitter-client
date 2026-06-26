import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-circle',
  template: `
    <svg viewBox="394 302 233 233" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <circle cx="510.233" cy="418.233" r="114.5" transform="rotate(15 510.233 418.233)" fill="currentColor"/>
    </svg>
  `,
})
export class BrandCircle {
  readonly color = input('#FFCA62');
}

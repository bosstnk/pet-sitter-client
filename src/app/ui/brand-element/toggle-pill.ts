import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-toggle-pill',
  template: `
    <svg viewBox="623 244 83 48" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <rect x="625" y="246" width="79" height="44" rx="22" fill="#F6F6F9"/>
      <circle cx="676" cy="268" r="7" fill="currentColor"/>
      <circle cx="653" cy="268" r="7" fill="currentColor"/>
    </svg>
  `,
})
export class BrandTogglePill {
  readonly color = input('#76D0FC');
}

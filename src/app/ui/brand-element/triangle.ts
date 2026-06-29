import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-triangle',
  template: `
    <svg viewBox="813 431 144 135" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M957 566V431L813 566H957Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandTriangle {
  readonly color = input('#76D0FC');
}

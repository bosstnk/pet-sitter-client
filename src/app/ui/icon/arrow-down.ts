import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-arrow-down',
  host: { class: 'inline-block w-5 h-5' },
  template: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10h10l-5 5z" fill="currentColor"/>
    </svg>
  `,
})
export class IconArrowDown {
  readonly color = input('#9AA1B9');
}

import { Component,input } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  host: { class: 'inline-block w-6 h-6' },
  template: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
})
export class IconMenu {
  readonly color = input('#3A3B46')
}

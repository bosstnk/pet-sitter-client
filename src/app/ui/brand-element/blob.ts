import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-blob',
  template: `
    <svg viewBox="766 0 218 255" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M855.5 0C876.303 2.48074e-07 896.785 5.13047 915.132 14.937C933.478 24.7434 949.123 38.9233 960.681 56.2204C972.238 73.5175 979.352 93.3979 981.391 114.101C983.43 134.804 980.332 155.69 972.371 174.909C964.41 194.129 951.832 211.088 935.751 224.286C919.67 237.483 900.582 246.511 880.179 250.569C859.776 254.628 838.686 253.592 818.779 247.553C798.872 241.514 780.761 230.659 766.051 215.949L855.5 126.5V0Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandBlob {
  readonly color = input('#1CCD83');
}

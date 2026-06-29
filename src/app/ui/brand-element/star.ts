import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-star',
  template: `
    <svg viewBox="238 92 188 192" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M361.387 92.7172L374.384 142.737L425.827 148.123L394.791 189.44L422.673 232.976L370.974 234.477L354.299 283.38L320.868 243.935L272.193 261.379L282.204 210.691L238.181 183.541L284.096 159.779L277.876 108.48L325.12 129.537L361.387 92.7172Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandStar {
  readonly color = input('#1CCD83');
}

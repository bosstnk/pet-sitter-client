import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-quarter',
  template: `
    <svg viewBox="26 158 122 122" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 277.5C28 262.07 31.0392 246.79 36.9442 232.535C42.8491 218.279 51.5041 205.326 62.415 194.415C73.3258 183.504 86.279 174.849 100.535 168.944C114.79 163.039 130.07 160 145.5 160L145.5 237.335C140.226 237.335 135.003 238.374 130.13 240.393C125.257 242.411 120.829 245.37 117.099 249.099C113.37 252.829 110.411 257.257 108.393 262.13C106.374 267.003 105.335 272.226 105.335 277.5H28Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandQuarter {
  readonly color = input('#FFCA62');
}

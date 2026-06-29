import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-arch',
  template: `
    <svg viewBox="0 398 337 168" width="100%" height="100%" fill="none" class="block" [style.color]="color()" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 566C1.06582e-06 521.444 17.7526 478.712 49.3524 447.206C80.9523 415.7 123.811 398 168.5 398C213.189 398 256.047 415.7 287.647 447.206C319.247 478.712 337 521.443 337 566L222.225 566C222.225 551.793 216.565 538.169 206.489 528.123C196.414 518.078 182.749 512.434 168.5 512.434C154.251 512.434 140.586 518.078 130.511 528.123C120.435 538.169 114.775 551.794 114.775 566H0Z" fill="currentColor"/>
    </svg>
  `,
})
export class BrandArch {
  readonly color = input('#76D0FC');
}

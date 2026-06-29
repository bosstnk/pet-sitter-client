import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-facebook',
  host: { class: 'inline-block w-6 h-6' },
  template: `
    <svg viewBox="48 654 21 20" width="100%" height="100%" fill="none" class="block" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.25 664.061C68.25 658.505 63.7729 654 58.25 654C52.7271 654 48.25 658.505 48.25 664.061C48.25 669.083 51.9068 673.245 56.6875 674V666.969H54.1484V664.061H56.6875V661.845C56.6875 659.323 58.1805 657.93 60.4646 657.93C61.5584 657.93 62.7031 658.127 62.7031 658.127V660.603H61.4422C60.2 660.603 59.8125 661.378 59.8125 662.175V664.061H62.5859L62.1426 666.969H59.8125V674C64.5932 673.245 68.25 669.083 68.25 664.061Z" fill="#1877F2"/>
    </svg>
  `,
})
export class IconFacebook {}

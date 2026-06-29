import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  host: { class: 'inline-block align-middle' },
  template: `
    <button
      type="button"
      class="group inline-flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
      [disabled]="disabled()"
      (click)="toggle()"
    >
      <span [class]="boxClasses()">
        @if (checked()) {
          <svg viewBox="0 0 24 24" class="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7.5 10 16l-4-4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }
      </span>
      <span [class]="labelClasses()">
        <ng-content />
      </span>
    </button>
  `,
})
export class Checkbox {
  readonly disabled = input(false);

  protected readonly checked = signal(false);

  protected toggle(): void {
    if (this.disabled()) return;
    this.checked.update((v) => !v);
  }

  protected readonly boxClasses = computed(() => {
    const base =
      'relative flex items-center justify-center w-6 h-6 rounded-md border transition-colors';
    if (this.disabled()) return `${base} bg-[#F6F6F9] border-gray-200`;
    if (this.checked()) return `${base} bg-orange-500 border-orange-300`;
    return `${base} bg-white border-gray-200 group-hover:border-orange-300`;
  });

  protected readonly labelClasses = computed(() => {
    const base = 'text-base font-medium leading-normal';
    return this.disabled() ? `${base} text-gray-500` : `${base} text-gray-600`;
  });
}

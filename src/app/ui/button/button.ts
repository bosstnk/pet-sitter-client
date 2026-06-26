import { Component, computed, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'social';
export type ButtonSize = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex w-full items-center justify-center gap-2 text-[16px] font-bold rounded-pill ' +
  'cursor-pointer border-0 transition-colors select-none ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-7 text-lg',
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-600',
  secondary: 'bg-orange-100 text-orange-500 hover:bg-orange-200 active:bg-orange-300',
  ghost: 'bg-transparent text-orange-500 hover:text-orange-400 active:text-orange-600',
  social: 'bg-gray-100 text-gray-600 hover:text-gray-400 active:text-gray-400',
};

@Component({
  selector: 'app-button',
  host: {
    '[class.block]': 'fullWidth()',
    '[class.w-full]': 'fullWidth()',
  },
  template: `
    <button [class]="classes()" [disabled]="disabled()">
      <ng-content />
    </button>
  `,
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly fullWidth = input(false);

  protected readonly classes = computed(
    () => `${BASE} ${SIZES[this.size()]} ${VARIANTS[this.variant()]}`,
  );
}

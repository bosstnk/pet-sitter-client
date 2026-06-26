import { Component, computed, input, signal } from '@angular/core';
import { IconArrowDown } from '../icon';

@Component({
  selector: 'app-dropdown',
  imports: [IconArrowDown],
  host: { class: 'block relative' },
  template: `
    <button
      type="button"
      class="flex flex-row items-center gap-2 w-full h-12 pl-3 pr-4 py-3 bg-white border border-gray-100 rounded-input"
      (click)="toggle()"
    >
      <span class="flex-1 text-left text-base font-normal leading-normal text-gray-300">
        {{ display() }}
      </span>
      <app-icon-arrow-down class="transition-transform" [class.rotate-180]="open()" />
    </button>

    @if (open()) {
      <div class="fixed inset-0 z-10" (click)="close()"></div>
      <div
        class="absolute left-0 right-0 top-[calc(100%+4px)] z-20 bg-white border border-gray-100 rounded-input py-1 shadow-md"
      >
        @for (opt of options(); track opt) {
          <button
            type="button"
            class="block w-full text-left px-3 py-2 text-base text-gray-300 hover:bg-gray-100"
            (click)="select(opt)"
          >
            {{ opt }}
          </button>
        }
      </div>
    }
  `,
})
export class Dropdown {
  readonly options = input<string[]>(['0-2 Year', '3-5 Year', '5+ Year']);

  protected readonly open = signal(false);
  protected readonly selected = signal<string | null>(null);
  protected readonly display = computed(() => this.selected() ?? this.options()[0]);

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected select(opt: string): void {
    this.selected.set(opt);
    this.close();
  }
}

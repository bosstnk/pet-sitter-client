import { Component, input, signal } from '@angular/core';
import { IconStar } from '../icon';

@Component({
  selector: 'app-rating-select',
  imports: [IconStar],
  host: { class: 'inline-flex flex-row flex-wrap gap-2' },
  template: `
    @for (rating of ratings(); track rating) {
      <button
        type="button"
        [class]="chipClasses(rating)"
        (click)="toggle(rating)"
      >
        <span class="text-body-2">{{ rating }}</span>
        @for (star of stars(rating); track $index) {
          <app-icon-star class="text-green-500" />
        }
      </button>
    }
  `,
})
export class RatingSelect {
  readonly ratings = input<number[]>([5, 4, 3, 2, 1]);

  protected readonly selected = signal<ReadonlySet<number>>(new Set());

  protected toggle(value: number): void {
    const next = new Set(this.selected());
    if (next.has(value)) {
      next.delete(value);
    } else {   
      next.add(value);
    }
    this.selected.set(next);
  }

  protected stars(rating: number): unknown[] {
    return Array.from({ length: rating });
  }

  protected chipClasses(rating: number): string {
    const base =
      'flex flex-row items-center gap-1 px-2 py-1 ' +
      'rounded-input border cursor-pointer transition-colors';
    const state = this.selected().has(rating)
      ? 'border-orange-500 text-orange-500'
      : 'border-gray-200 text-gray-400';
    return `${base} ${state}`;
  }
}

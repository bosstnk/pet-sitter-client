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
        (click)="select(rating)"
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

  protected readonly selected = signal<number | null>(null);

  protected select(value: number): void {
    this.selected.set(value);
  }

  protected stars(rating: number): unknown[] {
    return Array.from({ length: rating });
  }

  protected chipClasses(rating: number): string {
    const base =
      'flex flex-row items-center gap-1 px-2 py-1 ' +
      'rounded-input border cursor-pointer transition-colors';
    const state =
      this.selected() === rating
        ? 'border-orange-500 text-orange-500'
        : 'border-gray-100 text-gray-300';
    return `${base} ${state}`;
  }
}

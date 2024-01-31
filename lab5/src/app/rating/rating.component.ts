import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating!: number;

  createRange(arg0: number) {
    return new Array(Math.round(arg0)).fill(0).map((n, index) => index + 1);
  }

}

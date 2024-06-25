import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { DurationPipe } from '@shared/pipe/duration.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe, DurationPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  @Input() tracks: TracksModel[] = [];
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  ngOnInit() {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}

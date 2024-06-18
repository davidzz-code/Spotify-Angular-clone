import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
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
  tracks: TracksModel[] = [];
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }

    console.log('this.optionSort:', this.optionSort);
  }
}

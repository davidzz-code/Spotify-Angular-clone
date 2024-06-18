import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks: TracksModel[] = [];

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

}

import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import * as dataRaw from '../../../../data/tracks.json'
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  mockTrackList: Array<TracksModel> = []

  ngOnInit() {
    const { data }: any = (dataRaw as any).default
    this.mockTrackList = data
  }
}

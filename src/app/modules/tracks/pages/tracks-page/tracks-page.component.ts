import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, TracksPageComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy{
  trendingTracks: Array<TracksModel> = []
  randomTracks: Array<TracksModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe((response: TracksModel[]) => {
      this.trendingTracks = response
    })
  }

  ngOnDestroy(): void {

  }
}

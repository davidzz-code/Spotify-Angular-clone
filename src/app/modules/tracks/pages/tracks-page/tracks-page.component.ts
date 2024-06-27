import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, TracksPageComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{
  trendingTracks: Array<TracksModel> = []
  randomTracks: Array<TracksModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    this.trendingTracks = await firstValueFrom(this.trackService.getAllTracks$())
    this.randomTracks = await firstValueFrom(this.trackService.getAllRandom$())
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { SharedModule } from '@shared/shared.module';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {
  trendingTracks: Array<TracksModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    this.trendingTracks = await firstValueFrom(this.trackService.getAllTracks$())
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy  {
  mockCover: TracksModel = {
    cover: 'https://imgs.search.brave.com/PNhIXLVCX2LEXAapGN0Mn_jogWrIiIRxWeC8Mp5Hx7I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmFsYnVtb2Z0aGV5/ZWFyLm9yZy8zNzV4/L2FsYnVtLzM2NjUz/NS1rZW1hbmRvLW1h/cmJlbGxhLXZvbC0y/LXByb2QtbWlraHN2/YmlzaGlfMDQ0Ni5q/cGc',
    album: 'Luis Miguel',
    name: 'Llamarada',
    url: 'https://www.youtube.com/watch?v=3Z8y1nZGQa4',
    _id: '1'
  }

  listObservers$: Array<Subscription> = []
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit() {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TracksModel) => {
        console.log('Recibiendo cancion...', response)
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(ob => ob.unsubscribe())
  }
}

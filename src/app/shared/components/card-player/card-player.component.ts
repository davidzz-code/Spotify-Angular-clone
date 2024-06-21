import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TracksModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: '',
  };
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://imgs.search.brave.com/PNhIXLVCX2LEXAapGN0Mn_jogWrIiIRxWeC8Mp5Hx7I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmFsYnVtb2Z0aGV5/ZWFyLm9yZy8zNzV4/L2FsYnVtLzM2NjUz/NS1rZW1hbmRvLW1h/cmJlbGxhLXZvbC0y/LXByb2QtbWlraHN2/YmlzaGlfMDQ0Ni5q/cGc',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
  }
}

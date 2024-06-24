import { Component } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [SharedModule, SearchComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults: TracksModel[] = [];
  constructor(private searchService: SearchService) { }

  receiveData(event: string): void {
    console.log('Estoy en el padre:', event);
    this.searchService.searchTracks$(event)
      .subscribe(({data}) => {
        this.listResults = data;
      })
  }
}

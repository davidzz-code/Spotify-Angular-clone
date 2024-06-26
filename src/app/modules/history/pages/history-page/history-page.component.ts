import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { SharedModule } from '@shared/shared.module';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [SharedModule, SearchComponent, CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event);
  }
}

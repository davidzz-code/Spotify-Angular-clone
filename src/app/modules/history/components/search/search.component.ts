import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() callbackData: EventEmitter<any> = new EventEmitter<any>();

  src: string = '';
  callSearch(term: string): void {
    if (term.length >= 3) {
      console.log('hola');
      this.callbackData.emit(term);
    }


  }

}

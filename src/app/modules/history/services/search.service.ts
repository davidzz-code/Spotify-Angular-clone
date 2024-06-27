import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
        map((dataRaw: any) => {
          const searchTerm = term.trim().toLowerCase();

          return dataRaw.data.filter(({ name, album, artist }: any) => {
            const nameLower = name.toLowerCase();
            const albumLower = album.toLowerCase();
            const artistLower = artist.name.toLowerCase();

            return nameLower.includes(searchTerm)
              || albumLower.includes(searchTerm)
              || artistLower.includes(searchTerm);
          });
        })
      );
  }
}

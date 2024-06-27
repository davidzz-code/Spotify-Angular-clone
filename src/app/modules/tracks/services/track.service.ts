import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => data),
        catchError((err) => {
          const {status, statusText} = err
          console.table([status, statusText])
          return of([])
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(map(({ data }: any) => {
        const randomData = data.sort(() => Math.random() - 0.5);
        return randomData;
      }))
  }
}

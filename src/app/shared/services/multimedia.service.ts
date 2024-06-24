import { EventEmitter, Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Agua')

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {
      if (responseOk) {
        console.log('Reproduciendo: ', responseOk)
        this.setAudio(responseOk)
      }
    })

    // this.myObservable1$ = new Observable((observer: Observer<any>) => {
    //   observer.complete()
    //   observer.next('Enviando agua...')
    //   observer.error('Se rompió el caño')
    // })
  }

  public setAudio(track: TracksModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }
}

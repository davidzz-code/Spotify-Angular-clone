import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SharedModule {}

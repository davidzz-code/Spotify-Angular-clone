import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent
  ]
})
export class TracksModule { }

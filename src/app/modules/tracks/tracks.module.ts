import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
  ],
})
export class TracksModule { }

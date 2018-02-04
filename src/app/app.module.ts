import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'videos', component: VideosComponent},
      {path: '', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

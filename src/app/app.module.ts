import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import  {HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { VideosComponentComponent } from './videos-component/videos-component.component';
import { AppRoutingModule} from "./app-routing.module";
import {routingComponents} from "./app-routing.module";
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponentComponent,
    VideosComponentComponent,
    routingComponents,
    WatchVideoComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LazyLoadImageModule,
    LightboxModule
  ],
  providers: [
    LightboxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

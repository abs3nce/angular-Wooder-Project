import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MoreVideosComponent } from './more-videos/more-videos.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    HeaderComponent,
    MoreVideosComponent,
    VideoBoxComponent,
    FeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

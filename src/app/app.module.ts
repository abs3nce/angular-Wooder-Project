import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { MoreVideosComponent } from './more-videos/more-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MoreVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

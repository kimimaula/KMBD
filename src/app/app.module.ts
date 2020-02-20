import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ViewsinglemovieComponent } from './viewsinglemovie/viewsinglemovie.component';
import { MovieslistComponent } from './movieslist/movieslist.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    AddmovieComponent,
    ViewsinglemovieComponent,
    MovieslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

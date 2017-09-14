import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SrtypeaheadComponent } from './srtypeahead/srtypeahead.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { routing } from "app/app.routing";
import { MovieDataService } from "app/movie-data.service";
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SrtypeaheadComponent,
    MovieComponent,
    MovieListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

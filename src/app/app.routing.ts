import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "app/app.component";
import { MovieComponent } from "app/movie/movie.component";
import { MovieListComponent } from "app/movie-list/movie-list.component";


const APP_ROUTES: Routes = [
    { path: '', component: MovieListComponent }
    , { path: 'movie/:id', component: MovieComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
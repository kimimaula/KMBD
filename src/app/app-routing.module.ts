import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component'
import { AddmovieComponent } from './addmovie/addmovie.component'
import { ViewsinglemovieComponent } from './viewsinglemovie/viewsinglemovie.component'


const routes: Routes = [
  { path: '', component : MovieslistComponent},
  { path: 'movie/:movieid', component : ViewsinglemovieComponent},
  { path: 'addmovie', component : AddmovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

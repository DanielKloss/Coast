import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import { TrainingFilmListComponent }  from './trainingFilms/trainingFilm-list.component';
import { TrainingFilmDetailComponent }  from './trainingFilms/trainingFilm-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'trainingFilms', component: TrainingFilmListComponent},
      {path: 'trainingFilmDetail/:id', component: TrainingFilmDetailComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  declarations: 
  [
     AppComponent,
     WelcomeComponent,
     TrainingFilmListComponent,
     TrainingFilmDetailComponent,
  ],
  bootstrap: 
  [
     AppComponent 
  ]
})
export class AppModule { }

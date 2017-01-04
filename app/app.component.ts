import { Component } from '@angular/core';

import { TrainingFilmService } from './trainingFilms/trainingFilm.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [ TrainingFilmService]
})
export class AppComponent {

 }

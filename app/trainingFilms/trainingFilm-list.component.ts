import { Component, OnInit } from '@angular/core';

import { ITrainingFilm } from './trainingFilm';
import { TrainingFilmService } from './trainingFilm.service';

@Component({
    templateUrl: 'app/trainingFilms/trainingFilm-list.component.html'
})
export class TrainingFilmListComponent implements OnInit{
    pageTitle: string = "Training Films";
    films: ITrainingFilm[];

    constructor(private _trainingFilmService: TrainingFilmService){

    }

    ngOnInit(): void {
        this.films = this._trainingFilmService.getFilms();
    }
}

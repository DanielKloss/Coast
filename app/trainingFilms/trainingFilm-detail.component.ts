import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ITrainingFilm } from './trainingFilm';
import { TrainingFilmService } from './trainingFilm.service'

@Component({
    templateUrl: 'app/trainingFilms/trainingFilm-detail.component.html'
})
export class TrainingFilmDetailComponent implements OnInit{
    trainingFilm: ITrainingFilm;

    constructor(private _route: ActivatedRoute, private _trainingFilmService: TrainingFilmService){

    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.trainingFilm = this._trainingFilmService.getFilm(id);
    }
}

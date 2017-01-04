import { Injectable } from '@angular/core';

import { ITrainingFilm } from './trainingFilm';

@Injectable()
export class TrainingFilmService {

    getFilms(): ITrainingFilm[] {
        return [
            { "id": 1, "title": "test1", "videoUrl":"app/assets/videos/test1.mp4"},
            { "id": 2, "title": "test2", "videoUrl":"app/assets/videos/test2.mp4"},
            { "id": 3, "title": "test3", "videoUrl":"app/assets/videos/test3.mp4"}
        ];
    }

    getFilm(id: number): ITrainingFilm {
        return { "id": 1, "title": "test1", "videoUrl":"app/assets/videos/test1.mp4"}
    }
}
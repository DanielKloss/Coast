import { Injectable } from '@angular/core';

import { ITrainingFilm } from './trainingFilm';

@Injectable()
export class TrainingFilmService {

    trainingFilms: ITrainingFilm[] = [
            { "id": 0, "title": "Eligibility Criteria", "videoUrl":"app/assets/videos/EligibilityCriteria.mp4"},
            { "id": 1, "title": "Pulse Oximetry", "videoUrl":"app/assets/videos/PulseOximetry.mp4"},
            { "id": 2, "title": "Stratum 1", "videoUrl":"app/assets/videos/Stratum1.mp4"},
            { "id": 3, "title": "Stratum2", "videoUrl":"app/assets/videos/Stratum2.mp4"},
            { "id": 4, "title": "High Flow Oxygen Setup", "videoUrl":"app/assets/videos/HighFlowOxygenSetup.mp4"},
            { "id": 5, "title": "High Flow Oxygen Administration", "videoUrl":"app/assets/videos/High Flow Oxygen Administration.mp4"},
            { "id": 6, "title": "Low Flow Oxygen Administration", "videoUrl":"app/assets/videos/Low Flow Oxygen Administration.mp4"},
            { "id": 7, "title": "Permissive Hypoxia", "videoUrl":"app/assets/videos/PermissiveHypoxia.mp4"},
            { "id": 8, "title": "Duration of Treatment/ Trial Discontinuation", "videoUrl":"app/assets/videos/DurationOfTreatmentTrialDiscontinuation.mp4"}
        ];

    getFilms(): ITrainingFilm[] {
        return this.trainingFilms;
    }

    getFilm(id: number): ITrainingFilm {
        return this.trainingFilms[id];
    }
}
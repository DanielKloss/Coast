"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TrainingFilmService = (function () {
    function TrainingFilmService() {
        this.trainingFilms = [
            { "id": 0, "title": "Eligibility Criteria", "videoUrl": "app/assets/videos/EligibilityCriteria.mp4" },
            { "id": 1, "title": "Pulse Oximetry", "videoUrl": "app/assets/videos/PulseOximetry.mp4" },
            { "id": 2, "title": "Stratum 1", "videoUrl": "app/assets/videos/Stratum1.mp4" },
            { "id": 3, "title": "Stratum2", "videoUrl": "app/assets/videos/Stratum2.mp4" },
            { "id": 4, "title": "High Flow Oxygen Setup", "videoUrl": "app/assets/videos/HighFlowOxygenSetup.mp4" },
            { "id": 5, "title": "High Flow Oxygen Administration", "videoUrl": "app/assets/videos/High Flow Oxygen Administration.mp4" },
            { "id": 6, "title": "Low Flow Oxygen Administration", "videoUrl": "app/assets/videos/Low Flow Oxygen Administration.mp4" },
            { "id": 7, "title": "Permissive Hypoxia", "videoUrl": "app/assets/videos/PermissiveHypoxia.mp4" },
            { "id": 8, "title": "Duration of Treatment/ Trial Discontinuation", "videoUrl": "app/assets/videos/DurationOfTreatmentTrialDiscontinuation.mp4" }
        ];
    }
    TrainingFilmService.prototype.getFilms = function () {
        return this.trainingFilms;
    };
    TrainingFilmService.prototype.getFilm = function (id) {
        return this.trainingFilms[id];
    };
    return TrainingFilmService;
}());
TrainingFilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TrainingFilmService);
exports.TrainingFilmService = TrainingFilmService;
//# sourceMappingURL=trainingFilm.service.js.map
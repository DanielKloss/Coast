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
var trainingFilm_service_1 = require("./trainingFilm.service");
var TrainingFilmListComponent = (function () {
    function TrainingFilmListComponent(_trainingFilmService) {
        this._trainingFilmService = _trainingFilmService;
        this.pageTitle = "Training Films";
    }
    TrainingFilmListComponent.prototype.ngOnInit = function () {
        this.films = this._trainingFilmService.getFilms();
    };
    return TrainingFilmListComponent;
}());
TrainingFilmListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/trainingFilms/trainingFilm-list.component.html'
    }),
    __metadata("design:paramtypes", [trainingFilm_service_1.TrainingFilmService])
], TrainingFilmListComponent);
exports.TrainingFilmListComponent = TrainingFilmListComponent;
//# sourceMappingURL=trainingFilm-list.component.js.map
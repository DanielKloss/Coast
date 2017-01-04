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
    }
    TrainingFilmService.prototype.getFilms = function () {
        return [
            { "id": 1, "title": "test1", "videoUrl": "app/assets/videos/test1.mp4" },
            { "id": 2, "title": "test2", "videoUrl": "app/assets/videos/test2.mp4" },
            { "id": 3, "title": "test3", "videoUrl": "app/assets/videos/test3.mp4" }
        ];
    };
    TrainingFilmService.prototype.getFilm = function (id) {
        return { "id": 1, "title": "test1", "videoUrl": "app/assets/videos/test1.mp4" };
    };
    return TrainingFilmService;
}());
TrainingFilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TrainingFilmService);
exports.TrainingFilmService = TrainingFilmService;
//# sourceMappingURL=trainingFilm.service.js.map
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
var VotesComponent = (function () {
    function VotesComponent() {
        this.agreed = 0;
        this.disagreed = 0;
        this.voters = ["Mr IQ", "Ms. Universe", "Bombasto"];
    }
    VotesComponent.prototype.onVoted = function (agreed) {
        agreed ? this.agreed++ : this.disagreed++;
    };
    VotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "vote-taker",
            templateUrl: "votes.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], VotesComponent);
    return VotesComponent;
}());
exports.VotesComponent = VotesComponent;
//# sourceMappingURL=votes.component.js.map
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "vote-taker",
    templateUrl: "votes.component.html"
})
export class VotesComponent {
    agreed = 0;
    disagreed = 0;
    voters = ["Mr IQ", "Ms. Universe", "Bombasto"];
    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}
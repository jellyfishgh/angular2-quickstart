import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {VoterComponent} from "./voter.component";
import {VotesComponent} from "./votes.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, VotesComponent, VoterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
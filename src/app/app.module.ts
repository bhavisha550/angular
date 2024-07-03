import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PatientModule } from "./patient/patient.module"
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        PatientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{ }
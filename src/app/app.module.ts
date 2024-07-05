import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PatientModule } from "./patient/patient.module"
import { AppComponent } from "./app.component";
import {FormsModule} from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        PatientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{ 

}
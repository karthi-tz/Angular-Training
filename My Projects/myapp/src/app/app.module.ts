import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from "./warning/warning.component";
import { SuccessComponent } from './success/success.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

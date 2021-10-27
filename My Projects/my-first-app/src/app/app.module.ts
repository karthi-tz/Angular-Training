import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { KarthiComponent } from './karthi/karthi.component';
import { ExampleComponent } from './example/example.component';
import { DesignComponent } from './design/design.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    KarthiComponent,
    ExampleComponent,
    DesignComponent,
    SuccessComponent,
    WarningComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

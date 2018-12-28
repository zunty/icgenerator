import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { IcFormComponent } from './ic-form/ic-form.component';
import { IcExtractComponent } from './ic-extract/ic-extract.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    IcFormComponent,
    IcExtractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

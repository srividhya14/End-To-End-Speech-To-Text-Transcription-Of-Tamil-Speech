import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntrosectionComponent } from './introsection/introsection.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { TranscriptionstepsComponent } from './transcriptionsteps/transcriptionsteps.component';
import { FeaturesComponent } from './features/features.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    IntrosectionComponent,
    FileuploadComponent,
    TranscriptionstepsComponent,
    FeaturesComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

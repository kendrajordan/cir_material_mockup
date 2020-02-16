import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { NavbarComponent } from './navbar/navbar.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { MySafetyRemediationsComponent } from './my-safety-remediations/my-safety-remediations.component';
import { AllSafetyRemediationsComponent } from './all-safety-remediations/all-safety-remediations.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { SafetyRemediationsDetailsComponent } from './safety-remediations-details/safety-remediations-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { OptionsDialogComponent } from './options-dialog/options-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyIncidentsComponent,
    AllIncidentsComponent,
    MySafetyRemediationsComponent,
    AllSafetyRemediationsComponent,
    IncidentDetailsComponent,
    SafetyRemediationsDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    OptionsDialogComponent
  ],
  entryComponents:[
    OptionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

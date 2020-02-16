import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { AllSafetyRemediationsComponent } from './all-safety-remediations/all-safety-remediations.component';
import { MySafetyRemediationsComponent } from './my-safety-remediations/my-safety-remediations.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { SafetyRemediationsDetailsComponent } from './safety-remediations-details/safety-remediations-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'incidents/myincidents',component: MyIncidentsComponent},
  {path: 'incidents/allincidents',component: AllIncidentsComponent},
  {path:'safetyremediations/mysafetyremediations',component:MySafetyRemediationsComponent},
  {path:'safetyremediations/allsafetyremediations', component: AllSafetyRemediationsComponent},
  {path:'incidents/incidentdetails/:id', component: IncidentDetailsComponent},
  {path:'safetyremediations/safetyremediationsdetails/:id', component: SafetyRemediationsDetailsComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

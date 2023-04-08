import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { ProgramComponent } from './program/program.component';
import { DelegatesComponent } from './delegates/delegates.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: "", component: DealsComponent },
  { path: "Exhibitors", component: ExhibitorsComponent },
  { path: "Program", component: ProgramComponent },
  { path: "Delegates", component: DelegatesComponent },
  { path: "Settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

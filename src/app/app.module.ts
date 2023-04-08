import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DealsComponent } from './deals/deals.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { ProgramComponent } from './program/program.component';
import { DelegatesComponent } from './delegates/delegates.component';
import { SettingsComponent } from './settings/settings.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DealsComponent,
    ClientCardComponent,
    ExhibitorsComponent,
    ProgramComponent,
    DelegatesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

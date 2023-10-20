import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperflowComponent } from './stepperflow/stepperflow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './Sub-Components/products/products.component';
import { ServiceComponent } from './Sub-Components/service/service.component';
import { SupportComponent } from './Sub-Components/support/support.component';
import { HelpcompComponent } from './Sub-Components/helpcomp/helpcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperflowComponent,
    HomeComponent,
    ProductsComponent,
    ServiceComponent,
    SupportComponent,
    HelpcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

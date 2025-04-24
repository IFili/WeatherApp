import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { LoginComponent } from './login/login.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

// import { AccordionModule } from './accordion/accordion.module';








@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    LoginComponent,
    WeatherWidgetComponent,
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    CommonModule,
    // AccordionModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

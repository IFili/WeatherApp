import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'weather', component: WeatherWidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { WeatherData, Daily , Hourly} from './weather.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
  weatherData: any;

  twoDayForecastData: Daily[] = [];
  sevenDayForecastData: Daily[] = [];

  cityName: string = 'London';

  
  // twoDayForecastModalVisible: boolean = false;

  constructor(private http: HttpClient, ) { }
  
  ngOnInit() {
    this.getWeatherData();
   
    
  }

  onSubmit() {
    if (this.cityName.trim() !== '') {
      this.getWeatherData();
    }
  }

  private getWeatherData() {
    const apiUrl = `https://localhost:7144/api/OneCall?cityName=${encodeURIComponent(this.cityName)}`;

    this.http.get<WeatherData>(apiUrl).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData.daily);
      
      },
      (error) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
    

  }

  openModal(modalId: string): void {
    const modalDiv = document.getElementById(modalId);
    if (modalDiv !== null) {
      modalDiv.style.display = 'block';
    
    }
  }
  
  closeModal(modalId: string) :void {
    const modalDiv = document.getElementById(modalId);
    if (modalDiv !== null) {
      modalDiv.style.display = 'none';
    
    }
  }

  


  getRemainingHours(): any[] {
    if (this.weatherData && this.weatherData.hourly) {
      const currentTimestamp = Date.now() / 1000; // Get the current timestamp in seconds
      const remainingHours = this.weatherData.hourly.slice(1); // Exclude the first hour

      // Filter out the forecast data for the next day 
      const filteredHours = remainingHours.filter((data: Hourly) => data.dt < currentTimestamp + 86400);
                                                                // ^-- if data is lower than 24 hours, filter it
      return filteredHours;
    }
    return [];
  }

}

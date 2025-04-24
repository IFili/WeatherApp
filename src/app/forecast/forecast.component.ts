import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})





export class ForecastComponent {

  openModal(modalId: string): void {
    const modalDiv = document.getElementById(modalId);
    if (modalDiv !== null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal(modalId: string) : void {
    const modalDiv = document.getElementById(modalId);
    if (modalDiv !== null) {
      modalDiv.style.display = 'none';
    }
  }



}



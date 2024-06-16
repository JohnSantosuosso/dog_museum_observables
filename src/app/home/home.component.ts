import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogPhotos: any;
  otherDogPhotos: any;

  constructor(private apiService: ApiService) { }

  onButtonClick() {
    this.loadDogPhotos();
    this.loadOtherDogPhotos();

  }

  loadDogPhotos() {
    this.apiService.getDogPhotos().subscribe({
      next: data => {
        this.dogPhotos = data;
        console.log(this.dogPhotos);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  loadOtherDogPhotos() {
    this.apiService.getOtherDogPhotos().subscribe({
      next: data => {
        this.otherDogPhotos = data;
        console.log(this.otherDogPhotos);
      },
      error: error => {
        console.log(error);
      }
    });
  }
};

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
  museumPhotos: any;

  constructor(private apiService: ApiService) { }

  onButtonClick() {
    this.loadDogPhotos();
    this.loadOtherDogPhotos();
    this.loadMuseumPhotos();

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

  loadMuseumPhotos() {
    this.apiService.getMuseumPhotos().subscribe({
      next: data => {
        this.museumPhotos = data;
        console.log(this.museumPhotos);
      },
      error: error => {
        console.log(error);
      }
    });
  }
};

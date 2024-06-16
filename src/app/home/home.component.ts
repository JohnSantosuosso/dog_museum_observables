import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

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
    forkJoin([
      this.apiService.getDogPhotos(),
      this.apiService.getOtherDogPhotos(),
      this.apiService.getMuseumPhotos()
    ]).subscribe({
      next: ([dogPhotos, otherDogPhotos, museumPhotos]) => {
        this.dogPhotos = dogPhotos;
        this.otherDogPhotos = otherDogPhotos;
        this.museumPhotos = museumPhotos;
        console.log(this.dogPhotos, this.otherDogPhotos, this.museumPhotos);
      },
      error: error => {
        console.log(error);
      }
    });
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

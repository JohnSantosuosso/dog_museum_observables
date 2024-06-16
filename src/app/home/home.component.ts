import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogPhotos: any;

  constructor(private apiService: ApiService) { }

  onButtonClick() {
    this.loadDogPhotos();
  }

  loadDogPhotos() {
    this.apiService.getDogPhotos().subscribe(data => {
      this.dogPhotos = data;
      console.log(this.dogPhotos);
    },
    error => {
      console.log(error);
    });
  }
}

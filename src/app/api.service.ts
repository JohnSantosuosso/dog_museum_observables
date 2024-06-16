import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getDogPhotos(): Observable<any> {
    return this.http.get('https://random.dog/woof.json');
  }

  getOtherDogPhotos(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

  getMuseumPhotos(): Observable<any> {
    return this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 500 + 1)}`);
  }
}
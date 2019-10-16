import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basePath = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }
 
  getFilms() {
    return this.http.get(`${this.basePath}/films`);
  }
 
  getFilm(id) {
    return this.http.get(`${this.basePath}/films/${id}`);
  }

  getPeople() {
    return this.http.get(`${this.basePath}/people`);
  }

  getCharacter(id) {
    return this.http.get(`${this.basePath}/people/${id}`);
  }

  getPlanets() {
    return this.http.get(`${this.basePath}/planets`);
  }

  getPlanet(id) {
    return this.http.get(`${this.basePath}/planets/${id}`);
  }
}

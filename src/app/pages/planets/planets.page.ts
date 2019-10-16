import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.planets = this.api.getPlanets();
  }

  openDetail(planet) {
    let split = planet.url.split('/');
    let planetId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);    
  }

}

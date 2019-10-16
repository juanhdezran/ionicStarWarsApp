import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.page.html',
  styleUrls: ['./planets-details.page.scss'],
})
export class PlanetsDetailsPage implements OnInit {

  planetId: any;
  planet: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.planetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(this.planetId).subscribe( planet => {
      this.planet = planet;
    });
  }

}

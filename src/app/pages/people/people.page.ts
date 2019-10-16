import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openDetail(character){
    let split = character.url.split("/");
    let characterId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/people/${characterId}`);   
  }

}

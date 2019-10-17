import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { FilmsPageModule } from '../films/films.module';
import { PeoplePageModule } from '../people/people.module';
import { PlanetsPageModule } from '../planets/planets.module';
import { FilmDetailsPageModule } from '../film-details/film-details.module';
import { PeopleDetailsPageModule } from '../people-details/people-details.module';
import { PlanetsDetailsPageModule } from '../planets-details/planets-details.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => FilmsPageModule
          },
          {
            path: ':id',
            loadChildren: () => FilmDetailsPageModule
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () => PeoplePageModule
          },
          {
            path: ':id',
            loadChildren: () => PeopleDetailsPageModule
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () => PlanetsPageModule
          },
          {
            path: ':id',
            loadChildren: () => PlanetsDetailsPageModule
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

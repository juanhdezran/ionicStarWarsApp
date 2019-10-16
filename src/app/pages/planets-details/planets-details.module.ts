import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanetsDetailsPage } from './planets-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanetsDetailsPage]
})
export class PlanetsDetailsPageModule {}

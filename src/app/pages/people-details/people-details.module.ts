import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeopleDetailsPage } from './people-details.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeopleDetailsPage]
})
export class PeopleDetailsPageModule {}

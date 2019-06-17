import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiaComProvaPage } from './dia-com-prova.page';

const routes: Routes = [
  {
    path: '',
    component: DiaComProvaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiaComProvaPage]
})
export class DiaComProvaPageModule {}

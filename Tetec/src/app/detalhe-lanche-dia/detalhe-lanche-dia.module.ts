import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheLancheDiaPage } from './detalhe-lanche-dia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheLancheDiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheLancheDiaPage]
})
export class DetalheLancheDiaPageModule {}

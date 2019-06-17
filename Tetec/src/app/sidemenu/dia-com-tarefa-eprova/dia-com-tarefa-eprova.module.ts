import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiaComTarefaEProvaPage } from './dia-com-tarefa-eprova.page';

const routes: Routes = [
  {
    path: '',
    component: DiaComTarefaEProvaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiaComTarefaEProvaPage]
})
export class DiaComTarefaEProvaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiaComTarefaPage } from './dia-com-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: DiaComTarefaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiaComTarefaPage]
})
export class DiaComTarefaPageModule {}

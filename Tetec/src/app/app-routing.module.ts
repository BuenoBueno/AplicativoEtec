import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'calendario', loadChildren: './sidemenu/calendario/calendario.module#CalendarioPageModule' },
  { path: 'cardapio', loadChildren: './sidemenu/cardapio/cardapio.module#CardapioPageModule' },
  { path: 'notificacoes', loadChildren: './sidemenu/notificacoes/notificacoes.module#NotificacoesPageModule' },
  { path: 'config', loadChildren: './sidemenu/config/config.module#ConfigPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tarefas', loadChildren: './sidemenu/tarefas/tarefas.module#TarefasPageModule' },
  { path: 'janeiro', loadChildren: './meses/janeiro/janeiro.module#JaneiroPageModule' },
  { path: 'fevereiro', loadChildren: './meses/fevereiro/fevereiro.module#FevereiroPageModule' },
  { path: 'marco', loadChildren: './meses/marco/marco.module#MarcoPageModule' },
  { path: 'abril', loadChildren: './meses/abril/abril.module#AbrilPageModule' },
  { path: 'maio', loadChildren: './meses/maio/maio.module#MaioPageModule' },
  { path: 'junho', loadChildren: './meses/junho/junho.module#JunhoPageModule' },
  { path: 'julho', loadChildren: './meses/julho/julho.module#JulhoPageModule' },
  { path: 'agosto', loadChildren: './meses/agosto/agosto.module#AgostoPageModule' },
  { path: 'setembro', loadChildren: './meses/setembro/setembro.module#SetembroPageModule' },
  { path: 'outubro', loadChildren: './meses/outubro/outubro.module#OutubroPageModule' },
  { path: 'novembro', loadChildren: './meses/novembro/novembro.module#NovembroPageModule' },
  { path: 'dezembro', loadChildren: './meses/dezembro/dezembro.module#DezembroPageModule' },
  { path: 'dia-com-tarefa', loadChildren: './sidemenu/dia-com-tarefa/dia-com-tarefa.module#DiaComTarefaPageModule' },
  { path: 'dia-com-prova', loadChildren: './sidemenu/dia-com-prova/dia-com-prova.module#DiaComProvaPageModule' },
  { path: 'dia-com-tarefa-eprova', loadChildren: './sidemenu/dia-com-tarefa-eprova/dia-com-tarefa-eprova.module#DiaComTarefaEProvaPageModule' },
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'detalhes-id/:id', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'detalhe-lanche-dia', loadChildren: './detalhe-lanche-dia/detalhe-lanche-dia.module#DetalheLancheDiaPageModule' },
  { path: 'detalhe-lanche-dia-id/:id', loadChildren: './detalhe-lanche-dia/detalhe-lanche-dia.module#DetalheLancheDiaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

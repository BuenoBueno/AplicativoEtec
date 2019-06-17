import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public noticia = {}

  public idNoticia = null;

  constructor(private rota: ActivatedRoute, private dadosService: DadosService) { }

  ngOnInit() {
    //Pega o parametro que veio na rota
    this.idNoticia = this.rota.snapshot.paramMap.get("id");
    this.noticia = this.dadosService.getDados('noticia');
  }

}

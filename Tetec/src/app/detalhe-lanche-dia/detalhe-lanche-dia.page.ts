import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-detalhe-lanche-dia',
  templateUrl: './detalhe-lanche-dia.page.html',
  styleUrls: ['./detalhe-lanche-dia.page.scss'],
})
export class DetalheLancheDiaPage implements OnInit {

  public lanche = {}

  public idLanche = null;

  constructor(private rota: ActivatedRoute, private dadosService: DadosService) { }

  ngOnInit() {
    //Pega o parametro que veio na rota
    this.lanche = this.dadosService.getDados('lanche');
  }
}

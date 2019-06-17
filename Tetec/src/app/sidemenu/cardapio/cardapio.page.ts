import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  constructor(private rota: Router, public enviaDados: DadosService) { //Constroi as variaveis antes de abrir a pagina
  }

  public mostraLanche(lanche) {
    this.enviaDados.setDados('lanche', lanche);
    this.rota.navigate(['/detalhe-lanche-dia']);
  }
  ngOnInit() {
  }

  public lanche = [
    {
      semana: '03 - 07 Junho', diario: [
        //Semana: dia - dia mes
        { titulo: '03/06 (Segunda-Feira)', manha: "Sucrilhos", manhaImg: "/assets/cardapio/sucrilhos.jpg", almoco:"Arroz, Feijão, Batata Frita e Bife", almocoImg:"/assets/cardapio/bife.jpg"},
        { titulo: '04/06 (Terça-Feira)', manha: "Bolinho Ana Maria", manhaImg: "/assets/cardapio/ana-maria.jpg", almoco:"Arroz, Batata Palha, Strogonoff", almocoImg:"/assets/cardapio/strogonoff.jpg"},
        { titulo: '05/06 (Quarta-Feira)', manha: "Alfajor", manhaImg: "/assets/cardapio/alfajor.jpg", almoco:"Lasanha de Strogonoff", almocoImg:"/assets/cardapio/lasanha.jpg"},
        { titulo: '06/06 (Quinta-Feira)', manha: "Pit Stop", manhaImg: "/assets/cardapio/pit-stop.png", almoco:"Pizza de Abacaxi", almocoImg:"/assets/cardapio/pizza.jpg"},
        { titulo: '07/06 (Sexta-Feira)', manha: "Cachorro quente", manhaImg: "/assets/cardapio/cachorro-quente.jpg", almoco:"Arroz, Filé de Frango Frito, Saladinha de Alface", almocoImg:"/assets/cardapio/frango.jpg"},
      ]
    },

    {
      semana: '10 - 14 Julho', diario: [
        //Semana: dia - dia mes
        { titulo: '10/06 (Segunda-Feira)', manha: "Alfajor", manhaImg: "/assets/cardapio/alfajor.jpg", almoco:"Pizza de Abacaxi", almocoImg:"/assets/cardapio/pizza.jpg"},
        { titulo: '11/06 (Terça-Feira)', manha: "Maça Verde", manhaImg: "/assets/cardapio/maca.jpg", almoco:"Pizza de Abacaxi", almocoImg:"/assets/cardapio/pizza.jpg"},
        { titulo: '12/06 (Quarta-Feira)', manha: "Cookies", manhaImg: "/assets/cardapio/cookies.jpg", almoco:"Arroz, Feijão, Batata Frita e Bife", almocoImg:"/assets/cardapio/bife.jpg"},
        { titulo: '13/06 (Quinta-Feira)', manha: "Melancia", manhaImg: "/assets/cardapio/melancia.jpg", almoco:"Arroz, Batata Palha, Strogonoff", almocoImg:"/assets/cardapio/strogonoff.jpg"},
        { titulo: '14/06 (Sexta-Feira)', manha: "Mini Pizza", manhaImg: "/assets/cardapio/miniPizza.jpg", almoco:"Arroz, Filé de Frango Frito, Saladinha de Alface", almocoImg:"/assets/cardapio/frango.jpg"},
      ]
    },

    {
      semana: '17 - 21 Julho', diario: [
        //Semana: dia - dia mes
        { titulo: '17/06 (Segunda-Feira)', manha: "Sorvete", manhaImg: "/assets/cardapio/sorvete.jpg", almoco:"Arroz, Feijão, Batata Frita e Bife", almocoImg:"/assets/cardapio/bife.jpg"},
        { titulo: '18/06 (Terça-Feira)', manha: "Cachorro Quente", manhaImg: "/assets/cardapio/cachorro-quente.jpg", almoco:"Arroz, Batata Palha, Strogonoff", almocoImg:"/assets/cardapio/strogonoff.jpg"},
        { titulo: '19/06 (Quarta-Feira)', manha: "Açaí", manhaImg: "/assets/cardapio/acai.jpg", almoco:"Arroz, Feijão, Batata Frita e Bife", almocoImg:"/assets/cardapio/bife.jpg"},
        { titulo: '20/06 (Quinta-Feira)', manha: "Sucrilhos", manhaImg: "/assets/cardapio/sucrilhos.jpg", almoco:"Arroz, Filé de Frango Frito, Saladinha de Alface", almocoImg:"/assets/cardapio/frango.jpg"},
        { titulo: '21/06 (Sexta-Feira)', manha: "Hamburguinho", manhaImg: "/assets/cardapio/hamburguinho.jpg", almoco:"Arroz, Filé de Frango Frito, Saladinha de Alface", almocoImg:"/assets/cardapio/frango.jpg"},
      ]
    },
  ]

}

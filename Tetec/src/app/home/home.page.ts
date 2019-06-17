import { Component } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rota: Router, public enviaDados: DadosService) { //Constroi as variaveis antes de abrir a pagina
  }

  public mostraNoticia(noticia) {
    this.enviaDados.setDados('noticia', noticia);
    this.rota.navigate(['/detalhes']);
  }

  ngOnInit() {
  }


  public noticia = [
    {
      titulo: 'Vestibulinho Etec',
      texto: 'Vestibulinho Etec 16/06...',
      textoCompleto: 'Nesta tarde do dia 16/06 ocorreu o Vestibulinho da Etec, o gabarito da prova já está disponivel no site da Etec. E no dia 16/07 será divulgada a lista de classificação geral.',
      img: '/assets/img/vestibulinho.jpg'
    },

    {
      titulo: 'Palestra João Grassi ',
      texto: 'Palestra João Grassi 10/06/2019...',
      textoCompleto: 'Nesta Segunda-Feira 10/06/2019, Ex-Aluno João Grassi virá dar uma palestra sobre tudo que aprendeu e a experiência de morar na Áustria por 3 anos.',
      img: '/assets/img/JoaoGrassi.jpg'
    },

    {
      titulo: 'Semana de provas vem ai!',
      texto: 'Semana de provas está chegando...',
      textoCompleto: 'Semana de provas está chegando, não esqueça de consultar o calendário de provas para ficar ligado, independente de qual curso você esteja prestando. Boas Provas!',
      img: '/assets/img/prova.jpg'
    },

    {
      titulo: 'Arraiá da Navar',
      texto: 'Venha pular a fogueira conosco...',
      textoCompleto: 'Dia 13 de junho na Ideal Ponte clube acontecerá nosso Arraiá da Navar das 19H às 23H, venha comer comidas típicas, participar das danças e brincadeiras. O ingresso custá R$10,00 e a apresentação do Documento de identidade Original será obrigatória. Venha se divertir conosco.',
      img: '/assets/img/arraia.jpg'
    },

    {
      titulo: 'Bgs em Outubro, Ja reservou sua vaga?',
      texto: 'As vagas estão acabando é melhor se apressar...',
      textoCompleto: 'A Brasil Game Show irá entre 09/10 e 13/10 e você não quer ficar de fora disso, então é melhor você se apressar pois as vagas estão acabando',
      img: '/assets/img/bgs.jpg'
    },

    {
      titulo: 'Pacu Ácqua Park',
      texto: '4 Meses Mágicos no Thermas Pacu Ácqua Park...',
      textoCompleto: 'O Pacu Ácqua Park presenteou nossos alunos com 4 meses gratuitos no Thermas Pacu Ácqua Park, durante esses 4 meses você pode frequentar e desfrutar de todas atrações do parque aquatico.',
      img: '/assets/img/Pacu.jpeg'
    },

    {
      titulo: 'Classificados Obmep',
      texto: 'Classificados Obmep 2° Fase 2019...',
      textoCompleto: 'Os classificados da 2° Fase da Obmep 2019 foram:<br /><br /> <li>Vitor Francisco Pullini (3°E.M) com 13 acertos,<br /><br /> <li>Rafael Honorato Ferreira da Silva (3°E.M) com 12 acertos,<br /><br /> <li>Alan Felipe Souza Bispo (3°E.M) com 10 acertos,<br /><br /> <li>Emily Vitória de Souza da Silva (3°Int) com 10 acertos,<br /> <br /> <li>Lais Abrussi Guarazemini (3°Int) com 10 acertos,<br /><br /> <li>Nicolas Gallo(2°Int) com 10 acertos,<br /><br /> <li>Symon Harley Ferreira (3°Int) com 10 acertos,<br /><br /> <li>Yago Matheus Alves (3°Int) com 10 acertos,<br /><br /> <li>Felipe de Lazana Martini (1°E.M) com 9 acertos,<br /><br /> <li>Roger Santos Barreto (2°Int) com 9 acertos,<br /><br /> <li>Igor Vinicius de Oliveira (3°E.M) com 13 acertos e<br /><br /> <li>Maria Eduarda Batista Meira Leite (2°E.M) com 9 acertos.',
      img: '/assets/img/Obmep.jpg'
    },

    {
      titulo: 'Cuco 2019',
      texto: 'Divulgação Cuco 2019...',
      textoCompleto: 'No dia 6 de junho ocorreu a segunda fase da Cuco 2019, das 8h ás 11h e nesse dia 18 de junho será divulgado o resultado da prova no site da Cuco, então fique ligado.',
      img: '/assets/img/cuco.jpg'
    },

    {
      titulo: 'Teatro Quincas Borba',
      texto: 'Teatro Quincas Borba 18/06...',
      textoCompleto: 'Neste dia 18 de junho no Teatro Municipal vai ocorrer a apresentação do Teatro Quincas Borba, a entrada custa 10 reias como um preço simbolico.',
      img: '/assets/img/quincas.jpg'
    },

    {
      titulo: 'Feriado Prolongado',
      texto: 'Corpus Christi...',
      textoCompleto: 'Neste dia 20/06 será feriado de Corpus Christi e nosso escola irá prolongar o feriado para o dia 21/06, então aproveite o feriado.',
      img: '/assets/img/feriado.jpg'
    },
  ]

}

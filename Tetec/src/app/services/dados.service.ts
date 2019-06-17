import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados = [];

  constructor() { }

  // Método para adicionar dados ao serviço
  public setDados(titulo: string, dados: any) {
    // Verifica se o nome existe e se não está vazio.
    if (titulo && titulo.trim() !== '') {
      // Cria um indice no array com o nome do dado e coloca os dados dentro.
      this.dados[titulo.trim()] = dados;
    }
  }

  // Método para pegar dados do serviço;
  public getDados(titulo: string) {
    // Verifica se o nome não está vazio e se ele existe no array.
    if (titulo.trim() !== '' && this.dados[titulo.trim()]) {
      // Retorna os dados salvos no array.
      return this.dados[titulo.trim()];
    } else {
      // Retorna nulo caso o nome não exista no indice.
      return null;
    }
  }

  // Método para limpar os dados guardados
  public removeDados(todos: boolean, titulo: string) {
    // Caso deseje apagar todos os dados armazenados.
    if (todos) {
      this.dados = null;
      this.dados = [];
    } else if (titulo.trim() !== '') {
      const index = this.dados.indexOf(titulo);
      this.dados.splice(index, 1);
    }
  }

}
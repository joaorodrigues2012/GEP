import {Cronograma} from '../Cronograma';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class SalvarCronograma {
  data_fim: any;
  data_fim_prevista:any;
  data_inicio:any;
  data_inicio_prevista:any;
  descricao: string;
  idUser: number;
  id_projeto: number;
  lider: number;
  nome: string;
  origem: string;

  constructor () {

  }


  conversor( cronograma: Cronograma)
  {
    var newCronograma:SalvarCronograma = new SalvarCronograma();
    newCronograma.data_fim = cronograma.dt_FIM;
    newCronograma.data_fim_prevista = cronograma.dt_FIM_PREV;
    newCronograma.data_inicio = cronograma.dt_INICIO;
    newCronograma.data_inicio_prevista = cronograma.dt_INICIO_PREV;
    newCronograma.descricao = cronograma.descricao;
    newCronograma.id_projeto = 16; //cronograma.projeto; /// buscar o brojeto relacionado a este id
    newCronograma.idUser = 1;
    newCronograma.lider = 1 ;/// cronograma.lider; buscar id de todos o liders
    newCronograma.nome = cronograma.projeto;
    newCronograma.origem = cronograma.origem;
    return newCronograma;
  }

}


import {Cronograma} from '../Cronograma';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class AtualizarCronograma {
  descricao: string;
  dt_FIM: any;
  dt_FIM_PREV:any;
  dt_INICIO:any;
  dt_INICIO_PREV:any;
  id_lider: number;
  id_status: number;
  nome: string;
  origem: string;

  constructor () {

  }
  converter(cronograma: Cronograma){
    var cronogramaOld:AtualizarCronograma = new AtualizarCronograma();
    cronogramaOld.descricao = cronograma.descricao;
    cronogramaOld.dt_FIM = cronograma.dt_FIM;
    cronogramaOld.dt_FIM_PREV = cronograma.dt_FIM_PREV;
    cronogramaOld.dt_INICIO = cronograma.dt_INICIO;
    cronogramaOld.dt_INICIO_PREV = cronograma.dt_INICIO_PREV;
    cronogramaOld.id_lider = 1; // deve listar todos os liders e verificar qual esta relacionado ao id
    cronogramaOld.id_status = 1; // deve listar todos os o status para assim verificar qual esta relacionado com o id
    cronogramaOld.nome = cronograma.nome;
    cronogramaOld.origem = cronograma.origem;

    return cronogramaOld;
  }
}

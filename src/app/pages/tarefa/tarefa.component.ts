import {Component, OnInit} from '@angular/core';
import {Tarefa} from '../../model/tarefa';
import {TarefaService} from '../../service/tarefa.service';
import {Projetos} from '../../model/projetos';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {
  listaTarefas: Tarefa[] = [];

  colunas :any[];
  tarefa :Tarefa;

  displayDialog: boolean;
  editTarefas: any;
  newTarefa: boolean;


  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefaService.listar().subscribe(listaTarefas => {
      this.listaTarefas = listaTarefas;
    });
    this.colunas = [
      {field: 'descricao', header: 'Descricao'},
      {field: 'dias', header: 'Dias'},
      {field: 'dt_INICIO', header: 'Data Inicio'},
      {field: 'dt_FIM', header: 'Data Fim'},
      {field: 'responsavel', header: 'Responsavel'},
      {field: 'status', header: 'Status'}
    ];
  }


  showDialogToAdd() {
    this.editTarefas = {};
    this.newTarefa = true;
    this.displayDialog = true;
  }

  save(){
    let taref = [...this.listaTarefas];

    if (this.newTarefa){
      taref.push(this.editTarefas);
    }
    else {
      taref[this.listaTarefas.indexOf(this.tarefa)] = this.editTarefas;
    }

    this.listaTarefas = taref;
    this.editTarefas = null;
    this.displayDialog = false;
  }

  delete() {

    let index = this.listaTarefas.indexOf(this.tarefa);
    this.listaTarefas = this.listaTarefas.filter((val, i) => i != index);
    this.editTarefas = null;
    this.displayDialog = false;

    // this.cronogramaService.deletarCronograma(this.projetos.id);

  }


  onRowSelect($event: any) {
    this.newTarefa = false;
    this.editTarefas = this.cloneTarefa($event);
    this.displayDialog = true;
  }
  cloneTarefa(c: Tarefa): Tarefa {
    let taref = {};
    for (let prop in c) {
      taref[prop] = c[prop];
    }
    return <Tarefa>taref;
  }
}

import {Component, OnInit} from '@angular/core';
import {Projetos} from '../../model/projetos';
import {ProjetoService} from '../../service/projeto.service';
import {MessageService} from 'primeng/api';
import {Cronograma} from '../../model/Cronograma';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  listaProjetos: Projetos[] = [];

  colunas: any[];
  projeto: Projetos;

  displayDialog: boolean;
  editProjetos: any;
  selectedCronograma: Projetos;
  newProjeto: boolean;
  projetos: Projetos;


  constructor(private projetoService: ProjetoService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.projetoService.ListarProjeto().subscribe(listarprojetos => this.listaProjetos = listarprojetos);

    this.colunas = [
      {field: 'nome', header: 'Projeto'},
      {field: 'sigla', header: 'Sigla'},
      {field: 'descricao', header: 'Descrição'},
      {field: 'objetivo', header: 'Objetivo'}
    ];
  }

  // salvarCronograma(cronograma: any) {
  //   // this.cronogramaService.POST(cronograma).subscribe();
  //   console.log(cronograma, 'salvo');
  // }
  //
  // atualizarCronograma(cronograma: any) {
  //   this.cronogramaService.PUT(cronograma, this.editCronograma.id).subscribe();
  // }

  showDialogToAdd() {
    this.newProjeto = true;
    this.editProjetos = {};
    this.displayDialog = true;
  }

  save() {
    let proje = [...this.listaProjetos];

    console.log(this.newProjeto);

    if (this.newProjeto) {
      proje.push(this.editProjetos);
      // this.salvarCronograma(this.cronogramaSalve.conversor(this.editProjetos));
    } else {
      proje[this.listaProjetos.indexOf(this.projetos)] = this.editProjetos;
      // this.atualizarCronograma(this.cronogramaAtualizar.converter(this.editProjetos));
      console.log(this.projetos, 'aqui');

    }

    this.listaProjetos = proje;
    this.editProjetos = null;
    this.displayDialog = false;
  }

  delete() {

    let index = this.listaProjetos.indexOf(this.projetos);
    this.listaProjetos = this.listaProjetos.filter((val, i) => i != index);
    this.editProjetos = null;
    this.displayDialog = false;

    // this.cronogramaService.deletarCronograma(this.projetos.id);

  }

  onRowSelect(event) {
    this.newProjeto = false;
    this.editProjetos = this.cloneProjeto(event.data);
    console.log(this.editProjetos, 'onrow');
    this.displayDialog = true;
  }

  //// Pega a linha clicada e inputa no editProjeto
  cloneProjeto(c: Projetos): Projetos {
    let proje = {};
    for (let prop in c) {
      proje[prop] = c[prop];
    }
    return <Projetos>proje;
  }

}

import {Component, OnInit} from '@angular/core';
import {Projetos} from '../../model/projetos';
import {ProjetoService} from '../../service/projeto.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  listaProjetos: Projetos[] = [];

  colunas: any[];
  projeto: Projetos;
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
}

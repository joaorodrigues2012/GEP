import {Component, OnInit} from '@angular/core';
import {Cronograma} from '../../model/Cronograma';
import {CronogramaService} from '../../service/cronograma.service';
import {SalvarCronograma} from '../../model/cronograma/salvar-cronograma';
import {AtualizarCronograma} from '../../model/cronograma/atualizar-cronograma';
import {ProjetoService} from '../../service/projeto.service';
import {Projetos} from '../../model/projetos';



@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss'],

})


export class CronogramaComponent implements OnInit {

  listaCronograma: Cronograma[] = [];

  displayDialog: boolean;
  editCronograma: any;
  selectedCronograma: Cronograma;
  newCronograma: boolean;
  cronograma: Cronograma;

  /*  Dropdown projeto*/
  projeto: Projetos[] = [];
  selectedProjetos: Projetos;
  //
  /* Dropdown status*/
  listarStatus: any[] =[];
  selectedStatus: any;
  //

  colunas: any[] = [
    {field: 'projeto', header: 'PROJETO'},
    {field: 'descricao', header: 'DESCRICAO'},
    {field: 'origem', header: 'ORIGEM'},
    {field: 'lider', header: 'LIDER'},
    {field: 'status', header: 'STATUS'},
    {field: 'dt_INICIO_PREV', header: 'DATA INICIO PREVISTA'},
    {field: 'dt_FIM_PREV', header: 'DATA FIM PREVISTA'},
    {field: 'dias_PREV', header: 'DIAS PREVISTOS'},
    {field: 'dt_INICIO', header: 'DATA INICIO'},
    {field: 'dt_FIM', header: 'DATA FIM'},
  ];

  constructor(private cronogramaService: CronogramaService, private cronogramaSalve: SalvarCronograma, private cronogramaAtualizar: AtualizarCronograma, private projetoSV: ProjetoService) {
    this.projetoSV.ListarProjeto().subscribe(listaProjetos => this.projeto = listaProjetos);
    this.projetoSV.listarStatus().subscribe(listarStatus => this.listarStatus = listarStatus );
  }

  salvarCronograma(cronograma: any) {
    this.cronogramaService.POST(cronograma).subscribe();
    console.log(cronograma, 'salvo');
  }

  atualizarCronograma(cronograma: any) {
    this.cronogramaService.PUT(cronograma, this.editCronograma.id).subscribe();
  }

  ngOnInit() {

    this.cronogramaService.GET().subscribe(listaCronograma => {
      this.listaCronograma = listaCronograma;
    });

  }

  showDialogToAdd() {
    this.newCronograma = true;
    this.editCronograma = {};
    this.displayDialog = true;
  }

  save() {
    let crono = [...this.listaCronograma];

    if (this.newCronograma) {
      crono.push(this.editCronograma);
      this.salvarCronograma(this.cronogramaSalve.conversor(this.editCronograma));
    } else {
      crono[this.listaCronograma.indexOf(this.cronograma)] = this.editCronograma;
      this.atualizarCronograma(this.cronogramaAtualizar.converter(this.editCronograma));
    }

    this.listaCronograma = crono;
    this.editCronograma = null;
    this.displayDialog = false;
  }

  delete() {

    let index = this.listaCronograma.indexOf(this.cronograma);
    this.listaCronograma = this.listaCronograma.filter((val, i) => i != index);
    this.editCronograma = null;
    this.displayDialog = false;

    this.cronogramaService.deletarCronograma(this.cronograma.id);

  }

  onRowSelect(event) {
    this.newCronograma = false;
    this.editCronograma = this.cloneCronograma(event.data);
    this.displayDialog = true;
  }

  cloneCronograma(c: Cronograma): Cronograma {
    let crono = {};
    for (let prop in c) {
      crono[prop] = c[prop];
    }
    return <Cronograma>crono;
  }


}

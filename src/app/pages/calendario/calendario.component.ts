import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {TarefaService} from '../../service/tarefa.service';
import {ChartModule} from 'primeng/chart';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor(private _service: TarefaService) {
  }

  options: any;
  events: Object;
  data: any;
  data2: any;


  ngOnInit() {

      this.data = {
        labels: ['Concluídas', 'Em Andamento', 'Atrasadas'],
        datasets: [
          {
            data: [30, 50, 30],
            backgroundColor: [
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ],
            hoverBackgroundColor: [
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
      };

      this.data2 = {
        labels: ['Concluídos', 'Em Andamento', 'Atrasados'],
        datasets: [
          {
            data: [40, 50, 10],
            backgroundColor: [
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ],
            hoverBackgroundColor: [
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
      };

    this._service.buscaDatas().subscribe(x => this.events = x);

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2019-10-17',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    };

  }
}

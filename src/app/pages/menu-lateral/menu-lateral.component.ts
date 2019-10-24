import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {ProjetoService} from '../../service/projeto.service';
import {MenuService} from '../../service/menu.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  items: MenuItem[];

  constructor(private _service: MenuService, private messageService: MessageService) {
  }


  ngOnInit() {
    this._service.ListarMenu().subscribe(x => this.items = x);
  }

}

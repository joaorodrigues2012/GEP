import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StyleDefaultComponent} from './pages/style-default/style-default.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {TabMenuModule} from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {MenuModule} from 'primeng/menu';
import {CalendarioComponent} from './pages/calendario/calendario.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {CronogramaComponent} from './pages/cronograma/cronograma.component';
import {ProjetosComponent} from './pages/projetos/projetos.component';
import {TarefaComponent} from './pages/tarefa/tarefa.component';
import {MenuLateralComponent} from './pages/menu-lateral/menu-lateral.component';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmDialogModule, DialogModule, InputTextModule, PaginatorModule, ToolbarModule} from 'primeng/primeng';
import {ButtonModule, MessageService, PanelMenuModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {RadioButtonModule} from 'primeng/radiobutton';
// import { SalvarCronogramaComponent } from './model/cronograma/salvar-cronograma/salvar-cronograma.component';

import {ToastModule} from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    StyleDefaultComponent,
    NavbarComponent,
    CalendarioComponent,
    HomeComponent,
    LoginComponent,
    CronogramaComponent,
    ProjetosComponent,
    TarefaComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabMenuModule,
    AccordionModule,
    MenuModule,
    HttpClientModule,
    ToolbarModule,
    TableModule,
    FullCalendarModule,
    FullCalendarModule,
    FullCalendarModule,
    MenuModule,
    HttpClientModule,
    ConfirmDialogModule,
    RadioButtonModule,
    InputTextModule,
    DialogModule,
    PaginatorModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    FontAwesomeModule,
    PanelMenuModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

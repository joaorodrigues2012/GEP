import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Projetos} from '../model/projetos';

const API = 'https://gep-api.herokuapp.com/Projeto';

@Injectable({ providedIn : 'root'})
export class ProjetoService {

  constructor( private http: HttpClient) {}

  ListarProjeto() {
    return this.http.get<Projetos[]>(API);
  }
  listarStatus(){
    let API = 'https://gep-api.herokuapp.com/Status/';
    return this.http.get<any[]>(API);
  }

}

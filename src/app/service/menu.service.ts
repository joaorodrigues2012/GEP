import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../model/Menu';

const apiUrl = 'https://gep-api.herokuapp.com/Menu';
// const apiUrl = 'http://localhost:8881/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient) {}

  ListarMenu() {
    return this.http.get<Menu[]>(apiUrl);
  }
}

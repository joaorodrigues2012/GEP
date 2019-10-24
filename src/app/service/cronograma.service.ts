import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cronograma} from '../model/Cronograma';
import {map, take} from 'rxjs/operators';
import {AtualizarCronograma} from '../model/cronograma/atualizar-cronograma';

const API = 'https://gep-api.herokuapp.com/Cronograma';

@Injectable({providedIn: 'root'})
export class CronogramaService {
  constructor(private http: HttpClient) {
  }

  GET() {
    return this.http.get<Cronograma[]>(API);

  }

  POST(cronograma: any) {
    return this.http.post<Cronograma>(API,  cronograma).pipe(take(1));
  }
  PUT(cronograma: AtualizarCronograma, id: number){
    return this.http.put<Cronograma>(`${API}/${id}`, cronograma).pipe(take(1));
  }

  deletarCronograma(id){
    console.log(id, "aqui");
    return this.http.delete(`${API}/${id}`).pipe(take(1)).subscribe();
  }
}

import { HttpClient } from '@angular/common/http'
import { first, Observable, tap } from 'rxjs';

export class GenericService<T> {
  
  constructor(protected httpClient:HttpClient, private API_URL: string) { }

  obj!: any

  listAll():Observable<T[]> { 
    return this.httpClient.get<T[]>(this.API_URL)
          .pipe(
            first(),
            tap(p => console.log(p))
          )
  }

  getOne(id:number):Observable<T> { 
    return this.httpClient.get<T>(this.API_URL+'/'+id.toString)
  }
  
  getOneByCpf(cpf:string):Observable<T> { 
    return this.httpClient.get<T>(this.API_URL + '?q=cpf::' + cpf.toString())
  }

  getByName(name:string):Observable<T[]> { 
    return this.httpClient.get<T[]>(this.API_URL + '?q=nome:>' + name)
  }

  insert(p:T) {
    return this.httpClient.post(this.API_URL, p);
  }

  update(id:number, p:T): Observable<T> {
    return this.httpClient.put<T>(this.API_URL + '/' + id,JSON.stringify(p))
   }
  
  delete(id:number){
    return this.httpClient.delete(this.API_URL+"/"+id.toString());
  }

}
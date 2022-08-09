import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first, Observable, tap } from 'rxjs';
import { Persons } from '../model/persons';
import {GenericService} from '../../../services/generic-services'

@Injectable({
  providedIn: 'root'
})


export class PersonsService extends GenericService<Persons> {

  
  constructor(protected http: HttpClient) { 
    super(http, 'http://sead-fpg-dev:8080/PagRN-0.0.1-SNAPSHOT/pessoasfisicas');
  }

}


 
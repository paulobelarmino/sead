import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Persons } from '../model/persons';
import { PersonsService } from '../service/persons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pessoas$: Observable<Persons[]>
  pessoas_array: Persons[] = [];

  displayedColumns = ['nome', 'email', 'cpf', 'genero', 'dataNascimento', 'acao']

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personsService: PersonsService
  ) {
    this.pessoas$ = personsService.listAll()
    .pipe(
      catchError(error => {
        console.log(error);
        this.onError(error.message, "", 1000);
        return of ([])
      })
    )
    personsService.listAll().subscribe(p => this.pessoas_array = p)
   }

  ngOnInit(): void {
  }
  onError(msg:string, action:string, duration:number){
    this.snackBar.open(msg, action, {
      duration:duration
    })
  }

  onAdd(){
    this.router.navigate(['servidores/cadastrar'], {relativeTo: this.activatedRoute})
  }

  onDelete(id:number){
    this.personsService.delete(id)
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => this.pessoas$ = this.personsService.listAll() 
    }); 
  }

  testeId(id:number){
    console.log(id)
  }

  onEdit(id:number){
    this.router.navigate(['pessoas/editar/'+id.toString()], {})
  }

}

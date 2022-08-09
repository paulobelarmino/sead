import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, catchError, of, EMPTY } from "rxjs";
import { Persons } from "../model/persons";
import { PersonsService } from "../service/persons.service";

@Component({
    selector: 'app-homeComponent',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],

})

export class homeComponent implements OnInit {

    form: FormGroup;
    pessoas$: Observable<Persons[]> =  EMPTY;
    pessoas_array!: Persons[];



    displayedColumns = ['nome', 'email', 'cpf', 'genero', 'nascimento', 'acao']

    constructor(
        private snackBar: MatSnackBar,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private personsService: PersonsService,
        private formBuilder: FormBuilder,
    ) {

        this.form = this.formBuilder.group({
            cpf: [null]
        })

        personsService.listAll()
        .subscribe({
            next:
            (p: any)=>{
                this.pessoas$ = of(p.content);
            }
        });       
    }

    ngOnInit(): void {
    }
    onError(msg: string, action: string, duration: number) {
        this.snackBar.open(msg, action, {
            duration: duration
        })
    }

    onAdd() {
        this.router.navigate(['servidores/cadastrar'], { relativeTo: this.activatedRoute })
    }

    onDelete(id: number) {
        this.personsService.delete(id)
            .subscribe({
                next: (v) => console.log(v),
                error: (e) => console.log(e),
                complete: () => this.pessoas$ = this.personsService.listAll()
            });
    }

    testeId(id: number) {
        console.log(id)
    }

    onEdit(id: number) {
        this.router.navigate(['pessoas/editar/' + id.toString()], {})
    }

    pesqCpf() {
        if(this.form.value.cpf){

            this.personsService.getOneByCpf(this.form.value.cpf).subscribe({
                next:
                (p : any) => {
                this.pessoas_array = []
                this.pessoas_array = p.content
                this.pessoas$ = of(this.pessoas_array); 
            }
    })
    } else {
        this.personsService.listAll()
        .subscribe({
            next:
            (p : any) => {
                this.pessoas_array = p.content
                this.pessoas$ = of(this.pessoas_array);
            }
        })

    }

    }

}

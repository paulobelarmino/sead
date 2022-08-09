import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonsService } from '../service/persons.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup

  constructor(
    private personsService: PersonsService,
    private formBuilder:FormBuilder,
    private snackBar:MatSnackBar,
    private location:Location,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      nome:[null],
      email: [null],
      genero: [null],
      cpf: [null],
      dataNascimento: [null],
      tipoSanguineo: [null], 
      nomeMae: [null],
      nomePai: [null],
      nomeSocial: [null],
      estadoCivil: [null],
      nacionalidade: [null]

      
  })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.router.url.toString())
    if (this.router.url.toString() == '/pessoas/cadastrar')
    {
      
      this.personsService.insert(this.form.value).subscribe({
        next: (v) => this.onSucess(),
        error: (e) => this.snackBar.open(e, "", {duration:1000}),
        complete: () => console.info('complete')
      })
    }
  }
  onSucess(){
    this.snackBar.open("Cadastro realizado com sucesso", "", {duration:1000})
    this.location.back();
  }
  onCancel(){
    this.location.back();
  }
}

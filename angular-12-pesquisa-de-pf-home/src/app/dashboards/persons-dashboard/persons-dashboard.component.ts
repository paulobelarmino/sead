import { Component, OnInit } from '@angular/core';
interface Cards {
  icon_card: string;
  titulo_card: string;
  descricao_card: string;
  link_card:string;
}
@Component({
  selector: 'app-persons-dashboard',
  templateUrl: './persons-dashboard.component.html',
  styleUrls: ['./persons-dashboard.component.scss']
})
export class PersonsDashboardComponent implements OnInit {
  cards: Array<Cards> = [];
  constructor() { }

  ngOnInit(): void {
  

  this.cards = [
    {
      icon_card: 'assignment_ind',
      titulo_card: "CADASTRAR PESSOA FÍSICA",
      descricao_card: "Gerencie informações de servidores.",
      link_card: "../../pessoas/cadastrar",       
    },
    {
      icon_card: 'assignment_ind',
      titulo_card: "LISTAR PESSOAS FÍSICAS",
      descricao_card: "Gerencie informações de servidores.",
      link_card: "../../pessoas/listar",       

    }
    
   
  ];
}
}

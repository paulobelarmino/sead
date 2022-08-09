import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
interface Cards {
  icon_card: string;
  titulo_card: string;
  descricao_card: string;
  link_card:string;
}



@Component({
  selector: 'app-main-admin-dashboard',
  templateUrl: './main-admin-dashboard.component.html',
  styleUrls: ['./main-admin-dashboard.component.scss']
})
export class MainAdminDashboardComponent implements OnInit {
  
  
  
  cards: Array<Cards> = [];
  
  constructor(private router: Router) { 

    
  }

  ngOnInit(): void {
    

    document.addEventListener("keydown", e=> { 
      if(e.key === "1" && e.altKey){
        this.router.navigateByUrl('dashboard/pessoas');
      }
    });



    this.cards = [
      {
        icon_card: 'assignment_ind',
        titulo_card: "PESSOAS FÍSICAS",
        descricao_card: "Gerencie informações de servidores.",
        link_card: "pessoas",       
      },
      {
        icon_card: 'assignment_ind',
        titulo_card: "SERVIDORES",
        descricao_card: "Gerencie informações de servidores.",
        link_card: "",       

      },
      {
        icon_card: 'event_busy',
        titulo_card: 'FALTAS',
        descricao_card: 'Administre os dados de faltas de servidores.',
        link_card: "",       

      },
      {
        icon_card: 'article',
        titulo_card: 'LICENÇAS',
        descricao_card: 'Gerencie informações de licenças de funcionários.',
        link_card: "",       

      },
      {
        icon_card: 'content_paste_go',
        titulo_card: 'AFASTAMENTO',
        descricao_card: 'Gerencie informações de afastamento de servidores.',
        link_card: "",       

      },
      {
        icon_card: 'content_paste_go',
        titulo_card: 'AFASTAMENTO',
        descricao_card: 'Gerencie informações de afastamento de servidores.',
        link_card: "",       

      },
     
    ];
  }
}

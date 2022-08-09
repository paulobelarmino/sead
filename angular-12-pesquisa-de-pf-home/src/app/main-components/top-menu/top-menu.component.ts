import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("contrast") == "ativado"){
      const bodyContrast = document.querySelector('body');
      bodyContrast?.classList.add('contrast');
    }
  }
  showFiller = false;


  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  toggleContrast(){
    const bodyContrast = document.querySelector('body');
    if(bodyContrast?.classList.contains("contrast")){
      bodyContrast?.classList.remove('contrast');
      localStorage.setItem("contrast", "desativado");
    }else{
      bodyContrast?.classList.add('contrast');
      localStorage.setItem("contrast", "ativado");
    }

    
  }

  

}

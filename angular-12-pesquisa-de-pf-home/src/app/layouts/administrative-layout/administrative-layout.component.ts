import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrative-layout',
  templateUrl: './administrative-layout.component.html',
  styleUrls: ['./administrative-layout.component.scss']
})
export class AdministrativeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}

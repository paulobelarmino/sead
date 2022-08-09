import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminDashboardComponent } from './main-admin-dashboard.component';

describe('MainAdminDashboardComponent', () => {
  let component: MainAdminDashboardComponent;
  let fixture: ComponentFixture<MainAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

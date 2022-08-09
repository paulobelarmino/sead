import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDashboardComponent } from './persons-dashboard.component';

describe('PersonsDashboardComponent', () => {
  let component: PersonsDashboardComponent;
  let fixture: ComponentFixture<PersonsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

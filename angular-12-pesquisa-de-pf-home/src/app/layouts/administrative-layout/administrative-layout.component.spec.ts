import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeLayoutComponent } from './administrative-layout.component';

describe('AdministrativeLayoutComponent', () => {
  let component: AdministrativeLayoutComponent;
  let fixture: ComponentFixture<AdministrativeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPacientesComponent } from './listadoPacientes.component';

describe('ListadoPacientesComponent', () => {
  let component: ListadoPacientesComponent;
  let fixture: ComponentFixture<ListadoPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

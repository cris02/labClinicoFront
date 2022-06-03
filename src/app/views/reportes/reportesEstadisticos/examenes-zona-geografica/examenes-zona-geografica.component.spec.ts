import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesZonaGeograficaComponent } from './examenes-zona-geografica.component';

describe('ExamenesZonaGeograficaComponent', () => {
  let component: ExamenesZonaGeograficaComponent;
  let fixture: ComponentFixture<ExamenesZonaGeograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesZonaGeograficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesZonaGeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

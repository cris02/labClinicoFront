import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExamenHemComponent } from './detalleExamenHem.component';

describe('DetalleExamenHemComponent', () => {
  let component: DetalleExamenHemComponent;
  let fixture: ComponentFixture<DetalleExamenHemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExamenHemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExamenHemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

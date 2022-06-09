import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExamenCopComponent } from './detalleExamenCop.component';

describe('DetalleExamenComponent', () => {
  let component: DetalleExamenCopComponent;
  let fixture: ComponentFixture<DetalleExamenCopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExamenCopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExamenCopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

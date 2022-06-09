import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExamenQuiComponent } from './detalleExamenQui.component';

describe('DetalleExamenQuiComponent', () => {
  let component: DetalleExamenQuiComponent;
  let fixture: ComponentFixture<DetalleExamenQuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExamenQuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExamenQuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

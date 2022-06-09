import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExamenUriComponent } from './detalleExamenUri.component';

describe('DetalleExamenUriComponent', () => {
  let component: DetalleExamenUriComponent;
  let fixture: ComponentFixture<DetalleExamenUriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExamenUriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExamenUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjComponent } from './ej.component';

describe('EjComponent', () => {
  let component: EjComponent;
  let fixture: ComponentFixture<EjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

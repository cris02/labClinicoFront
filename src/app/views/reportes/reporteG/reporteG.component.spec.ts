import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteGComponent } from './reporteG.component';

describe('ReporteGComponent', () => {
  let component: ReporteGComponent;
  let fixture: ComponentFixture<ReporteGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

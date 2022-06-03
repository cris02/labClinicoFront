import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEstadisticosComponent } from './reportesEstadisticos.component';

describe('BaseComponent', () => {
  let component: ReportesEstadisticosComponent;
  let fixture: ComponentFixture<ReportesEstadisticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesEstadisticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesEstadisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

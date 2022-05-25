import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesGeneralesComponent } from './reportesGenerales.component';

describe('EjComponent', () => {
  let component: ReportesGeneralesComponent;
  let fixture: ComponentFixture<ReportesGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

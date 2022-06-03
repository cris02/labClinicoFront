import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesPorFechaComponent } from './examenes-por-fecha.component';

describe('ExamenesPorFechaComponent', () => {
  let component: ExamenesPorFechaComponent;
  let fixture: ComponentFixture<ExamenesPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesPorFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

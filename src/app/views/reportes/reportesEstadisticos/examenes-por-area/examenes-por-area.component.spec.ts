import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesPorAreaComponent } from './examenes-por-area.component';

describe('ExamenesPorAreaComponent', () => {
  let component: ExamenesPorAreaComponent;
  let fixture: ComponentFixture<ExamenesPorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesPorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesPorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

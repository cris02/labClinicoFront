import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEpidemiologicosComponent } from './reportesEpidemiologicos.component';

describe('ReportesEpidemiologicosComponent', () => {
  let component: ReportesEpidemiologicosComponent;
  let fixture: ComponentFixture<ReportesEpidemiologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesEpidemiologicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesEpidemiologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

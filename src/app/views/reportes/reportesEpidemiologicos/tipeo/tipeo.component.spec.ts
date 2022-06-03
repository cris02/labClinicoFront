import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipeoComponent } from './tipeo.component';

describe('TipeoComponent', () => {
  let component: TipeoComponent;
  let fixture: ComponentFixture<TipeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeExamenesComponent } from './tipos-de-examenes.component';

describe('TiposDeExamenesComponent', () => {
  let component: TiposDeExamenesComponent;
  let fixture: ComponentFixture<TiposDeExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDeExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

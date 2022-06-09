import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisFormUpdateComponent } from './pais-form-update.component';

describe('PaisFormUpdateComponent', () => {
  let component: PaisFormUpdateComponent;
  let fixture: ComponentFixture<PaisFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

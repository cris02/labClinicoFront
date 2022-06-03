import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigliceridosComponent } from './trigliceridos.component';

describe('TrigliceridosComponent', () => {
  let component: TrigliceridosComponent;
  let fixture: ComponentFixture<TrigliceridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrigliceridosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrigliceridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

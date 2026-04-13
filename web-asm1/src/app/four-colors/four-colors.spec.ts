import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColors } from './four-colors';

describe('FourColors', () => {
  let component: FourColors;
  let fixture: ComponentFixture<FourColors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourColors],
    }).compileComponents();

    fixture = TestBed.createComponent(FourColors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fivesix } from './fivesix';

describe('Fivesix', () => {
  let component: Fivesix;
  let fixture: ComponentFixture<Fivesix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fivesix],
    }).compileComponents();

    fixture = TestBed.createComponent(Fivesix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

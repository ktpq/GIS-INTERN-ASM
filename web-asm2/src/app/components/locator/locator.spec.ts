import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locator } from './locator';

describe('Locator', () => {
  let component: Locator;
  let fixture: ComponentFixture<Locator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locator],
    }).compileComponents();

    fixture = TestBed.createComponent(Locator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

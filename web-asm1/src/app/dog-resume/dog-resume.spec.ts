import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogResume } from './dog-resume';

describe('DogResume', () => {
  let component: DogResume;
  let fixture: ComponentFixture<DogResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogResume],
    }).compileComponents();

    fixture = TestBed.createComponent(DogResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

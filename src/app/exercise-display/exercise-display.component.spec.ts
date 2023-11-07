import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDisplayComponent } from './exercise-display.component';

describe('ExerciseDisplayComponent', () => {
  let component: ExerciseDisplayComponent;
  let fixture: ComponentFixture<ExerciseDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseDisplayComponent]
    });
    fixture = TestBed.createComponent(ExerciseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

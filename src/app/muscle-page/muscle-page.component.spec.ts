import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusclePageComponent } from './muscle-page.component';

describe('MusclePageComponent', () => {
  let component: MusclePageComponent;
  let fixture: ComponentFixture<MusclePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusclePageComponent]
    });
    fixture = TestBed.createComponent(MusclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

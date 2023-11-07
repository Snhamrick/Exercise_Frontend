import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-exercise-display',
  templateUrl: './exercise-display.component.html',
  styleUrls: ['./exercise-display.component.scss']
})
export class ExerciseDisplayComponent implements OnInit {

  public solidStar = faStar;
  public emptyStar = emptyStar;

  public exerciseStars: any[];
  public totalStars = Array(5);

  @Input('exercise') exercise: any;

  constructor() {
    this.exerciseStars = [];
  }

  ngOnInit(): void {
      this.generateStars();
  }

  public generateStars() {
    for (let i = 0; i < this.exercise.difficulty; i++) {
      this.exerciseStars.push('');
      this.totalStars.pop();
    }
  }

}

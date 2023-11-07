import { Component, OnInit } from '@angular/core';
import { Exercise } from '../models/exercise';
import { AppService } from '../services/app.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss']
})
export class ExerciseDetailsComponent implements OnInit {

  public exercise: any;
  public solidStar = faStar;
  public emptyStar = emptyStar;

  public exerciseStars: any[];
  public totalStars = Array(5);

  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer
  ) {
    this.exerciseStars = [];
  }

  ngOnInit(): void {
      this.appService.currentExercise.subscribe((exercise: Exercise) => {
        if (exercise.name != "") {
          this.exercise = exercise;
        } else {
          this.exercise = this.getExercise();
        }
        this.cleanUrl(this.exercise);
      });
      this.generateStars();
      this.saveExercise(this.exercise);
  }

  public generateStars() {
    for (let i = 0; i < this.exercise.difficulty; i++) {
      this.exerciseStars.push('');
      this.totalStars.pop();
    }
  }

  private saveExercise(exercise: Exercise) {
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }

  private getExercise() {
   const storedExercise = JSON.parse(localStorage.getItem("exercise") || "{}");
   this.cleanUrl(storedExercise);
   return storedExercise;
  }

  private cleanUrl(exercise: Exercise) {
      exercise.safeVidLink = this.sanitizer.bypassSecurityTrustResourceUrl(exercise.vidLink);
    }

}

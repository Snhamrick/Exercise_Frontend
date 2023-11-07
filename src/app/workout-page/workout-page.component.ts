import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.scss']
})
export class WorkoutPageComponent implements OnInit {

  public workoutForm: FormGroup;
  public selected: any[];
  public formError = '';
  public exerciseList: any[];
  public menuOpen: boolean;


  public muscleList = [
    "Abdominals",
    "Biceps Brachii",
    "Calves",
    "Cardio",
    "Deltoids",
    "Forearms",
    "Hamstrings",
    "Latissimus Dorsi",
    "Pectoralis Major",
    "Quadriceps",
    "Trapezius",
    "Triceps Brachii"
  ];

  constructor(
    private exerciseService: ExerciseService,
    private appService: AppService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.workoutForm = new FormGroup({
      muscles: new FormControl(null)
    });
    this.selected = [];
    this.exerciseList = [];
    this.menuOpen = false;
  }

  ngOnInit(): void {
      this.exerciseList = JSON.parse(localStorage.getItem('workout') || '{}');
      if (!this.exerciseList) {
        this.exerciseList = [];
      }
      this.cleanUrl(this.exerciseList);
  }

  updateSelection(event: any, muscle: string) {
    if (event.target.checked) {
      this.selected.push(muscle);
    } else if (!event.target.checked) {
      for (let i = 0; i < this.selected.length; ++i) {
        if (this.selected[i] === muscle) {
          this.selected.splice(i, 1);
        }
      }
    }
  }

  public generateWorkout() {
    if (this.selected.length < 1 || this.selected.length > 5) {
      this.formError = "You must select between 1 and 5 muscles"
    } else {
      this.formError = "";
      this.exerciseService.getWorkout(this.selected).subscribe((exerciseList: Exercise[]) => {
        this.cleanUrl(exerciseList);
        this.exerciseList = exerciseList;
        localStorage.setItem('workout', JSON.stringify(this.exerciseList));
      });
    }
  }

  public viewDetails(exercise: Exercise) {
      this.appService.changeExercise(exercise);
      this.router.navigateByUrl('exercise-details');
  }

  public clearWorkout() {
    localStorage.removeItem('workout');
    location.reload();
  }

  private cleanUrl(exerciseList: Exercise[]) {
    for (let i=0; i < exerciseList.length; i++) {
      exerciseList[i].safeVidLink = this.sanitizer.bypassSecurityTrustResourceUrl(exerciseList[i].vidLink);
    }
  }

  public updateView(openMenu: boolean) {
    this.menuOpen = openMenu;

  }
}

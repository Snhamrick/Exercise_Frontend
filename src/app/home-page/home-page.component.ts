import { Component } from '@angular/core';
import { Exercise } from '../models/exercise';
import { ExerciseService } from '../services/exercise.service';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {

  public muscleSelected: boolean;
  public exerciseList: Exercise[];
  public submitted = false;
  public search = '';
  public formError = '';

  constructor(
    private exerciseService: ExerciseService,
    private router: Router,
    private appService: AppService,
    private sanitizer: DomSanitizer
  ) {
    this.exerciseList = [];
    this.muscleSelected = false;
  }

  public searchExercise() {
    this.submitted = true;
    this.exerciseService.searchExercise(this.search).subscribe((exercise: Exercise[]) => {
      if (exercise.length > 0) {
        this.cleanUrl(exercise[0]);
        this.appService.changeExercise(exercise[0]);
        this.router.navigateByUrl('exercise-details');
      } else {
        this.formError = "No Exercises of that name were found"
      }
    });
  }


  private cleanUrl(exercise: Exercise) {
    exercise.safeVidLink = this.sanitizer.bypassSecurityTrustResourceUrl(exercise.vidLink);
  }

}

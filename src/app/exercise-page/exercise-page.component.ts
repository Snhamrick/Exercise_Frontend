import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit {

  public exerciseList: any;

  constructor(
    private exerciseService: ExerciseService,
    private sanitizer: DomSanitizer,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllExercises();
  }


  private getAllExercises() {
     this.exerciseService.getAllExercises().subscribe((exerciseList: Exercise[]) => {
      for (let i=0; i < exerciseList.length; i++) {
        exerciseList[i].safeVidLink = this.sanitizer.bypassSecurityTrustResourceUrl(exerciseList[i].vidLink);
      }
      this.exerciseList = exerciseList;
     });
  }

  public viewDetails(exercise: Exercise) {
    this.appService.changeExercise(exercise);
    this.router.navigateByUrl('exercise-details');
  }

}

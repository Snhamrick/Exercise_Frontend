import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../services/app.service';
import { Exercise } from '../models/exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscle-page',
  templateUrl: './muscle-page.component.html',
  styleUrls: ['./muscle-page.component.scss']
})
export class MusclePageComponent implements OnInit, OnDestroy{

  public exerciseList: Exercise[]
  public empty: Exercise[];

  constructor(
    private appService: AppService,
    private router: Router
  ) {
    this.exerciseList = [];
    this.empty = []
  }

  ngOnInit(): void {
    this.appService.currentExerciseList.subscribe((exercise: Exercise[])=> {
      console.log(exercise);
      if (exercise.length === 0) {
        this.exerciseList = this.getList();
      } else {
        this.exerciseList = exercise;
      }
      this.saveList(this.exerciseList);
    });
  }

  ngOnDestroy(): void {
      this.appService.changeExerciseList(this.empty);
  }

  public viewDetails(exercise: Exercise) {
    this.appService.changeExercise(exercise);
    this.router.navigateByUrl('exercise-details');
  }

  private saveList(exerciseList: Exercise[]) {
    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
  }

  private getList() {
    return JSON.parse(localStorage.getItem("exerciseList") || "{}");
  }

}

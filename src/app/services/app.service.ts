import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private exerciseSource = new BehaviorSubject<Exercise>(
    {name:'', difficulty:0, tgtMuscle:'', secMuscle:'', description:'', variations: "", vidLink:'', safeVidLink:''});
  currentExercise = this.exerciseSource.asObservable();

  private exerciseListSource = new BehaviorSubject<Exercise[]>([]);
  currentExerciseList = this.exerciseListSource.asObservable();

  public changeExerciseList(exerciseList: Exercise[]) {
    this.exerciseListSource.next(exerciseList);
  }

  public changeExercise(exercise: Exercise) {
    this.exerciseSource.next(exercise);
  }


}

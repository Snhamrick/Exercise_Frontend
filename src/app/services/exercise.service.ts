import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private http: HttpClient,
  ) { }

  private exerciseApi = 'http://localhost:3000/api'


  public getAllExercises(): Observable<any> {
    return this.http.get<any>(`${this.exerciseApi}/exercises`);
  }

  public getMuscleExercises(muscle: string): Observable<any> {
    return this.http.get<any>(`${this.exerciseApi}/muscle/${muscle}`);
  }

  public searchExercise(name: string): Observable<any> {
    return this.http.get<any>(`${this.exerciseApi}/exercise/${name}`);
  }

  public getWorkout(muscleList: string[]): Observable<any> {
    return this.http.get<any>(`${this.exerciseApi}/workouts/${muscleList}`)
  }
}

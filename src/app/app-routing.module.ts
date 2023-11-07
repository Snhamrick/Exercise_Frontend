import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExercisePageComponent } from './exercise-page/exercise-page.component';
import { MusclePageComponent } from './muscle-page/muscle-page.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'exercises', component: ExercisePageComponent},
  {path: 'muscle', component: MusclePageComponent},
  {path: 'exercise-details', component: ExerciseDetailsComponent},
  {path: 'workouts', component: WorkoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

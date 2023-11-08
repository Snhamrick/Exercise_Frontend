import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MuscleMapComponent } from './muscle-map/muscle-map.component';
import { ExercisePageComponent } from './exercise-page/exercise-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseDisplayComponent } from './exercise-display/exercise-display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { MusclePageComponent } from './muscle-page/muscle-page.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MuscleMapComponent,
    ExercisePageComponent,
    ExerciseDisplayComponent,
    ExerciseDetailsComponent,
    MusclePageComponent,
    WorkoutPageComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/exercise';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
declare function imageMapResize(): void;

@Component({
  selector: 'app-muscle-map',
  templateUrl: './muscle-map.component.html',
  styleUrls: ['./muscle-map.component.scss']
})
export class MuscleMapComponent {

  constructor(
    private exerciseService: ExerciseService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  public exercise(muscle: string) {
    this.exerciseService.getMuscleExercises(muscle).subscribe((exerciseList: Exercise[]) => {
      for (let i=0; i < exerciseList.length; i++) {
        exerciseList[i].safeVidLink = this.sanitizer.bypassSecurityTrustResourceUrl(exerciseList[i].vidLink);
      }
      this.appService.changeExerciseList(exerciseList);
    });
    this.router.navigateByUrl('muscle');
  }

  public imageResize() {
    imageMapResize();
  }

}

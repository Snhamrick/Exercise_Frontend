import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  //Variables for icons and menu function
  public faBars = faBars;
  public faDumbbell = faDumbbell;
  public menuOpen: any;
  public menuClicks = 0;

  //output toggled menu
  @Output() onOpen = new EventEmitter<any>();
  constructor( ) {}

  //function to output whether menu is toggled open
  public openMenu() {
    this.menuClicks++;
    if (this.menuClicks % 2 === 0) {
      this.onOpen.emit(false);
    } else {
      this.onOpen.emit(true);
    }
  }

}

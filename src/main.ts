import { Component, Directive, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { CustomIconComponent } from './components/custom-icon.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Directive({
  selector: 'main',
  standalone: true
})
class ChangeMainSection {
  @HostListener('wheel', ['$event'])
  handleEvent(e: WheelEvent) {
      const scrollDirection = e.deltaY > 0 ? 'up' : 'down'
      console.log('going ' + scrollDirection)
  }
}

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './main.html',
  imports: [CommonModule, CustomIconComponent, ChangeMainSection],
})
class App {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}

bootstrapApplication(App);

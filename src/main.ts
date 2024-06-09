import { Component, Directive, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { CustomIconComponent } from './components/custom-icon.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './main.html',
  imports: [CommonModule, CustomIconComponent],
})
class App {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}

bootstrapApplication(App);

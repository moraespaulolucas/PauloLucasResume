import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PersonalInfo } from './modules';
import { CustomIconComponent } from './components/custom-icon.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './main.html',
  imports: [CommonModule, CustomIconComponent]
})
export class App implements OnInit {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
  }
  
  personalInfo !: PersonalInfo
  
  ngOnInit(): void {
    this.personalInfo = {
      name: "Paulo",
      fullName: "Paulo Moraes",
      title: "Desenvolvedor Front-End"
    }
  }
}

bootstrapApplication(App);

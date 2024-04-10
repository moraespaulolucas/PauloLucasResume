import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PersonalInfo } from './modules';
import { CustomIconComponent } from './components/custom-icon.component';

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './main.html',
  imports: [CommonModule, CustomIconComponent]
})
export class App implements OnInit {
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

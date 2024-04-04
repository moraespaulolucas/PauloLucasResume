import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PersonalInfo } from './modules';

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './main.html',
  imports: [CommonModule]
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

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: '[main]',
  standalone: true,
  templateUrl: './main.html',
})
export class App {}

bootstrapApplication(App);

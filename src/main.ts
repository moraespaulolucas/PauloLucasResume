import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1 class="font-bold text-red">Hello world!</h1>
    <a class="underline hover:text-blue-600" target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {}

bootstrapApplication(App);

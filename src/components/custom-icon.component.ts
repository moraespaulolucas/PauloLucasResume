import { CommonModule } from "@angular/common";
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";
import { FontAwesomeModule, FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

interface SafeHtmlImpl extends SafeHtml {
    [key:string]: HTMLElement
}

@Component({
    selector: 'i.fa-icon',
    standalone: true,
    template: `
        <fa-icon #icon [icon]="faCoffee"></fa-icon>
        
        `,
    imports: [FontAwesomeModule, CommonModule],
})
export class CustomIconComponent implements AfterViewInit {
    @ViewChild('icon') faIconComponent!: FaIconComponent
    
    faCoffee = faCoffee;
    
    safeElement !: SafeHtmlImpl
    element !: HTMLElement

    ngAfterViewInit(): void {
        this.safeElement = this.faIconComponent.renderedIconHTML as SafeHtmlImpl
        this.element = this.safeElement[Object.keys(this.safeElement)[0]];
    }
}
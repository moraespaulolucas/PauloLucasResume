import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";
import { FontAwesomeModule, FaIconComponent } from "@fortawesome/angular-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface SafeHtmlImpl extends SafeHtml {
    changingThisBreaksApplicationSecurity: string
}

@Component({
    selector: '.fa-icon',
    standalone: true,
    template: `@if (iconPrefix && iconName) {<fa-icon #icon [icon]="[iconPrefix, iconName]"></fa-icon>}`,
    imports: [FontAwesomeModule, CommonModule],
})
export class CustomIconComponent implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}

    @ViewChild('icon') faIconComponent!: FaIconComponent;
    @Input() iconPrefix?: IconPrefix
    @Input() iconName?: IconName

    ngAfterViewInit(): void {
        if (this.iconPrefix && this.iconName) {
            const safeElement = this.faIconComponent.renderedIconHTML as SafeHtmlImpl
            const element = safeElement.changingThisBreaksApplicationSecurity;
            const customIconComponentElement = this.elementRef.nativeElement as HTMLElement
            customIconComponentElement.innerHTML = element
        }
    }
}
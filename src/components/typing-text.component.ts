import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
    selector: '[typing-text]',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `{{typingText}}<span *ngIf="!isFinished || stayFocused" class="border-r border-current h-full" [ngClass]="{'animate-blinking' : isFinished}"></span>`,
})
  export class TypingTextComponent implements OnInit {
    @Input() text!: string
    @Input() delay = 100
    @Input() stayFocused = true

    @Output() isFinishedEmitter = new EventEmitter<boolean>
    
    typingText = ""
    currentIndex = 0;
    isFinished = false
  
  ngOnInit(): void {
    this.typeNextCharacter();
  }

  typeNextCharacter(): void {
    if (this.currentIndex < this.text.length) {
      this.typingText += this.text[this.currentIndex];
      this.currentIndex++;
        
      setTimeout(() => {
        this.typeNextCharacter();
      }, this.delay);
    } else {
        this.isFinished = true
        this.isFinishedEmitter.emit(this.isFinished)
    }
  }
}
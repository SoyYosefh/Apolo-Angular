import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './chatbot.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChatbotComponent { }

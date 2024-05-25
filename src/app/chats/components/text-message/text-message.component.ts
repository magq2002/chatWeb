import { Component, Input } from '@angular/core';

@Component({
  selector: 'chats-text-message',
  templateUrl: './text-message.component.html',
})
export class TextMessageComponent {

  @Input() text?: string;
}

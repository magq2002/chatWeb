import { Component, Input } from '@angular/core';
import { Message } from '../../interfaces';

@Component({
  selector: 'chats-text-message',
  templateUrl: './text-message.component.html',
})
export class TextMessageComponent {

  @Input() message?: Message;
}

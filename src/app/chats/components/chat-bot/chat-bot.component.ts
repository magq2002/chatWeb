import { Component, effect, inject } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../interfaces';

@Component({
  selector: 'chats-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {

  messages: Message[] = [];

  constructor(){
    this.getAllMessages();
  }

  private messageService = inject( MessageService );

  public getMessages = effect(() => {
    if (this.messageService.getNewMessages().length > 0 && this.messageService.getNewMessages() != undefined ){
      this.getMessage(this.messageService.getNewMessages());
    }
  })

  public getMessage(data: number[]) {
    this.messageService.getMessage(data).subscribe(({message, messageChat }) => {
        this.messages.push(message);
        this.messages.push(messageChat);
    }, (error) => {
        console.error('Error fetching messages:', error);
    });
}

  public getAllMessages() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages.push(...data);
    })
  }

}

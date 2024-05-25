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
    if (this.messageService.getNewMessages() != 0 && this.messageService.getNewMessages() != undefined ){
      this.getMessage(this.messageService.getNewMessages());
    }
  })

  public getMessage(id: number) {
    this.messageService.getMessage(id).subscribe((data) =>{
      this.messages.push(data);
    })
  }

  public getAllMessages() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages.push(...data);
    })
  }

}

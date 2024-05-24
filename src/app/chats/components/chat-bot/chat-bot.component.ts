import { Component, effect, inject } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message, VoiceMessage } from '../../interfaces';

@Component({
  selector: 'chats-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {

  messages: Message[] = [];
  voiceMessage: VoiceMessage[] = [];

  constructor(){
    this.getAllMessages();
  }

  private messageService = inject( MessageService );

  public getMessages = effect(() => {
    this.getMessage(this.messageService.getNewMessages());
  })

  public getMessage(id: number) {
    this.messageService.getMessage(id).subscribe((data) =>{
      this.messages.push(data);
      console.log(data);
    })
  }

  public getAllMessages() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages.push(data);
      console.log(data);
    })
  }

}

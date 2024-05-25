import { Component, effect, inject } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../interfaces';

@Component({
  selector: 'chats-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {

  messages: Message[] = [
    // {id: 1, is_audio: true, message:"hola", user: 1},
    // {id: 2, is_audio: false, message:"que", user: 2},
    // {id: 3, is_audio: true, message:"mas", user: 1}
  ];

  constructor(){
    this.getAllMessages();
  }

  private messageService = inject( MessageService );

  public getMessages = effect(() => {
    // this.getMessage(this.messageService.getNewMessages());
  })

  public getMessage(id: number) {
    this.messageService.getMessage(id).subscribe((data) =>{
      this.messages.push(data);
      console.log(data);
    })
  }

  public getAllMessages() {
    this.messageService.getAllMessages().subscribe((data) => {
      console.log(data);
      this.messages.push(...data);
    })
  }

}

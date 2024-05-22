import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';



@NgModule({
  declarations: [
    MessageComponent,
    ChatBotComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatBotComponent,
  ]
})
export class ChatsModule { }

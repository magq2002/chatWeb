import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { FooterComponent } from './components/footer/footer.component';
import { MicrofoneComponent } from './components/microfone/microfone.component';
import { ControlsMicrofoneComponent } from './components/controls-microfone/controls-microfone.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessageComponent,
    ChatBotComponent,
    FooterComponent,
    MicrofoneComponent,
    ControlsMicrofoneComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ChatBotComponent,
    FooterComponent,
  ]
})
export class ChatsModule { }

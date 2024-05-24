import { Component, Input } from '@angular/core';
import { Chats } from '../../interfaces/chats';

@Component({
  selector: 'shared-item-menu-card',
  templateUrl: './item-menu-card.component.html',
  styleUrl: './item-menu-card.component.css'
})
export class ItemMenuCardComponent {

  @Input() user?: Chats;

  @Input() color?: boolean;
}

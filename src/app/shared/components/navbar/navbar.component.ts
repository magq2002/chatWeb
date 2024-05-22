import { Component, Input } from '@angular/core';
import { Chats } from '../../interfaces/chats';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() user?: Chats;
}

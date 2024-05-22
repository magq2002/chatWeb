import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAsideComponent } from './components/nav-aside/nav-aside.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonWritterComponent } from './components/button-writter/button-writter.component';
import { SideMenuCardComponent } from './components/side-menu-card/side-menu-card.component';
import { ItemMenuCardComponent } from './components/item-menu-card/item-menu-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatsModule } from '../chats/chats.module';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideMenuComponent,
    FooterComponent,
    NavAsideComponent,
    SearchComponent,
    ButtonWritterComponent,
    SideMenuCardComponent,
    ItemMenuCardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ChatsModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class SharedModule { }

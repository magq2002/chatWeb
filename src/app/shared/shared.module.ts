import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAsideComponent } from './components/nav-aside/nav-aside.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonWritterComponent } from './components/button-writter/button-writter.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideMenuComponent,
    FooterComponent,
    NavAsideComponent,
    SearchComponent,
    ButtonWritterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class SharedModule { }

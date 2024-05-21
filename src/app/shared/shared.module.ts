import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAsideComponent } from './components/nav-aside/nav-aside.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideMenuComponent,
    FooterComponent,
    NavAsideComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class SharedModule { }

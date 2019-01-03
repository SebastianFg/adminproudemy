import { NgModule } from '@angular/core';

import { NopagesfundComponent } from './nopagesfund/nopagesfund.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    NopagesfundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NopagesfundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ]
})

export class SharedModule {}
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

//modulos
import {SharedModule} from '../shared/shared.module';

//ng2 charts
import { ChartsModule } from 'ng2-charts';

//rutas
import {PAGES_ROUTES} from './pages.routes'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    
  ],
  imports: [
 	 SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule{}
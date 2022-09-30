import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { ChartListComponent } from './components/chart-list/chart-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableChartComponent } from './components/table-chart/table-chart.component';

@NgModule({
  declarations: [
    ChartListComponent,
    TableChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  entryComponents: [ChartListComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(ChartListComponent,
      { injector: injector });
    customElements.define('stat-chart-list', el);
  }

  ngDoBootstrap() {}
}

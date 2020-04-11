import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldStatComponent } from './world-stat/world-stat.component';
import { TableModule } from 'primeng/table';
import { QuickFactComponent } from './quick-fact/quick-fact.component';
import { ContinentWiseStatComponent } from './continent-wise-graph/continent-wise-graph.component';
import { FormsModule } from '@angular/forms';
import { ChartMakerComponent } from './chart-maker/chart-maker.component';
import { ChartModule } from 'primeng/chart';
import { TableMakerComponent } from './table-maker/table-maker.component';
import { IndiaStatComponent } from './india-stat/india-stat.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as world from 'fusioncharts/maps/fusioncharts.world';
import * as india from 'fusioncharts/maps/fusioncharts.india';

import * as usa from 'fusioncharts/maps/fusioncharts.usa';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, world, india, usa);

@NgModule({
  declarations: [
    AppComponent,
    WorldStatComponent,
    QuickFactComponent,
    ContinentWiseStatComponent,
    ChartMakerComponent,
    TableMakerComponent,
    IndiaStatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ChartModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

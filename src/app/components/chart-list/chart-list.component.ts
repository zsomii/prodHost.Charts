import { Component, Input, OnInit } from '@angular/core';
import { BootstrapedChartDTO, ChartTypeDTO, ColorSchemeDTO } from '../../models/models';
import { LegendPosition } from "@swimlane/ngx-charts";

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {
  ChartType = ChartTypeDTO;
  charts: Array<BootstrapedChartDTO> = [];

  @Input()
  set data(value: Array<BootstrapedChartDTO>) {
    if (value) {
      this.charts = value;
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  getClass(chart: BootstrapedChartDTO) {
    return chart.bootstrapClass?.map((_class) => _class.split('_').join('-')).join(' ');
  }

  getLegendPosition(postion: string): LegendPosition {
    switch (postion) {
      case "below": {
        return LegendPosition.Below;
      }
      case "right": {
        return LegendPosition.Right;
      }
      default: {
        return LegendPosition.Below;
      }
    }
  }


  getScheme(colorScheme: ColorSchemeDTO) {
    return '';
  }

}

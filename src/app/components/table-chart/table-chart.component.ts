import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HAlignmentDTO, SortDirectionDTO } from 'src/app/models/models';
import { TableChartDTO } from 'src/app/models/tableChartDTO';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild('exporter') exporter: any;

  chartData!: TableChartDTO;
  displayedColumns!: string[];
  cellAlignments!: string[];
  headerAlignments!: string[];
  dataSource = new MatTableDataSource<Array<string>>([]);

  @Input()
  set data(value: TableChartDTO) {
    if (value) {
      this.dataSource.data = value.rows;
      this.displayedColumns = value.columns.map(col => col.name);
      this.chartData = value;
      this.cellAlignments = this.chartData.columns.map(col => col.alignment.toLowerCase());
      this.headerAlignments = this.chartData.columns.map(col => {
        switch (col.alignment) {
          case HAlignmentDTO.Left: return 'flex-start';
          case HAlignmentDTO.Center: return 'center';
          case HAlignmentDTO.Right: return 'flex-end';
          default: return 'flex-start';
        }
      })
      const direction = this.chartData.defaultSort.sortDirection === SortDirectionDTO.Ascending ? 'asc' : 'desc';
      this.initialSort(this.chartData.defaultSort.columnIndex, direction);
    }
  }


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.sort.disableClear = true;
  }

  getCellStyle(colIndex: number) :any{
    if (this.chartData) {
      return { 'text-align': this.cellAlignments[colIndex] };
    } 
  }

  getHeaderStyle(colIndex: number) :any{
    if (this.chartData) {
      return { 'justify-content': this.headerAlignments[colIndex] };
    }
  }

  initialSort(index: number, direction: string) {
    if (this.chartData) {
      const modifier = direction === 'asc' ? 1 : -1;

      this.chartData.rows = this.chartData.rows.sort((a, b) => new Intl.Collator('hu', { caseFirst: 'upper' }).compare(a[index], b[index]) * modifier);
      this.dataSource.data = this.chartData.rows;
    }
  }

  sortDataByColumnName(columnName: string, direction: string) {
    if (this.chartData) {
      const modifier = direction === 'asc' ? 1 : -1;
      const index = this.chartData.columns.findIndex(x => x.name === columnName);
      this.chartData.rows = this.chartData.rows.sort((a, b) => new Intl.Collator('hu', { caseFirst: 'upper' }).compare(a[index], b[index]) * modifier);
      this.dataSource.data = this.chartData.rows;
    }
  }

  exportTable(format: string) {
    this.exporter.exportTable(format, {
      fileName: `${this.chartData.title}_${new Date().toISOString()}`,
      sheet: this.chartData.title,
      Props: {
        Author: 'prodHost'
      }
    })
  }

}


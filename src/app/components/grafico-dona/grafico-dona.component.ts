import { Component, OnInit,Input,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {


  @Input('chartLabels') public doughnutChartLabels:string[] = [];
  @Input('chartData') public doughnutChartData:number[] = [];
  @Input('chartType') public doughnutChartType:string = '';
  constructor() { }

  ngOnInit() {
  }

}

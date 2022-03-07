import { Component, OnInit } from '@angular/core';
import { IReporte } from './IReporte';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportes = "proyecto1";
  public reporte: IReporte = {id: 1, name: "Luis", codigo: "123", vendedor: 1,
  clasficacionVendedor: 1, total: 1, entrega: 1};

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  // Una variable para guardar los datos globales y otra para guardar los datos de España
  global: any = '';
  spain: any = '';

  // Al constructor le pasamos el servicio para poder utilizar sus métodos
  constructor(private covidService: CovidService) {}

  // Al cargar el componente llamamos a las funciones que cargan los datos
  ngOnInit(): void {
    this.getGlobal();
    this.getSpain();
  }

  // Función que utiliza el servicio para obtener los datos globales y guardarlos en una variable
  getGlobal(): void {
    this.covidService.globalData().subscribe((res) => {
      this.global = res;
    });
  }

  // Función que utiliza el servicio para obtener los datos de España y guardarlos en una variable
  getSpain(): void {
    this.covidService.spainData().subscribe((res) => {
      this.spain = res[0];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  // Una variable para guardar el array de países
  countries: any[] = [];

  // Al constructor le pasamos el servicio para poder utilizar sus métodos
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    // Al cargar el componente utilizamos el servicio para guardar los datos de todos los países en una variable
    this.covidService.countriesData().subscribe( res => 
      {
        this.countries = res;
      })
  }

}

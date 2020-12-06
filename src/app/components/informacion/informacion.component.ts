import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
import { CovidService } from 'src/app/services/covid.service';
import { COUNTRIES } from '../../mock-countries';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  countries: any[] = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.countriesData().subscribe( res => 
      {
        this.countries = res;
      })
  }

}

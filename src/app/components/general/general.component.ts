import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  global: any = '';
  spain: any = '';

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.getGlobal();
    this.getSpain();
  }

  getGlobal(): void {
    this.covidService.globalData().subscribe((res) => {
      this.global = res;
    });
  }

  getSpain(): void {
    this.covidService.spainData().subscribe((res) => {
      this.spain = res[0];
    });
  }
}

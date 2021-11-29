import { Component, OnInit } from '@angular/core';
import {Medicines} from "../Service/Medicines";
import {ApiService} from "../Service/api.service";

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
  providers: [ApiService]
})
export class MedicinesComponent implements OnInit {

  listOfMedicines : Medicines[];

  constructor(private newsService: ApiService) {
    this.listOfMedicines = [];
    this.newsService.getBreeds().subscribe( res => {
      this.listOfMedicines = res;
      console.log(res)
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('MedicinesComponent:OnInit');
    this.newsService.getBreeds().subscribe( res => {
      this.listOfMedicines = res;
      console.log(res)
    });
  }

}

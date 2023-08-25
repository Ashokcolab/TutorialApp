import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = '/assets/images' ;
  housingLocationList : HousingLocation[] = [
    {
      id : 1,
        name:"Test Home1",
        city:"Test City1",
        state:"ST1",
        photo: `${this.baseUrl}/one.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
    {
      id : 2,
        name:"Test Home2",
        city:"Test City2",
        state:"ST2",
        photo: `${this.baseUrl}/two.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 3,
        name:"Test Home3",
        city:"Test City3",
        state:"ST3",
        photo: `${this.baseUrl}/three.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 4,
        name:"Test Home4",
        city:"Test City4",
        state:"ST4",
        photo: `${this.baseUrl}/four.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 5,
        name:"Test Home5",
        city:"Test City5",
        state:"ST5",
        photo: `${this.baseUrl}/five.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 6,
        name:"Test Home6",
        city:"Test City6",
        state:"ST",
        photo: `${this.baseUrl}/six.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 7,
        name:"Test Home7",
        city:"Test City7",
        state:"ST7",
        photo: `${this.baseUrl}/seven.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 8,
        name:"Test Home8",
        city:"Test City8",
        state:"ST8",
        photo: `${this.baseUrl}/eight.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9,
        name:"Test Home9",
        city:"Test City9",
        state:"ST9",
        photo: `${this.baseUrl}/nine.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
  ]



  getAllHousingLocations(): HousingLocation [] {
      return this.housingLocationList;
  }

  getHousingLocationById( id: number) :HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}
import { Component, OnInit } from '@angular/core';
import { RealEstateProperty} from '../../_models/real-estate';
import {HttpClient} from '@angular/common/http';
import {RealEstateService} from "../../_services/real-estate.service";

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.scss']
})
export class PropertyListingsComponent implements OnInit {
  properties: RealEstateProperty[] = [];
  //   // tslint:disable-next-line:max-line-length
  //   new RealEstateProperty(1, { doorNumber: 12, street: 'Berwick Road', town: 'Southdowns', city: 'Gweru', province: 'Midlands', location: {long: 11, lat: 2}},
  //     'https://i.travelapi.com/hotels/45000000/44310000/44309000/44308970/eff8a8df_z.jpg', [], 'Our lush property is awesome',
  //     {age: 12, acreage: 3400, bathrooms: 2, borehole: true, lounges: 2, solarPanels: true, security: ['Barbed wire', 'electric gate with guard house', 'infra-red camera at the gate with night sensor']},
  //     'Single storey house', 75000, 3, {marketValue: 75000, typeOfDeed: 'Leasehold'}, {rentPerMonth: null, minimumTerm: 6},
  //     [{schools: [], store: [], gym: [], hospital: []}],
  //     'USD', {dateListed: '', datesUpdated: []}
  //   )
  // ];



  constructor(private reService: RealEstateService) { }

  ngOnInit(): void {
  }
  // getProperty(): void{
  //   this.http.get('_mock-data/real-estate.json').subscribe(data => {
  //       console.log(data);
  //     });
  // }

}

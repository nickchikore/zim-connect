import {Component} from '@angular/core';
import {RealEstateProperty} from '../_models/real-estate';

@Component({
  selector: 'app-property',
  templateUrl: 'property.component.html',
  styleUrls: ['property.component.scss']
})


export class PropertyComponent{
  properties: RealEstateProperty[] = [];
  constructor() {}
    // {
    //   id: 1,
    //   address : {
    //     doorNumber: 11,
    //     buildingName: '',
    //     street: 'Tsangadzi close',
    //     town: 'Ivene',
    //     city: 'Gweru',
    //     province: 'Midlands',
    //     location: {
    //       long: 11,
    //       lat: 2
    //     }
    //   },
    //   imgMain : 'https://cdn.24.co.za/files/Cms/General/d/8165/717d4766378a46d7ba00cdbbeba4083b.jpg',
    //   photos : [],
    //   description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   features : {
    //     age: 12,
    //     acreage: 3400,
    //     bathrooms: 2,
    //     borehole: true,
    //     lounges: 2,
    //     solarPanels: true,
    //     security: ['Barbed wire', 'electric gate with guard house', 'infra-red camera at the gate with night sensor']
    //   },
    //   propertyType : 'house',
    //   price : 100000,
    //   numberOfBedRooms : 4,
    //   marketValue : 150000,
    //   amenities : {
    //     schools: [
    //       {
    //         preschool: {
    //           name: 'Tiny Tots Nursery School',
    //           distance: 1500
    //         },
    //         primarySchool: {
    //           name: 'Lundi Park Primary School',
    //           distance: 3500
    //         },
    //         secondarySchool: {
    //           name: 'Chaplin High School',
    //           distance: 9000
    //         }
    //       }
    //     ],
    //     shops: [
    //       {
    //         name: 'Nyahuye Bottle store',
    //         distance:  3000
    //       }
    //     ],
    //     hospitals: [
    //       {
    //         name: 'Claybank Clinic',
    //         distance:  7000
    //       }
    //     ],
    //     gyms: [
    //       {
    //         name: 'Marata Gym',
    //         distance:  2000
    //       }
    //     ]
    //   },
    //   currency : 'USD',
    //   meta : {dateListed: '', datesUpdated: []}
    // }
}

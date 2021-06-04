import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-tourism-card',
  templateUrl: './tourism-card.component.html',
  styleUrls: ['./tourism-card.component.scss']
})
export class TourismCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}

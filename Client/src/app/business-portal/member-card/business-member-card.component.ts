import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-business-member-card',
  templateUrl: './business-member-card.component.html',
  styleUrls: ['./business-member-card.component.scss']
})
export class BusinessMemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}

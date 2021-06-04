import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-community-member-card',
  templateUrl: './community-member-card.component.html',
  styleUrls: ['./community-member-card.component.scss']
})
export class CommunityMemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}

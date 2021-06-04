import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-dating-member-card',
  templateUrl: './dating-member-card.component.html',
  styleUrls: ['./dating-member-card.component.scss']
})
export class DatingMemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}

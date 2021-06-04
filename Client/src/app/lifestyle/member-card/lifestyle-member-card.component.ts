import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-lifestyle-member-card',
  templateUrl: './lifestyle-member-card.component.html',
  styleUrls: ['./lifestyle-member-card.component.scss']
})
export class LifestyleMemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}

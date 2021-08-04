import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-marketplace-member-list',
  templateUrl: './marketplace-member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MarketplaceMemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  constructor( private memberService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}

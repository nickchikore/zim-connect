import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-lifestyle-member-list',
  templateUrl: './lifestyle-member-list.component.html',
  styleUrls: ['./lifestyle-member-list.component.scss']
})
export class LifestyleMemberListComponent implements OnInit {
  members: Member[];
  constructor( private memberService: MembersService) { }

  ngOnInit() {
    this.loadMembers();
  }
  loadMembers(){
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      console.log(members);
    });
  }

}

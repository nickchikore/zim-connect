import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss']
})
export class CommunityListComponent implements OnInit {
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

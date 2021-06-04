import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-business-hub-list',
  templateUrl: './business-hub-list.component.html',
  styleUrls: ['./business-hub-list.component.scss']
})
export class BusinessHubListComponent implements OnInit {
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

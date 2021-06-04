import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './dating-hub-list.component.html',
  styleUrls: ['./dating-hub-list.component.scss']
})
export class DatingHubListComponent implements OnInit {
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

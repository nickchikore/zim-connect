import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
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

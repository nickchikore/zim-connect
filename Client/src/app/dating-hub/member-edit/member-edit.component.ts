import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {User} from "../../_models/user";
import {Member} from "../../_models/member";
import {AccountService} from "../../_services/account.service";
import {MembersService} from "../../_services/members.service";
import {take} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  user: User;
  member: Member;
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event, any ){
    if (this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  constructor(private accountService: AccountService,
              private memberService: MembersService,
              private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe( user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();

  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member => this.member = member);
  }

  updateMember(){
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Member updated successfully');
      this.editForm.reset(this.member);
    });
  }

}

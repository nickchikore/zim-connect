import {Component, OnInit, TemplateRef} from '@angular/core';
import { Observable } from 'rxjs';
import {AccountService} from '../../_services/account.service';
import {Router} from '@angular/router';
import { ToastrService} from "ngx-toastr";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean | undefined ;
  modalRef: BsModalRef;
  constructor(public accountService: AccountService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/real-estate-dashboard');
      this.loggedIn = true;
      console.log(response);
      }
    );
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }

  logOut(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

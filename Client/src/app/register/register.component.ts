import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AccountService } from '../_services/account.service';
import {ToastrService} from 'ngx-toastr';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  maxDate: Date;
  constructor(private accountService: AccountService,
              private toastr: ToastrService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  this.initializeForm();
  this.maxDate = new Date();
  this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm(){
    this.registerForm = this.fb.group({
      gender: ['male', Validators.required],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return(control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true};
    };
  }
  // tslint:disable-next-line:typedef
  register(){
    console.log(this.registerForm.value);

    // this.accountService.register(this.model).subscribe(
    //     response => {
    //     console.log(response);
    //     this.cancel();
    //   },
    //     error => {
    //     console.log(error);
    //     this.toastr.error(error.error);

    //     });
  }
  cancel(){
    this.cancelRegister.emit(false);
  }

}

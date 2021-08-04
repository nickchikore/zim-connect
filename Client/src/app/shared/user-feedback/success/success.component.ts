import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  @Input() msg: string;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  @Input() msg: string;
  constructor() { }

  ngOnInit(): void {
  }

}

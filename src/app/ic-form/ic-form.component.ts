import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ic-form',
  templateUrl: './ic-form.component.html',
  styleUrls: ['./ic-form.component.css']
})
export class IcFormComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}

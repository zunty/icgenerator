import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  
  //date
  today: number = Date.now();

  @Input() message: string;

  constructor(){

}

  ngOnInit() {
  }

}

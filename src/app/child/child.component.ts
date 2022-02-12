import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { 

  }

  @Output() parentFunction : EventEmitter<any> =  new EventEmitter();

  ngOnInit(): void {
    this.parentFunction.emit("Hello World!");
    console.log(this.parentFunction);
  }

}

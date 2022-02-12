import { Component, OnInit, Input, Output } from '@angular/core'; 

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

@Input() greet: any
 

  constructor() { }


  ngOnInit(): void {
     
  }

}

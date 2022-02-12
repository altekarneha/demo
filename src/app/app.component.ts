import { Component } from '@angular/core';
import { DemoserviceService } from './demoservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  greetings:string ='Happy New Year 2022!';


  displayData: any;

   constructor(private data: DemoserviceService){

     this.data.getData().subscribe(demo=>{
       console.log(demo);
       this.displayData=demo;
     })

   }

  ngOnInit(): void {
    
  }
parentFunction(newItem: any){
console.log(newItem);
}


  
}

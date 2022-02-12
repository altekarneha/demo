import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  firstName:string='Neha';
  salary:number=100000;
  TodayDate:number=Date.now();

  title:string = "Demo Project";
  demotext:string="Welcome to";
  redColor= "red";
  cssStyle= {'color': this.redColor, 'font-weight': 'bold', 'background-color': 'pink'};
  isBold: boolean=false;
  students= [
    {
      name: 'Neha',
      gender: "Female"
    },
    {
      name: 'Omkar',
      gender: "Male"
    },
    {
      name: 'Akshay',
      gender: "Male"
    },
    {
      name: 'Sneha',
      gender: "Female"
    },
    
  ]
 
  getColor(gender: string){
   return gender=='Male'?'green':'red'
  }

  className:boolean=true;
  

  contactList=[
    {
     'name':'Neha Altekar',
     'email': 'altekarneha@gmail.com',
     'phone': '9988776655' 
    },
    
    {
      'name':'Taylor Watson',
      'email': 'taylor@gmail.com',
      'phone': '9898776655' 
     },
     
     {
       'name':'John Doe',
       'email': 'john@gmail.com',
       'phone': '8888776655' 
      },
      
     {
      'name':'Alexa',
      'email': 'john@gmail.com',
      'phone': '8888776655' 
     }
  ]

  name={
    "firstName": "Neha",
    "lastName": "Altekar"
  }

  showData(){
    alert("Welcome to nextAlien");
  }


  
  isDisabled:boolean=true;
  isButtonVisible :boolean=false;


  twowaytext:string="Two way binding";

  selectCountryCode:string='';
  selectCountry(getval: string){
     if(getval=="I"){
      this.selectCountryCode=getval;
     }else if(getval=="A"){
      this.selectCountryCode=getval;
     }else if(getval=="U"){
      this.selectCountryCode=getval;
     }else if(getval=="UK"){
      this.selectCountryCode=getval;
     }
  }


  studentsData: any[] = [
    {
    ID: 'std101', Name: 'RaKesh ROUT',
    DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    },
    {
    ID: 'std102', Name: 'ANURAG Mohanty', 
    DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
    },
    {
    ID: 'std103', Name: 'Priyanka Dewangan', 
    DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
    },
    {
    ID: 'std104', Name: 'Hina SHARMA', 
    DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
    },
    {
    ID: 'std105', Name: 'SamBIt SataPATHY',
    DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876
    }
  ]

}

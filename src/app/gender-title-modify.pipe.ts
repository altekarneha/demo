import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTitleModify'
})
export class GenderTitleModifyPipe implements PipeTransform {

  transform(value: unknown): unknown {
    // if(value=='MALE'){
    //   return 'M';
    // }else{
    //   return 'F';
    // }
    return value==="MALE" ? "M" : "F";

  }

}

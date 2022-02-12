import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  transform(value: string, gender: string): unknown {
    if(gender.toLowerCase()=='male'){
    return 'MR. '+value;
    }else{
    return 'MRS. '+value;
    }
  }

}

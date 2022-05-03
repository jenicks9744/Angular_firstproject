import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    // console.log(value);
    let cyear = new Date().getFullYear();
    let byear = new Date(value).getFullYear();
    let userage =cyear-byear
    return userage;
  }

}

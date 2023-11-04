import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, psearch:String ): any {
    return value.filter(plant=>
      plant.productName.toLowerCase().indexOf(psearch.toLowerCase())!==-1);
  }

}

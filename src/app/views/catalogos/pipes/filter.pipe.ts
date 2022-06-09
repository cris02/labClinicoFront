import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPais = [];
    if(arg === '') return value;
    for(const pais of value){
      if(pais.nomPais.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPais.push(pais)
      }
    }
    return resultPais;
  }

}

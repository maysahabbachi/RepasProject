import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if (sName === '') {
      return value;
    }
    else {
      console.log(value);
      console.log(sName);
      const repasArray: any[] = [];
      for (let i = 0; i < value.length; i++) {


        const prix: number = value[i].prix;
        const description: number = value[i].description;

        // tslint:disable-next-line:max-line-length
        if (description.toString().toLowerCase().startsWith(sName.toLowerCase()) || prix.toString().includes(sName.toLowerCase())){
          repasArray.push(value[i]);
        }
      }
      return repasArray;
    }
  }

}

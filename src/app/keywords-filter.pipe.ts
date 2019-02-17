import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keywordsFilter'
})
export class KeywordsFilterPipe implements PipeTransform {

  transform(value: any, keywords?: any): any {
    //return null;
    console.log(`transform value = ${value}`);
    return value;
  }

}

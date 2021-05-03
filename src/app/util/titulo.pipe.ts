import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'titulo'
})
export class Titulo implements PipeTransform {

  transform(text: string, truncEm: number) {
    if(text.length > truncEm) {
      return text.substring(0, truncEm) + '...';
    }

    return text;
  }

}

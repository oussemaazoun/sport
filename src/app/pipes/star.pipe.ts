import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(ch: string) {
    var T = ['a', 'e', 'i', 'o', 'u'];
    var result = '';
    var V = '';
    for (let i = 0; i < ch.length; i++) {
      V = ch[i];
      for (let j = 0; j < T.length; j++) {
        if (V.toLowerCase() == T[j]) {
          V = '*';
          break;
        }
      }
      result = result + V;
    }
    return result;
  }
}

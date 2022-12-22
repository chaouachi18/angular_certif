import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positif'
})
export class PositifPipe implements PipeTransform {

  transform(valeur: number): string {
    if (valeur > 0) 
    { valeur=+valeur
      return "+"+valeur; } 
   return valeur?.toString();}

}

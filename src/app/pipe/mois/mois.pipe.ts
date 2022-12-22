import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mois'
})
export class MoisPipe implements PipeTransform {

  
  transform(mois: number): string {
    return ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre","Decembre"][mois - 1];
  }

}

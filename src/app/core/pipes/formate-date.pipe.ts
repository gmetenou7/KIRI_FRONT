import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';


@Pipe({
  name: 'formateDate'
})
export class FormateDatePipe implements PipeTransform {

  transform(data: string): string {
    return format(data, "DD-MM-YYYY", { locale: fr });
  }

}

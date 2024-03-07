import { Pipe, PipeTransform } from '@angular/core';
import {formatDistanceToNow} from "date-fns";
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value?: string): string {
    return formatDistanceToNow(value ? new Date(value) : new Date(), {addSuffix: true, locale: fr})
  }

}

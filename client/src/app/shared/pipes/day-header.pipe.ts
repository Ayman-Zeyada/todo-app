import { Pipe, PipeTransform } from '@angular/core';

import { UtilsService } from 'src/app/core/utils/utils.service';

@Pipe({
  name: 'dayHeader',
})
export class DayHeaderPipe implements PipeTransform {
  transform(value: Date, format: string): any {
    switch (format) {
      case 'dayDate':
        return value.getUTCDate();
      case 'month':
        return `MONTHS.${UtilsService.getMonthsArr()[value.getMonth()].toUpperCase()}`;
      case 'year':
        return value.getFullYear();
      case 'dayName':
        return `DAYS.${UtilsService.getDayArr()[value.getDay()].toUpperCase()}`;
      default:
        return null;
    }
  }
}

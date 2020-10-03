import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayHeader',
})
export class DayHeaderPipe implements PipeTransform {
  private days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  private months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  transform(value: Date, format: string): any {
    switch (format) {
      case 'dayDate':
        return value.getUTCDate();
      case 'month':
        return this.months[value.getMonth()];
      case 'year':
        return value.getFullYear();
      case 'dayName':
        return this.days[value.getDay()];
      default:
        return null;
    }
  }
}

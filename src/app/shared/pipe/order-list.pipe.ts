import { Pipe, PipeTransform } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TracksModel[] {

    try {
      if (args === null) {
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) return -1;
          if (a[args] === b[args]) return 0;
          if (a[args] > b[args]) return 1;

          return 1;
        });

        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (error) {
      console.error('Error in OrderListPipe', error);
      return value;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPlaceholder'
})
export class AddPlaceholderPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) {
      value = '/assets/images/no-image.jpg';
    }
    return value;
  }

}

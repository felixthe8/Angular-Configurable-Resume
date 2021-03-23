import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkedin'
})
export class LinkedinPipe implements PipeTransform {

  transform(value: string): string {
    const index = value.search("linkedin");
    return value.substring(index);
  }

}

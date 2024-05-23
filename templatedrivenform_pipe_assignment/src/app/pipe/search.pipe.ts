import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/Contact';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // build a logic to search for contacts based on name or mobile number

  transform(value: Contact[], ...args: string[]): Contact[] {
    if (!value) return value;
    if (!args) return value;

    const arg = args[0].toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item.mobile).toLowerCase().includes(arg) ||
        JSON.stringify(item.name).toLowerCase().includes(arg);
    });
  }

}

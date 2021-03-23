import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, country): any {
    try {
      const phoneNumber = parsePhoneNumber(value + '', country as CountryCode);
      return phoneNumber.formatNational();
    } catch (error) {
        console.log("In error");
        return value;
    }
  }
}

import { FormControl } from '@angular/forms';

export class CustomValidators {
  static isNegative(control: FormControl): { [key: string]: boolean } {
    if (+control.value < 0) {
      return {
        negative: true,
      };
    }
    return null;
  }
  /*static isEdit(control: FormControl): { [key: string]: boolean } {
    console.log('1', control.value);
    const initialValue = (' ' + control.value).slice(1);
    console.log('2', initialValue);
    if (JSON.stringify(initialValue) !== JSON.stringify(control.value)) {
      return {
        changed: true,
      };
    }
    return null;
  }*/
  /*
        if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true,
            };
        }
        return null;
        */
}

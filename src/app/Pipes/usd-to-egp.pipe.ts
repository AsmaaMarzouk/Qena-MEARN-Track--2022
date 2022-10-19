import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number,currentRate:number=18): number {
    // return value * 18;
    return value * currentRate;
  }

}

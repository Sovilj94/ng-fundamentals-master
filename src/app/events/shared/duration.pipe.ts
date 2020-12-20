import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'duration'
})

export class DurationPipe implements PipeTransform{
  
    transform(value: any):string {

        switch(value){
            case 1: return 'Half an Hour';
            case 2: return 'One Hour';
            case 3: return 'Half a day';
            case 4: return 'Full day';
            default: value.toString();
        }

    }

}
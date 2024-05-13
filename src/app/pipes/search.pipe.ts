import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../interfaces/user-data';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObjects:UserData[] , searchTerm:string): UserData[] {
    return arrayOfObjects.filter((object)=>object.id.toString().includes( searchTerm ))
  }

}

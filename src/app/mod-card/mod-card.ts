import { Component,input } from '@angular/core'; //import works for function,setting and decorate

@Component({//this is component
  selector: 'app-mod-card',//here just assing how the name
  imports: [],//this is the import
  templateUrl: './mod-card.html',//this is the url of archive html
  styleUrl: './mod-card.css',//this is the url of archive css
})
export class ModCard {
 name = input.required<string>();
 description = input.required<string>();
 image = input.required<string>();
 tag = input.required<string>();
}
//these are the requests in the letter

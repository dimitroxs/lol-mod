import { Component,input } from '@angular/core';

@Component({
  selector: 'app-mod-card',
  imports: [],
  templateUrl: './mod-card.html',
  styleUrl: './mod-card.css',
})
export class ModCard {
 name = input.required<string>();
 description = input.required<string>();
 image = input.required<string>();
 tag = input.required<string>();
}

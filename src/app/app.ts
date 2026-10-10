import { Component, signal} from '@angular/core';
import { ModCard } from './mod-card/mod-card';


@Component({
  selector: 'app-root',
  imports: [ModCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lol-mod');
}

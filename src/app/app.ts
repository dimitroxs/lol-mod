import { Component, signal} from '@angular/core';
import { ModCard } from './mod-card/mod-card';
import { Mod } from './mod';


@Component({
  selector: 'app-root',
  imports: [ModCard,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lol-mod');
  mods: Mod[] = [
    {
      name: 'draven - illidan style',
      description: 'Draven Illidan skin',
      image: 'assets/draven-illidan.png',
      tag: 'Skin'
    },
    {
      name: 'ahri - chamba',
      description: 'ahri chamba skin',
      image: 'assets/draven-illidan.png',
      tag: 'Skin'
    }
  ];
}

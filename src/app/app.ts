import { Component, signal , inject} from '@angular/core';
import { ModCard } from './mod-card/mod-card';
import { Mod } from './mod';
import { ModsService } from './mods';

@Component({
  selector: 'app-root',
  imports: [ModCard,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private modsService = inject(ModsService);
  mods: Mod[] = this.modsService.getMods();
}

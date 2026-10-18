import { Injectable } from '@angular/core';
import { Mod } from './mod';

@Injectable({ providedIn: 'root' })
export class ModsService {
  getMods(): Mod[] {
    return [
      {
    name: 'Draven - Illidan Style',
    description: 'Draven Illidan skin',
    image: 'assets/draven-illidan.png',
    tag: 'Skin',
    },
    ];
  }
}

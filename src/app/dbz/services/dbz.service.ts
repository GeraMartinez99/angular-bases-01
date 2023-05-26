import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 10000
    }
  ];

  onNewCharacter(character: Character) {
    const newCharacter: Character = {id: uuid(), ...character}
    console.log(character);
    this.characters.push( character );
  }
  onDeleteCharacter(id: string): void {

    // this.characters.splice(index, 1);
    this.characters = this.characters.filter( character => character.id !== id)
  }
  constructor() { }
}

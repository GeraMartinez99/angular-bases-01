import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  character: Character = {
    name: 'sss',
    power: 0
  }

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0)
      return;
    this.onNewCharacter.emit( this.character );
    this.character = {
      name: '',
      power: 0
    }
  }
}

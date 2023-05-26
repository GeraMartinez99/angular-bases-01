import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  listCharacters: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id: string ): void {
    console.log(id);
    this.onDelete.emit(id);
  }
}

import { Component, computed, Input, input , Output, EventEmitter, output} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string; // ! - operator zapewnienia o braku wartości null
  // @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

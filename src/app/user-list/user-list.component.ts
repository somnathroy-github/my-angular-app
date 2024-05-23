import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `<div [innerHTML]="userInput"></div>`,
})
export class UserListComponent {
  userInput = '';
}
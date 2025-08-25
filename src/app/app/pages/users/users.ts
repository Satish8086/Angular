import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'User' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Moderator' },
    { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'User' },
  ];
}

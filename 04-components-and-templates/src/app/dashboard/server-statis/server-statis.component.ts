import { Component } from '@angular/core';

@Component({
  selector: 'app-server-statis',
  standalone: true,
  imports: [],
  templateUrl: './server-statis.component.html',
  styleUrl: './server-statis.component.css'
})
export class ServerStatisComponent {
  currentStatus = 'online';
}

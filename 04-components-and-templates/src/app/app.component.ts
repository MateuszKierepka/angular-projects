import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatisComponent } from "./dashboard/server-statis/server-statis.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatisComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {

}

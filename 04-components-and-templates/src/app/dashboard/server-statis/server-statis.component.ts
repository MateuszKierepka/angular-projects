import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-statis',
  standalone: true,
  imports: [],
  templateUrl: './server-statis.component.html',
  styleUrl: './server-statis.component.css'
})
export class ServerStatisComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);

  constructor() {}
  
  ngOnInit() {
    console.log('ON INIT');
    const inverval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999999999
      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(inverval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}

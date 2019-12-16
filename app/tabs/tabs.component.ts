import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  private activeTabUrl: string = "/tabs/(tabs:demo1)";

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.activeTabUrl = event.urlAfterRedirects;
        }
    });
  }

  tabs = [
    { name: 'Demo 1', url: '/tabs/(tabs:demo1)' }, 
    { name: 'Demo 2',   url: '/tabs/(tabs:demo2)' }, 
    { name: 'Demo 3',   url: '/tabs/(tabs:demo3)' }
  ];

  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }
}
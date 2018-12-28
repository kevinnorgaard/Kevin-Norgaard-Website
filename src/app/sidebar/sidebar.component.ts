import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRoute = 'Shop';
  navOpen = true;

  constructor() { }

  ngOnInit() {
  }

  selectRoute(route: string) {
    this.currentRoute = route;
    this.toggleNav();
  }

  toggleNav() {
    if (this.navOpen) {
      document.getElementById('mySidenav').style.width = '250px';
    } else {
      document.getElementById('mySidenav').style.width = '0';
    }
    this.navOpen = !this.navOpen;
  }
}

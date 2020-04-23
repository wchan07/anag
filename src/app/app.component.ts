import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anagTest';
  menuItems: MenuItem[];

  constructor(private menuService: MenuService) {
    
  };

  ngOnInit() {
    this.menuService.getMenu().subscribe(menuItems => {
      this.menuItems = menuItems;
      
    console.log('#####3 ', this.menuItems)
    });
  }
}

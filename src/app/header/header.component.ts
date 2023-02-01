import { Component } from '@angular/core';
import { Logger } from '../MyDoc/Service';
import { NavBarService } from './navBar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // menuItems: string[] = ['HOME', 'News', 'PRODUCTS'];
  menuItems;
  constructor(items: NavBarService) {
    this.menuItems = items.getNavBarItems();
  }

}

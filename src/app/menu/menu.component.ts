import { Component, Input } from '@angular/core';
import { MenuItem } from '../contracts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items: MenuItem[];
}

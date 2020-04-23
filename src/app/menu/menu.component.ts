import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../contracts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}

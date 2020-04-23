import { Component, Input } from "@angular/core";
import { MenuItem } from "../contracts";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() items: MenuItem[];

  faChevronDown = faChevronDown;
}

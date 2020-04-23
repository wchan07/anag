import { Component, OnInit } from "@angular/core";
import { MenuService } from "./menu.service";
import { MenuItem, Product } from "./contracts";
import { ProductService } from "./product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "anagTest";
  menuItems: MenuItem[];
  product: Product;

  constructor(
    private menuService: MenuService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe((menuItems) => {
      this.menuItems = menuItems;

      this.productService
        .getProduct()
        .subscribe((product) => (this.product = product));
    });
  }
}

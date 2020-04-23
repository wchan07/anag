import { Component, OnInit } from "@angular/core";
import { MenuService } from "./menu.service";
import { MenuItem, Product, Review } from "./contracts";
import { ProductService } from "./product.service";
import { ReviewService } from "./review.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "anagTest";
  menuItems: MenuItem[];
  product: Product;
  reviews: Review[];

  constructor(
    private menuService: MenuService,
    private productService: ProductService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe((menuItems) => {
      this.menuItems = menuItems;

      this.productService
        .getProduct()
        .subscribe((product) => (this.product = product));
        
      this.reviewService
        .getReviews()
        .subscribe((reviews) => (this.reviews = reviews));
    });
  }
}

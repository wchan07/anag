import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductOverviewComponent } from "./product-overview/product-overview.component";
import { ProductReviewComponent } from "./product-review/product-review.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductOverviewComponent,
    ProductDescriptionComponent,
    ProductReviewComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

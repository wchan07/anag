import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../contracts';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  @Input() reviews: Review[];
  
  constructor() { }

  ngOnInit(): void {
  }

}

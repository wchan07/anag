import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewsResponse, Review } from './contracts';
import { map } from "rxjs/operators";

const DATA_URL = 'assets/reviews.json';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  private getData() {
    return this.http.get<ReviewsResponse>(DATA_URL).pipe(
      map<ReviewsResponse, Review[]>(response => response.reviews)
    );
  }

  getReviews() {
    return this.getData();
  }
}

export interface MenuResponse {
  menu: any[];
}

export interface MenuItem {
  title: string;
  items?: string[];
}

export interface Product {
  title: string;
  shortDes: string[];
  longDes: string[];
  imageTop: string;
  imageBody: string;
}

export interface ReviewsResponse {
  reviews: Review[];
}

export interface Review {
  image: string;
  name: string;
  title: string;
  text: string;
  rating: number;
  date: string;
}

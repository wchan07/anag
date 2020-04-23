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

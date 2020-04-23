import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { MenuResponse, MenuItem } from './contracts';

const DATA_URL = 'assets/menu.json';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) {}
  private getData() {
    return this.http.get(DATA_URL).pipe(
      map<MenuResponse, MenuItem[]>(response => response.menu)
    );
  }

  getMenu() {
    return this.getData();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAll() {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/products")
  }

  loadById(id) {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/products/" + id)
  }

}

export type Product = {
  id: number,
  title: string,
  anons: string,
  desc: string,
  image: string,
}
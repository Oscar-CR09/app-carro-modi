import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { product } from '../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll():Product[]{

    return product;

  }
}

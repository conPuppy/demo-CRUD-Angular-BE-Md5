import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../model/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [];

  constructor(private http: HttpClient) {

  }

  // nạp đạn bên service:
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/products", product);
  }

  deleteProduct(id: number): Observable<void> {
    return  this.http.delete<void> ("http://localhost:8080/products/"+id);
  }
  findProductById(id: number): Observable<Product> {
    return this.http.get<Product> ("http://localhost:8080/products/"+id);
  }
  updateProduct(id: number,product: Product): Observable<Product> {
    return this.http.put<Product> ("http://localhost:8080/products/"+id,product);
  }

}

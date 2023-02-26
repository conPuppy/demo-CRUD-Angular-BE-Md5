import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from 'src/app/model/Product';
import {ProductServiceService} from 'src/app/service/product-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  products: Product[] = [];

  // tiêm service
  constructor(private productService: ProductServiceService, private router: Router) {
  }

//     bắn bên component:
  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    })
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(data => {
      this.productService.getAll().subscribe(data => {
        this.products = data;
      })
    })
  }


}

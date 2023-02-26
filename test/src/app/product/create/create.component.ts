import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from 'src/app/model/Product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formCreate!: FormGroup

  constructor(private productService : ProductServiceService, private router: Router ) {
  }

  ngOnInit(): void {
        this.formCreate = new FormGroup({
          name: new FormControl(""),
          img: new FormControl(""),
          price: new FormControl(""),
          status: new FormControl(true),
        })

    }
    create() {
      this.productService.createProduct(this.formCreate.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(["/home"]);
      })
    }


}

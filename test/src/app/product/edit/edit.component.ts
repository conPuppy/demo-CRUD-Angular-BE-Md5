import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from 'src/app/model/Product';
import {ProductServiceService} from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  product: Product | undefined
  formEdit: FormGroup  = new FormGroup({
    id: new FormControl(0),
    name: new FormControl("0"),
    img: new FormControl("0"),
    price: new FormControl("0")
  });


  // constructor(private router: Router, private productService: ProductServiceService, private route: ActivatedRoute) {
  //
  // }
  //
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   if (this.id != null) {
  //     console.log(this.id);
  //    
  //     this.showEdit(this.id);
  //
  //   }
  // }
  //
  // showEdit(id: number) {
  //   this.productService.findProductById(this.id).subscribe((data) => {
  //     this.product = data;
  //     this.formEdit.get("id")?.setValue(this.id);
  //     this.formEdit.get("name")?.setValue(this.product.name);
  //     this.formEdit.get("img")?.setValue(this.product.img);
  //     this.formEdit.get("price")?.setValue(this.product.price);
  //   })
  // }
  edit() {
      this.productService.updateProduct(this.id,this.formEdit.value).subscribe((data)=>{
        alert("vao");
        console.log(data);
        this.router.navigate(["/home"]);
      })
  }

  // id: any;
  // product: Product | undefined
  // formEdit!: FormGroup;
  //
  //
  constructor(private router: Router, private productService: ProductServiceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      console.log(this.id);
      this.productService.findProductById(this.id).subscribe(data=>{
        this.product = data;
        console.log(this.product);
        console.log(this.product.name);
        this.formEdit = new FormGroup({
          name: new FormControl(this.product?.name),
          img: new FormControl(this.product?.img),
          price: new FormControl(this.product?.price)
        })
      })

    }
  }


}

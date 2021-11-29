import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var M:any;

import { ProductsService } from 'src/app/shared/products.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers:[ProductsService]
})
export class AddComponent implements OnInit {

  constructor(public productsService:ProductsService) {
    
   }

  ngOnInit(): void {
    this.resetForm(); 
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.productsService.selectedProducts = {
      _id: "",
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      title:"",
      category:"",
      price:"",
      description:"",
    }
  }

onSubmit(form:NgForm){
  
  
  this.productsService.postProduct(form.value).subscribe((res) => {
    M.toast({ html: 'Saved successfully', classes: 'rounded' });

    this.resetForm(form);
   
});



  }

}

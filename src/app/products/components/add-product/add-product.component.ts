import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    if (!this.data.product) {
      this.productForm = this._formBuilder.group({
        name: new FormControl('', Validators.required),
        serial_number: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
      });
    }
    if (this.data.product) {
      this.productForm = this._formBuilder.group({
        id: new FormControl(this.data.product.id, Validators.required),
        name: new FormControl(this.data.product.name, Validators.required),
        serial_number: new FormControl(this.data.product.serial_number, Validators.required),
        price: new FormControl(this.data.product.price, Validators.required)
      });
    }
    
  }

  get name(): FormControl {
    return this.productForm.get('name') as FormControl;
  }

  get serial_number(): FormControl {
    return this.productForm.get('serial_number') as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get('price') as FormControl;
  }

  saveProduct(product: ProductsModel): void {
    this.dialogRef.close({ product: product, action: this.data.action });
  }

}

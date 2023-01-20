import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductDeleteConfirmComponent } from './components/product-delete-confirm/product-delete-confirm.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    AddProductComponent,
    ProductDeleteConfirmComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class ProductsModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsModel } from '../../models/products.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDeleteConfirmComponent } from '../product-delete-confirm/product-delete-confirm.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'serial_number', 'price', 'actions'];
  dataSource!: MatTableDataSource<ProductsModel[]>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private readonly productsService: ProductsService,  private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(resp => {
      const productos: ProductsModel[] = [];
      resp.forEach((element: any) => {
        productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.dataSource = new MatTableDataSource<any>(productos);
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteLine(product: ProductsModel): void {
    const dialogRef = this.dialog.open(ProductDeleteConfirmComponent, {
      data: product
    });
    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.productsService.deleteProduct(product.id).then(() => {
          this._snackBar.open('Product deleted successfuly');
        })
        .catch(error => {
          this._snackBar.open(error);
        });
      }
    });
  }

  openDialog(action: string, product: any): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '55%',
      disableClose: true,
      data: {
        product: product,
        action: action
      }
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp.action === 'add') {
        this.productsService.addProduct(resp.product).subscribe((resp: any) => {
          this._snackBar.open('Product add successfuly');
        })
        error: (error: any) => {
          this._snackBar.open(error);
        }
      }
      if (resp.action === 'edit') {
        if (resp.product.id) {
          this.productsService.editProduct(resp.product).subscribe((resp: any) => {
            this._snackBar.open('Product edited successfuly');
            }
          )
          error: (error: any) => {
            this._snackBar.open(error);
          }
        }
      }
    });
    
  }

  onRowClick(row: ProductsModel) {
    //console.log(row);
  }

}

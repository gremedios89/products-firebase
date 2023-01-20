import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-confirm',
  templateUrl: './product-delete-confirm.component.html',
  styleUrls: ['./product-delete-confirm.component.css']
})
export class ProductDeleteConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<ProductDeleteConfirmComponent>) { }

  ngOnInit(): void {
    
  }

  delete(id: string): void {
    this.dialogRef.close({ id: id});
  }

}

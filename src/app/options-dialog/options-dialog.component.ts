import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  rowdata:any;
  }
@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent{

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    openEditDialog(value){
 console.log(value);
    }
    onNoClick(): void {
      this.dialogRef.close();
    } 
}

import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource,} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}*/

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Gold', weight: 12.0107, symbol: 'C'},
  {position: 12, name: 'Titanium', weight: 14.0067, symbol: 'N'},
  {position: 13, name: 'lead', weight: 15.9994, symbol: 'O'},
  {position: 14, name: 'Copper', weight: 18.9984, symbol: 'F'},
  {position: 15, name: 'Nickel', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-all-incidents',
  templateUrl: './all-incidents.component.html',
  styleUrls: ['./all-incidents.component.scss']
})
export class AllIncidentsComponent implements OnInit {
  displayedColumns = ['position','name', 'weight', 'symbol'];
  highlightedRows=[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    //Add service
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue:string){
    this.dataSource.filter= filterValue.trim().toLowerCase();
  }
  openOptionsDialog(row){
      //console.log(row);
    this.dialog.open(OptionsDialogComponent,
      {
      data: {rowdata:row}
    });
  }
}

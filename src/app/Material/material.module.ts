import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
   // imports: [],
    exports: [MatMenuModule,MatButtonModule,MatToolbarModule,MatTabsModule,MatTableModule,MatSortModule,MatPaginatorModule,MatFormFieldModule,
MatInputModule,MatDialogModule,MatCardModule,MatIconModule]
  })
  export class MaterialModule { }
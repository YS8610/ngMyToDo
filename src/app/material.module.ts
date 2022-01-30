import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCardModule} from '@angular/material/card';


const MATERIAL = [
  MatButtonModule, MatIconModule,
  MatInputModule, MatCheckboxModule,
  MatFormFieldModule, MatRadioModule,
  MatDatepickerModule, MatDividerModule,
  MatNativeDateModule, MatCardModule
];

@NgModule({
imports: MATERIAL,
exports: MATERIAL
})
export class MaterialModule{}

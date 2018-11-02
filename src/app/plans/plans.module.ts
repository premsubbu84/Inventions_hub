import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';
import { MembersComponent } from '../members/members.component';
import { PlansService } from './plans.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products/products.service';


@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, 
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    },
    {
      path: 'plans',
      component: PlansComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    }
    ])
  ],
  declarations: [
    PlansComponent,ProductsComponent
  ],
  exports: [ProductsComponent],
  providers: [PlansService,ProductsService],
})
export class PlansModule { }

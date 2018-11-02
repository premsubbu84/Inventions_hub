import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { MembersComponent } from '../members/members.component';
import { MemberdetailsComponent } from '../memberdetails/memberdetails.component';
import { GroupsService } from './groups.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlansModule } from '../plans/plans.module';
// import { ProductsComponent } from '../products/products.component';
// import { ProductsService } from '../products/products.service';
import { MembersService } from '../members/members.service';


// const routes: Routes = [
//   { path: 'groups', component: GroupsComponent },
// ];

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule,PlansModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'groups',
      pathMatch: 'full'
    },
    {
      path: 'groups',
      component: GroupsComponent
    },
    {
      path: 'members/:groupid',
      component: MembersComponent
    },
    {
      path: 'memberdetails/:memberid/:groupid',
      component: MemberdetailsComponent
    }
    // {
    //   path: 'products',
    //   component: ProductsComponent
    // }
    ])
  ],
  declarations: [
    GroupsComponent,
    MembersComponent,
    MemberdetailsComponent
    //ProductsComponent

  ],
  exports: [],
  providers: [GroupsService, MembersService],
})
export class GroupsModule { }

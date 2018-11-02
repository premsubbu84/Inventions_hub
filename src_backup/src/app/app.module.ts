import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { InventionsService } from './inventions/inventions.service';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
//import { ProductsComponent } from './products/products.component';
//import { GroupsComponent } from './groups/groups.component';
//import { GroupsService } from './groups/groups.service';
import { MembersComponent } from './members/members.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { GroupsModule } from './groups/groups.module';
import { PlansComponent } from './plans/plans.component';
import { ProductsService } from './products/products.service';
import { PlansModule } from './plans/plans.module';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'inventions',
        component: InventionsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      }
    ]),
    CommonModule,
    BrowserModule,
    FormsModule,
    GroupsModule,
    PlansModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  static forRoot() {
    return {
      ngModule: PlansModule
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "./products.service";
import { Product } from "./products.class";
import { Member } from "../members/members.class";
import { ProductItem } from "./products.class";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Product[] = this.getAllProducts();
  dentalProductItemList: ProductItem[] = this.getAllDentalProductsItems();
  visionProductItemList: ProductItem[] = this.getAllVisionProductsItems();
  selectedSortOrder: string = "Select Product";
  selectedDentalProduct: string = "Select Product";
  selectedDentalProductId: number = -1;
  selectedVisionProduct: string = "Select Product";
  selectedVisionProductId: number = -1;

  @Input() workingMember: Member;
  @Input() workingGroupId: number;



  @Output() change: EventEmitter<Member> = new EventEmitter<Member>();


  constructor(
    private groupsService: ProductsService,
     private router: Router,
    private route: ActivatedRoute
  ) { }
  

  ngOnInit() {
  }

  getAllProducts(): Product[] {
    return this.groupsService.getAllProducts();
  }

  getAllDentalProductsItems(): ProductItem[] {
    return this.groupsService.getAllDentalProductItems();
  }

  getAllVisionProductsItems(): ProductItem[] {
    return this.groupsService.getAllVisionProductItems();
  }

  ChangeSortOrder(newSortOrder: string) {
    this.selectedSortOrder = newSortOrder;
  }

  ChangeDentalOrder(newSortOrder: string, selectedDentalProductId: number) {
    this.workingMember.memberDentalProductId = selectedDentalProductId;
    this.selectedDentalProduct = newSortOrder;
  }

  ChangeVisionOrder(newSortOrder: string, selectedVisionProductId: number) {
    this.workingMember.memberVisionProductId = selectedVisionProductId;
    this.selectedVisionProduct = newSortOrder;
  }


  updateParent() {
   
    
    this.change.emit(this.workingMember);
    this.router.navigate(['/members',this.workingGroupId]);
    //this.router.navigateByUrl('/members:' , {groupid : this.workingMember.memberId}]);
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Group } from '../groups//groups.class';
import { Member } from '../members/members.class';
import { FormsModule } from '@angular/forms';
import { GroupsService } from '../groups/groups.service';
import { MembersService } from '../members/members.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';



@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.css']
})

export class MemberdetailsComponent implements OnInit {

  memberId: String;
  workingMember: Member;
  dentalProductName: String;
  visionProductName: String;
  workingGroupId: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupsService: GroupsService,
    private productService: ProductsService,
    private membersService: MembersService
  ) {

    this.memberId = this.route.snapshot.paramMap.get('memberid');
    this.workingGroupId = this.route.snapshot.paramMap.get('groupid');
  }

  ngOnInit() {
    this.getGroupByGroupId();
  }

  updateFromChild(memberFromChild) {
    let memFromSr : Member;
    this.membersService.updateMember(this.workingMember)
    this.membersService.getMemberByMemberId(this.workingMember.memberId)
    .subscribe( m => { memFromSr = m; console.log(memFromSr.memberDentalProductId);});


  }
  getProductName() {

    if (this.workingMember.memberDentalProductId != 0) {
      this.dentalProductName = this.productService.getProductNameById(1, this.workingMember.memberDentalProductId);
    } else { this.dentalProductName = "Not Assigned" }

    if (this.workingMember.memberVisionProductId != 0) {
      this.visionProductName = this.productService.getProductNameById(2, this.workingMember.memberVisionProductId);
    } else { this.visionProductName = "Not Assigned" }
  }

  getGroupByGroupId(): void {
    let paramMemId = this.route.snapshot.paramMap.get('memberid');
    let paramGrpId = this.route.snapshot.paramMap.get('memberid');

    this.groupsService.getGroupByGroupId(paramGrpId)
      .subscribe(g => {
        this.workingMember = g.members.find(m => m.memberId == Number(paramMemId));
        this.getProductName();
      });

  }


}



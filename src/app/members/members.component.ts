import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Group } from '../groups/groups.class';
import { Member } from '../members/members.class';
import { GroupsService } from '../groups/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../members/members.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  memberIdModel: number = 0;
  memberNameModel: string;
  memberAddressModel: string;
  memberAgeModel: string;
  memberZipcodeModel: string;
  workingGroupId: string;
  workingGroup: Group = new Group();
  workingMember: Member;
  groups: Group[];
  members: Member[] = [];
  totalMembers: number = 0;

  memberFromAPI: Member[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupsService: GroupsService,
    private memberService: MembersService

  ) {

  }

  ngOnInit() {
    this.getMembers();
    this.getGroupByGroupId();
  }

  createMember(memberid) {

    if (memberid == 0) {

      this.totalMembers += 1;
      let newMember: Member = {
        id: this.getId(),
        memberId: this.getId(),
        memberAddress: this.memberAddressModel,
        memberName: this.memberNameModel,
        memberZipcode: this.memberZipcodeModel,
        memberAge: this.memberAgeModel,
        memberDentalProductId: 0,
        memberVisionProductId: 0

      }
      this.saveNewMember(newMember);


    }
    else {
      let newMember: Member = {
        id: memberid,
        memberId: memberid,
        memberAddress: this.memberAddressModel,
        memberName: this.memberNameModel,
        memberZipcode: this.memberZipcodeModel,
        memberAge: this.memberAgeModel,
        memberDentalProductId: 0,
        memberVisionProductId: 0

      }
      this.memberService.updateMember(newMember);
      this.getMembers();
    }

    this.memberIdModel = 0;
    this.memberZipcodeModel = this.memberAgeModel = this.memberAddressModel = this.memberNameModel = '';
    this.workingGroup.members = this.members;

  }

  editMember(memberId, isdelete) {
    for (var i = 0; i < this.memberFromAPI.length; i++) {
      if (this.memberFromAPI[i].memberId == memberId) {
        if (isdelete == 1) {
          //this.memberFromAPI.splice(i, 1);
          this.deleteMember(this.memberFromAPI[i]);
        }
        else {
          this.memberIdModel = this.memberFromAPI[i].memberId;
          this.memberNameModel = this.memberFromAPI[i].memberName;
          this.memberAddressModel = this.memberFromAPI[i].memberAddress;
          this.memberZipcodeModel = this.memberFromAPI[i].memberZipcode;
          this.memberAgeModel = this.memberFromAPI[i].memberAge;
        }
      }
    }
  }

  getId() { return this.totalMembers }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(mems => {
        this.memberFromAPI = mems;
        this.totalMembers = this.memberFromAPI.length;
      });

  }

  saveMember(updatedMember: Member): void {
    this.memberService.updateMember(updatedMember)
      .subscribe();
  }

  getGroupByGroupId(): void {
    this.groupsService.getGroupByGroupId(this.route.snapshot.paramMap.get('groupid')).subscribe(g => {
      this.workingGroup = g;
      this.members = this.workingGroup.members;
      if (this.members.length > 0) {
        this.memberIdModel = this.workingGroup.members[0].memberId;
        this.memberNameModel = this.workingGroup.members[0].memberName;
        this.memberAddressModel = this.workingGroup.members[0].memberAddress;
        this.memberAgeModel = this.workingGroup.members[0].memberAge;
        this.memberZipcodeModel = this.workingGroup.members[0].memberZipcode;
      };
    });
  }

  saveNewMember(newMember: Member): void {
    console.log("Save member");
    console.log(this.route.snapshot.paramMap.get('groupid'));
     let newGrp: Group;
    // let paramGroupId;
    // paramGroupId = this.route.snapshot.paramMap.get('groupid');

    // this.memberService.createMember(newMember).toPromise().then();

    
    this.groupsService.getGroupByGroupId(this.route.snapshot.paramMap.get('groupid')).subscribe(g => {
      newGrp = g;
      newGrp.members.push(newMember);
      this.groupsService.updateGroup(newGrp);
      this.groupsService.getGroupByGroupId((this.route.snapshot.paramMap.get('groupid')))
        .subscribe(gr => { console.log(gr); });
    });

    this.memberService.createMember(newMember);
    this.getMembers();  
  }

deleteMember( deletingMember : Member ) : void
{
  this.memberService.deleteMember(deletingMember).subscribe();
  this.getMembers();
}

}

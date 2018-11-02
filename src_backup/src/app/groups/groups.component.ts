import { Component, OnInit } from '@angular/core';
import { Group } from './groups.class';
import { Member } from '../members/members.class';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from './groups.service';
import{ GroupsModule } from './groups.module';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: []
})
export class GroupsComponent implements OnInit {

  groupIdModel: number;
  groupNameModel: string;
  groupAddressModel: string;
  groupZipCodeModel: string;
  policyNumberModel: string;
  membersModel: Member[] = [];
  totalGroups: number;
  groups: Group[]=[];

  constructor(
    private groupsService: GroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.groupIdModel = 0;
    this.groupNameModel = '';
    this.groupAddressModel = '';
    this.groupZipCodeModel = '';
    this.policyNumberModel = '';
    this.membersModel;

    //this.groups : Group[] // this.getAllGroups();
    this.totalGroups = this.groups.length;
  }

  ngOnInit() {
    this.getAllGroups();
  }

  GetGroups() {
    return this.groupsService.getAllGroups();
  }

  createGroup(groupid,addMember: Number) {

    for (var i = 0; i < this.groups.length; i++) {
      if (this.groups[i].groupId == groupid) {
        this.groups[i].groupName = this.groupNameModel;
        this.groups[i].groupAddress = this.groupAddressModel;
        this.groups[i].groupZipCode = this.groupZipCodeModel;
      }
    };

    if (groupid == 0) {
      this.totalGroups = this.totalGroups+1;
      let newGroup: Group = {
        groupId: this.getId(),
        groupAddress: this.groupAddressModel,
        groupName: this.groupNameModel,
        groupZipCode: this.groupZipCodeModel,
        policyNumber: this.policyNumberModel,
        members: this.membersModel
      }
      this.saveNewGroup(newGroup);
    };
    this.groupIdModel = 0;
    this.groupAddressModel = this.groupNameModel = this.groupZipCodeModel = this.policyNumberModel = '';
    //this.updateGroupDB(this.groups);
  }

  getId() { return this.totalGroups }

  getAllGroups() : void {
    this.groupsService.getAllGroups().subscribe(g => { this.groups = g; 
      this.totalGroups = this.groups.length;
    });
  };
  
  // updateGroupDB(updatedGroups: Group []) {
  //   this.groupsService.updateGroups(updatedGroups);
  // };

  editGroup(groupid, isdelete) {
    for (var i = 0; i < this.groups.length; i++) {
      if (this.groups[i].groupId == groupid) {
        if (isdelete == 1) {
            this.groups.splice(i,1);
        }
        else {
          this.groupIdModel = this.groups[i].groupId;
          this.groupNameModel = this.groups[i].groupName;
          this.groupAddressModel = this.groups[i].groupAddress;
          this.groupZipCodeModel = this.groups[i].groupZipCode;
          this.groupsService.updateGroup(this.groups[i]);
        }
      }
    }
    //this.updateGroupDB(this.groups);
  }

saveGroup(updateGroup : Group): void {
   this.groupsService.updateGroup(updateGroup)
     .subscribe();
 }

saveNewGroup(updateGroup : Group): void {
    this.groupsService.createGroup(updateGroup).subscribe();
    this.getAllGroups();  
 }

}

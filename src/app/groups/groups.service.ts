import { Injectable } from '@angular/core';
import { Group } from './groups.class';
import { Member } from '../members/members.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GroupsService {

  // membersList: Member[] = [
  //   {
  //     memberId: 1,
  //     memberName: 'Member-1',
  //     memberAge: '19',
  //     memberAddress: 'Member Address - 1',
  //     memberZipcode: '560037',
  //     memberDentalProductId: 0,
  //     memberVisionProductId: 0
  //   }
  // ]

  // rawGroups: Group[] = [
  //   {
  //     groupId: 1,
  //     groupName: 'Neudesic',
  //     groupAddress: 'OAK Building',
  //     groupZipCode: '560037',
  //     policyNumber: 'PO_001',
  //     members: this.membersList
  //   }
  // ]


  constructor(
    private http: HttpClient
  ) {
  }

  private groupsUrl = '/api/groups';  // URL to web api
  private membersUrl = '/api/members';  // URL to web api

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  // deleteGroup(groups, groupId): Group[] {
  //   for (var i = 0; i < groups.length; i++) {
  //     if (groups[i].groupId == groupId) {

  //       groups.splice(i, 1);
  //     }
  //   }
  //   return groups;
  // };

  // updateGroups(updatedGroups: Group[]) {
  //   this.rawGroups = updatedGroups;
  // };

  // getGroupByGroupId(groupId) : Group {
  //   for (var i = 0; i < this.rawGroups.length; i++) {
  //     if (this.rawGroups[i].groupId == groupId) {
  //       return this.rawGroups[i];
  //     } else { return null; }
  //   }
  // };

  // getGroupByGroupId(groupId): Group {
  //   return this.rawGroups.find(group => group.groupId == groupId);
  // }

  getGroupByGroupId(groupId): Observable<Group> {
    const url = `${this.groupsUrl}/${groupId}`;
    return this.http.get<Group>(url);
  }



  // updateMember(updatedGroup: Group) {
  //   this.rawGroups.find(group => group.groupId == updatedGroup.groupId).members = updatedGroup.members;
  //   //this.rawGroups.filter(group => group.groupId === updatedGroup.groupId).members = updatedGroup.members;
  // }

  // updateMemberPlans(updatedMember: Member) {
  //   this.membersList.find(member => member.memberId == updatedMember.memberId).memberDentalProductId = updatedMember.memberDentalProductId;
  //   this.membersList.find(member => member.memberId == updatedMember.memberId).memberVisionProductId = updatedMember.memberVisionProductId;
  //   //this.rawGroups.filter(group => group.groupId === updatedGroup.groupId).members = updatedGroup.members;
  // }

  // getMemberByMemberId(paramMemberId): Member {
  //   return this.membersList.find(member => member.memberId == paramMemberId);
  // }

  // getMemberByMemberId(id: number): Observable<Member> {
  //   const url = `${this.membersUrl}/${id}`;
  //   return this.http.get<Member>(url);
  // }

  getGroupsFromApi(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  /** PUT: update group on the server */
  updateGroup(group: Group): Observable<any> {
    let url = `${this.groupsUrl}/${group.groupId}`;
    return this.http.put(url, group, httpOptions);
  }

  /** POST: Creat group on the server */
  createGroup(group: Group): Observable<any> {
    console.log(group);
    
    let url = `${this.groupsUrl}/${group.groupId}`;
    return this.http.post(url, group, httpOptions);
  }

  deleteGroup(delGroup: Group): Observable<any> {
  const url = `${this.groupsUrl}/${delGroup.groupId}`;
  return this.http.delete<Group>(url, httpOptions);
}

}

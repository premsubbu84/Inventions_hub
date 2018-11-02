import { Injectable } from '@angular/core';
import { Member } from '../members/members.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MembersService {

  memberList: Member[];

  constructor(
    private http: HttpClient
  ) { }


  private membersUrl = '/api/members';  // URL to web api

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
      tap(mems => this.log(`fetched members`))
      );
  }

  private log(message: string) {
    console.log('Service called' + message);
  }

  /** PUT: update the hero on the server */
  updateMember(member: Member): Observable<any> {
    this.getMemberByMemberId(member.memberId).subscribe(a=>console.log(a)    );
    let newMember = {
        id : 2,
        memberId: 2,
        memberName: "Test Me,sdasdvfajvhfmber 2",
        memberAge: "23",
        memberAddress: "Address 2",
        memberZipcode: "560067",
        memberDentalProductId: 1,
        memberVisionProductId: 1
      }
    console.log(member);
    member.id = member.memberId;
    console.log(newMember);
    
    
    //  this.getMembers().subscribe(a=>console.log(a))    
    let url = `${this.membersUrl}/${member.memberId}`;
    this.http.put(url, member, httpOptions).subscribe(a=>console.log(a)
    )
    this.getMembers().subscribe(a=>console.log(a))    
    return this.http.put(url, member, httpOptions);
  }

  createMember(member: Member): Observable<any> {
    this.getMembers().subscribe(a=>console.log(a))    
    let url = `${this.membersUrl}/${member.memberId}`;
    this.http.post(url, member, httpOptions).subscribe(a=>console.log(a)
    )
    this.getMembers().subscribe(a=>console.log(a))    
    return this.http.post(url, member, httpOptions);
  }


  getMemberByMemberId(memberId): Observable<Member> {
    const url = `${this.membersUrl}/${memberId}`;
    return this.http.get<Member>(url);
  }

  deleteMember(member : Member): Observable<Member> {
    const url = `${this.membersUrl}/${member.memberId}`;
    return this.http.delete<Member>(url, httpOptions);
  }


}

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
    let url = `${this.membersUrl}/${member.memberId}`;
    return this.http.put(url, member, httpOptions);
  }

  createMember(member: Member): Observable<any> {
    console.log(member);
    
    let url = `${this.membersUrl}/${member.memberId}`;
    return this.http.post(url, member, httpOptions);
  }


  getMemberByMemberId(memberId): Observable<Member> {
    const url = `${this.membersUrl}/${memberId}`;
    return this.http.get<Member>(url);
  }

}

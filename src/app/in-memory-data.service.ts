import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id : 1,
        memberId: 1,
        memberName: "Test Member 2",
        memberAge: "23",
        memberAddress: "Address 2",
        memberZipcode: "560067",
        memberDentalProductId: 1,
        memberVisionProductId: 1
      }];
    const groups = [
      {
        id : 1,
        groupId: 1,
        groupName: 'Neudesic From Api',
        groupAddress: 'OAK Building',
        groupZipCode: '560037',
        policyNumber: 'PO_001',
        members: members
      }];
    return { members, groups };
  }
}
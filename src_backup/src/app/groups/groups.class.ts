import { Member }  from '../members/members.class';

export class Group {

    groupId: number;
    groupName: string;
    groupAddress: string;
    groupZipCode: string;
    policyNumber: string;
    members : Member[];
}
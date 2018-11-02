import { Injectable } from '@angular/core';
import { Plan } from './plans.class';

@Injectable()
export class PlansService {

  planList: Plan[] = [

    {
      PlanId: 1,
      PlanName: "Self"
    },
    {
      PlanId: 2,
      PlanName: "Self + 1 Dep"
    },
    {
      PlanId: 3,
      PlanName: "Self + 2 Dep"
    },
    {
      PlanId: 4,
      PlanName: "Self + Family(4Dep)"
    }
  ]

  constructor() { }

  getAllPlans(): Plan[] {
    return this.planList;
  }

}

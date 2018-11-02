import { Component, OnInit } from '@angular/core';
import { Plan } from './plans.class';
import { PlansService } from './plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plansList: Plan[] = this.getAllPlans();
  selectedPlan: string = "Select Plan";
  selectedPlanId: number = -1;

  constructor(
    private planService: PlansService
  ) { }

  ngOnInit() {
  }

  getAllPlans(): Plan[] {
    return this.planService.getAllPlans();
  }

  ChangePlanOrder(newSortOrder: string) {
    this.selectedPlan = newSortOrder;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InventionsService } from '../inventions/inventions.service'; 
import { Invention } from '../inventions/inventions.class'; 


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit  {

  id : string; 
  invention : Invention; 
  constructor(
    private route: ActivatedRoute,
    private router: Router , 
    private service : InventionsService

  ) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invention = this.service.inventionDetails(+this.id);
  }

  initialize() {
  }

}

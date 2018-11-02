
// inventions.component.ts 

import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { Invention } from './inventions.class';
import { InventionsService } from './inventions.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'] ,
  providers: []
})
export class InventionsComponent implements OnInit {
  nameModel : String; 
  inventorModel : String; 
  yearModel : String; 
  detailsModel : String; 
  inventions : Invention[]; 
  totalInventions : number; 
    
  constructor( 
        private inventionsService : InventionsService , 
        private router: Router 
         ) { 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailsModel = '';
    
    // Call service method getInventions()  
    this.inventions = inventionsService.getInventions(); 
    this.totalInventions = this.inventions.length; 
  }

  ngOnInit() {
  }

  createInvention(){

    this.totalInventions += 1; 
    let newInvention : Invention = {
      id : this.getId(), 
      name: this.nameModel , 
      inventor : this.inventorModel , 
      year : this.yearModel , 
      details : this.detailsModel
    };

    this.inventions.push( newInvention ); 
    this.nameModel = this.yearModel = this.inventorModel = ''; 
  }

  details( id ) {
     this.router.navigate(['/details' , id ]);
  }

  getId() { 
    return this.totalInventions ; 
  }

}
 



// inventions.service.ts 

import { Injectable } from '@angular/core';
import { Invention } from './inventions.class'; 


@Injectable()
export class InventionsService {
// updated the mock data about inventions to reflect id and details parameters 
 rawInventions : Invention[] = [
  {
    id : 1 , 
    name : 'Java',
    inventor : 'James Ghosling',
    year : '1995' , 
    details : 'java is an object oriented language '
  } , 
  {
    id : 2 , 
    name : 'Python', 
    inventor : 'Guido van Rosum',
    year: '1991' , 
    details: 'python is simple yet powerful scripting language '
  } , 
  {
    id : 3 , 
    name : 'C++',
    inventor : 'Bjarne Stroustrup',
    year : '1983' , 
    details : ' C++ is the language if you want to make things run faster '
  }
]

  constructor() {
    
   }

   getInventions() : Invention[] {
     return this.rawInventions;     
   }

   
   // added a new method to fetch an invention based on its id 
   inventionDetails( id ) : Invention { 
     for ( var i = 0 ; i < this.rawInventions.length ; i++ ) {
       if ( this.rawInventions[i].id == id )  {
         return this.rawInventions[i]; 
       }
     }
     return null; 
    }


}


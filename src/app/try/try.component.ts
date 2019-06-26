import { Component, OnInit } from '@angular/core';
import { shouldCallLifecycleInitHook, shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  employees =[];

  sho: any = {};
  sho2: any = {};
  addemp()
  {
  this.employees.push(this.sho);
  this.sho = {}; 
  }

  delete(index)
  {
   this.employees.splice(index, 1);
 
  }
 val;
  editemployee(k)
  {
    console.log(k);
    
   this.sho2.name = this.employees[k].name;
   this.sho2.surname = this.employees[k].surname;
   this.sho2.position = this.employees[k].position;
   this.sho2.Organization = this.employees[k].Organization;
   this.sho2.image = this.employees[k].image;
   this.val = k;
  }

  updateEmployee()
  {
    console.log("Programmer");
    let k = this.val;
    for(let i = 0;i<this.employees.length;i++)
    {
     console.log(i); 
     if(i==k)
     {
      this.employees[i] = this.sho2;
      this.sho2 = {};
       
     }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

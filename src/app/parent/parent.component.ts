import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
   login:boolean=false;

   loveManga:boolean=true;

   like(){
     this.loveManga=true;
   }
   dislike(){
     this.loveManga=false;
   }

   items=[1,2,3];
   addItem(value:number){
     this.items.push(value);
   }

   getChildValue(val:any){
     console.log(val);
   }
}

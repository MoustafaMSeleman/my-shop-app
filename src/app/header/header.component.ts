import { Component } from '@angular/core';
import { Logger } from '../MyDoc/Service';
import { NavBarService } from './navBar.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // menuItems: string[] = ['HOME', 'News', 'PRODUCTS'];
  menuItems;
  public textClass:string="text-success";
  public textSpecial:string="text-special";
  public hasError:boolean=true;
  public isSpecial:boolean=true;
  public currentClasses:Object={
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  };
  public titleStyle:object={
    color:"blue",
    fontStyle:"italic"
  };

  constructor(items: NavBarService) {
    this.menuItems = items.getNavBarItems();
  }
   testBindingString : string = "Binding string";
   imageUrl:string="../assets/images/Dodge.jpg";
   
   onKeyUp($event: any){
    //  alert("DONE!");
   }
   onBlur(){
     alert("Blur");
   }

   onSave($event: { stopPropagation: () => void; }){
     console.log($event);
    //  $event.stopPropagation();
     alert("Hello from event binding -- onSave()");
   }
   onDivClick(){
    alert("Hello from event binding -- onDivClick()");
   }
   inputFieldValue:string="";
   hiddenP=document.getElementById("hiddenP");
   onKeyEnter($event:any){
     console.log(`Before assign value:  ${this.hiddenP}`);
     console.log(`event.target.value : ${$event.target.value}`);
     this.hiddenP=$event.target.value;
     console.log(`After assign value:  ${this.hiddenP}`);
     this.setTextToHiddenp($event.target.value);
  }
   setTextToHiddenp(str:string){
     const obj=document.getElementById("hiddenP");
     if(obj != null){
      obj.innerText=str;
     }
   }
   onKeyEnterWithTemplate(name:any){
     console.log(name.value);
   }
   
   tempVar(name:string){
     console.log(name);
     let p4 = document.getElementById("p4");
     if(name !="" && p4!=null)
     {
     p4.innerText=name;

     }
   }
   
   

}

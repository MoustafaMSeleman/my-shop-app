import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  // interpolation
  name:string = "Moustafa";
  imgUrl:string ="https://picsum.photos/200" 

  count:number=0;
  incrementCount(){
    this.count+=1; 

  }
  
  email: string="";
  username: string="";
  username2: string="";


  updateUsername(uname:string){
    this.username=uname;
  }
  updateUsername2(uname2:string){
    this.username2=uname2;
    if(uname2==="Moustafa"){
      alert(`Welcome Back ${uname2}`);
    }
  }

   private _phone:string="";

   get phone(){
     return this._phone;
   }

   set phone(value:string){
     this._phone=value;
   }


}

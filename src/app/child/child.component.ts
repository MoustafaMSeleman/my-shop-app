import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input("signin") loggedIn!: boolean;
 private _loveMango!:boolean;
 love!:string;
 private _childMail!:string;
 private _salary!:number;
 @Output() exportedSalary = new EventEmitter<number>();
 @Output() newConsoleMsg = new EventEmitter();


 get loveMango(){
   return this._loveMango;
 }
  @Input() set loveMango(value:boolean){
   this._loveMango=value;
   if(value===true){
     this.love="Love";
     this.loggedIn=true;
   }
   else{
     this.love="Dislike";
     this.loggedIn=false;
   }
 }

@Input() get childMail():string{
   return this._childMail;
 }
 set childMail(value:string){
   this._childMail=value;
 }

get salary (){
  return this._salary;
}
set salary (value:number){
  this._salary=value;
}
sendSalary(value:any){
  
  this.salary=parseInt(value);
  this.exportedSalary.emit(value);

}

fnForMsg(value:any){
  this.newConsoleMsg.emit(value);
}

}

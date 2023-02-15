import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  private _show:boolean =true;
  private _buttonText:string = "Hide";
  private _color="yellow";
  pages:string[]=["HOME","ABOUT","CONTACT"];

  get show(){
    return this._show;
  }

  set show(value:boolean){
    this._show=value;
  }

  get buttonString(){
    return this._buttonText;
  }

  set buttonString(value:string){
    this._buttonText=value;
  }

  showOrHide(){
    if(this.show===true){
       this.buttonString="Show";
       this.show=false;
       return;
      //  console.log(this.show);
    }
    else{
      this.buttonString="Hide";
      this.show=true;
      // console.log(this.show);


    }
  }

  get color():string{
    return this._color;
  }
 
  set color(value:string){
    this._color=value;
  }
  changeColor(){
    
    this.color="blue";
    
  }
}

/**
 * Binding
 * -------
 * - create a live connection between a part of the UI -created from a template- and the model -the component instance to 
 *   which the template belongs
 * 
 * - [1] text interpolations
 *   [2] property binding
 *   [3] event binding
 *   [4] two-way binding
 * 
 * - Binding always have 2 parts
 *    a) a target which will receive the bound value
 *    b) a template expression which produces a value from the model
 * 
 * - [1] Text Interpolation
 *   ----------------------
 *    - Interpolation refers to embedding expressions into marked up text.
 *    - by default, interpolation uses the double curly braces {{  }} as delimiters
 *    - to illustrate how interpolation works, consider an Angular component that 
 *          currentCustomer = "desha";
 *      use interpolation to display the value of this variable in the corresponding component template
 *          <h3>Current Customer : {{currentCustomer}} </h3>
 *    - in the following example, Angular evaluates the "title" and "itemImageUrl" properties to display 
 *          <p>{{title}}</p>
 *          <div>
 *              <img src="{{itemImageUrl}}">
 *          </div> 
 * 
 * - [2] Property Binding
 *  ---------------------
 *   - helps you to set values for properties of HTML elements
 *   - moves a value in one direction [component's property] ---> [target element property].
 *   - to bind to an element's property, 
 *        enclose it in [] "square brackets", which identifies the property as a target property.
 *   - a target property is the DOM property to which you want to assign a value.
 *         
 *         itemImageUrl = '../assests/photo1.svg'; 
 *         <img [src]="itemImageUrl">     *Property Binding*
 *         <img src="{{itemImageUrl}}">   *Interpolation*
 *   
 *   - without the brackets [], Angular treats the right-hand side as a string literal and sets the property to that static value
 *     
 * 
 *   [3] Event Binding
 *  ------------------
 *   - <button (click)="onSave()">Save</button>
 *         (click)--> target event name
 *         "onSave"-> template statement
 * 
 *   - event works from child to parent
 *      button on div 
 *      button event will be fired first then the div event.
 * 
 *      to stop div event --> $btnEvent.stopPropagation();
 * 
 * 
 *   - <input (keyup.enter)="onKeyEnter($event)">
 * 
 *     onKeyEnter($event){
 *       console.log($event.target.value);
 *     }
 * 
 *    The previous ex. is JS style --> using $event
 *    We have template var
 *            ............
 *        - template vars help you use data from one part of a template in another part of the template
 *        - use template vars to perform tasks as 
 *                     . respond to user input
 *                     . finely tune your app's forms
 *        - a template var can refer to the following :
 *                     . a DOM element within a template
 *                     . a directive or component
 *                     . a web component
 *       -  
 * -------------------------------------------------------------------------------------------------------
 * 
 *      Template
 *      --------
 *         - a blueprint for a fragment of a UI.
 *         - templates are written in HTML
 *         - Angular extends the HTML syntax in your templates with additional functionality
 *         - Almost all HTML syntax is valid template syntax
 *         - However, because an Angular template is only a fragment of the UI,
 *              it doesn't include elements such as <html>, <body>, or <base>
 *         - To eliminate the risk of **script injection attacks** 
 *              Angular doesn't support the <script> element in templates.
 *          
 * -------------------------------------------------------------------------------------------------------
 *      - template var syntax
 *        ...................
 *         - in the template, we use # to declare a template var.
 *              <input #phone placeholder="phone number"/>
 * 
 *         - refer to a template var anywhere in the component's template
 *              <input #phone placeholder="phone number"/>
 *              <button type="button" (click)="callPhone(phone.value)" > CALL </button>
 *   
 *         -  the previous ex. of $event
 *                <input (keyup.enter)="onKeyEnter($event)" >
 *                  onKeyEnter($event){
 *                    console.log($event.target.value);
 *                  }
 *  
 *            can be using template var
 *            
 *                  <input #name (keyup.enter)="onKeyEnter(name)">
 *                  <p>{{name.value}}</p>
 * ------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------------
 *                                   
 *                            .------------- Interpolation {{  }}------.
 *                            | .----------- Property Binding [] ----. |
 *                            | |                                    | |
 *                            | |                                    / \
 *                            | |                                   /   \
 *                           \   /                                   | |
 *                            \ /                                    | |
 *                         ----------                              -------      
 *                        | Template |<---Two-way Binding[()]---> | Class |
 *                         ----------                              -------
 *                            | |                                    / \
 *                            | |                                   /   \
 *                           \   /                                   | | 
 *                            \ /.--------Event Binding ()----------.| |
 *                            .---------------------------------------.
 * 
 * 
 * 
 *                   Template| --->> Event Binding () -->> | Class
 *                     Class | -->> Interpolation {{  }} -->> | Template
 *                     Class | -->> Property Binding [] -->> | Template
 *                     Class | <<-- Two-way Binding [()] -->> | Template
 * 
 * 
 * 
 *            Interpolation
 *            -------------
 *                  Class                                                 
 *                  .....
 *                         name:string="Moustafa"; 
 * 
 *                  Template
 *                  ........
 *                         <h1>{{ name }}</h1>
 * 
 *           Property Binding
 *           ----------------
  *                  Class                                                 
 *                   .....
 *                         imgUrl:string="https://picsum.photos/200"; 
 * 
 *                  Template
 *                  ........
 *                         <img [src]="imgUrl">
 * 
 *             
 *            Event Binding
 *            -------------
  *                  Template                                                 
 *                   .....
 *                         <button (click)="increaseCount()">Click</button>
 *                         <p>Clicked {{count}} times</p> 
 * 
 *                  Class
 *                  .....
 *                         count =0;
 *                         increaseCount(){
 *                             count+=1;
 *                          }  
 * 
 *             Two-way Binding
 *             ---------------
 *                 app.module.ts
 *                 .............
 *                    import { FormsModule } from '@angular/forms';
 *                    @NgModule({
 *                       declarations:[
 *                           AppComponent
 *                       ],
 *                       imports: [
 *                           BrowseModule,
 *                           FormsModule 
 *                       ],
 *                     })   
 * 
 *                 Template
 *                 ........
 *                    <input type="text" [(ngModel)] = "title">
 *                    <p> {{ title }} </p>
 *  
 *                 Class
 *                 .....
 *                      title:string;
 * ------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------------
 * 
 *   Directives
 *  ------------
 *   - directives are classes that add additional behavior to element in your Angular app.
 *   - Directive Types
 *     ...............
 *     [1] Component             ---> used with a template, the most common directive type
 *     [2] Attribute Directives  ---> change the appearance/behavior of an element/component/directive
 *     [3] Structural Directives ---> change the DOM layout by adding/removing DOM element
 * 
 *   -  Built-in Attribute Directives
 *      .............................
 *       - NgClass  ---> adds/removes a set of CSS classes
 *       - NgStyle  ---> adds/removes a set of HTML styles
 *       - NgModel  ---> adds two-way data binding to an HTML form element
 * 
 * 
 *   -  Built-in Structural Directives
 *      .............................
 *       - NgIF      ---> conditionally creates/disposes of subviews from the template
 *       - NgFor     ---> repeat a node for each item in a list
 *       - NgSwitch  ---> a set of directives that switch among alternative views
 * 
 *     ................................................................................
 *    
 *     Class and Style Binding
 *     .......................
 *       - use class and style bindings to add/remove CSS class names from an element's class attribute
 *         ----------------------
 *       - in CSS file
 *            .text-success{ color:green;}
 *            .text-danger{ color:red;}
 *            .text-special{ font-style:italic;}
 * 
 *        in HTML file
 *             <h2 class="text-success">Moustafa</h2>
 *         ----------------------
 * 
 *       - Until now no new
 *             in ts file
 *                 public successClass="text-success";
 *    
 *             in HTML file
 *                <h2 [class]="successClass">Moustafa</h2>
 *         ----------------------
 *    
 *        public hasError:boolean=true;
 * 
 *        <h2 [class.text-danger]="hasError">Error!</h2>    
 * 
 *   ................................................................................
 *    
 *     NgClass
 *     .......
 *        to multiple classes
 * 
 *              public hassError:boolean= true;
 *              public isSpecial:boolean= true;
 * 
 *              public currentClasses ={
 *                 "text-success": !this.hasError,
 *                 "text-danger" : this.hasError,
 *                 "text-special": this.isSpecial
 *               }
 * 
 *              <h2 [ngClass]="currentClasses">ngClass</h2>
 *   ................................................................................
 *      
 *    - <h2 [style.color]="'orange'">Style Binding</h2>
 * 
 *    - public hasError:boolean=true;
 *      <h3 [style.color]="hasError ? 'red' : 'blue'">Style Binding</h3>
 *                  
 *    - public absentColor:string="orange";
 *      <h4 [style.color]="absentColor">Style Binding</h4>
 * 
 *   ................................................................................
     NgStyle
     .......
        - public titleStyle={
            color:"blue",
            fontStyle: "italic"
        };

        <h3 [ngStyle]="titleStyle">ngStyle</h3>

    ................................................................................
    NgModel
    ........
    - banana in box [( )] 
    - event binding ( ) "listen for events"  and property binding [ ] " update values simultaneously"
    - two-way binding [( )]
    
    - @Input and @Output
    .....................
       - give a child component a way to communicate with its parent component.
       - @Input lets a parent update data in child -------- the property can receive its value from its parent component
       - @Output lets the child send data to a parent -----
       
       -@Input
       .......
          - to use @Input, you must configure the parent and child
          - to usr @Input, first import Input then decorate the property with @Input

           (1) Configure the child component
           ..................................
            import { Component, Input } from '@angular/core';
            export class Child {
                @Input() item='';
            }   

            in this case, @Input() decorates the property item, which has a type of string
            however, @Input() properties can have any type.

            the value for item comes from the parent component

            next, in the child template
              <P> Today's item : {{item}}</P>

            (2) Configure the parent component
           ..................................
            a. use the child's selector as a directive within the parent component parent
            b. use property binding to bind the 'item' property in the child to 'cuurentItem' of the parent

               <child-app [item]="currentItem"></child-app>

            c. in the parent component class, designate a value for 'cuurentItem'
               export class parentComponent{
                   currentItem = 'TV';
               }  
               
               
                
  *            
  *                           
  * 
  * 
  *                    Child.ts                     Child Model     
  *                   ------------                   -------------
  *                 @Input()  email:string            {{ email }}
  * 
  *                         Now email didn't have any value
  * 
  *                      let put a value to email by it's parent
  * 
  *                   Parent.ts                       Parent.html
  *                  -----------                      ------------
  *                sourceEmail="a@a"                   <child-selector [email]="sourceMail"></child-selector>    
  
            
 
 

       -@Output
       ....... 
         - marks a property in a child component as a doorway through which data can travel from child to parent
         - the child component uses the @Output() property to raise an event to notify the parent of the change
         
         (1) Configure the child component
         .................................
            a. import Output and EventEmitter 
                  import { Output, EventEmitter } from '@angular/core';

            b. decorate a property with @Output() 
                  @Output() newItemEvent = new EventEmitter<string>();

            c. create an addNewItem() method in the same component class:
                 export class ItemOutputComponent{
                     @Output() newItemEvent = new EventEmitter<string>();

                     addNewItem(value:string){
                         this.newItemEvent.emit(value);
                     }
                 }

          (2) Configure the child template
          ................................

          <label for="item-input">Add an item: </label>
          <input type="text" id="item-input" #newItem>
          <button type="button" (click)="addNewItem(newItem.value)"> 
             Add to parent's list
          </button>


          (3) Configure the parent component
          ...................................

          export class AppComponent {
              items = ['item1', 'item2','item3','item4'];
              addItem(newItem:string){
                  this.items.push(newItem);
              }
          }


          (4) Configure the parent template
          .................................

          <child-selector (newItemEvent)="addItem($event)"></child-selector>

          <ul>
             <li *ngFor="let item of items"> {{item}} </li>
          </ul>

              


          1- in child class
               initialize a value to send it to the parent component
               it's type will be EventEmitter 
               and will be decorated by @Output() 

               @Output() newItemEvent = new EventEmitter();

          2- in child template
              we will get the value from input feild
              and send it as a ref. var #
              and send the value by event binding to a fn in the child template

              <input #val>
              <button (click)="getChildValueByEmit(val.value)">SEND VALUE</button>

          3- define the event binding fn to emit the value to the parent component
             getChildValueByEmit(value)}{
                 this.newItemEvent.emit(value);
             }    

             Child Component DONE 

          1- in parent template
            we will include the child selector

             <app-child></app-child>

             and get set the value from child to fn 

             <app-child (newItemEvent)="getChildValue($event)"></app-child>

          2- define the fn that assigned to the child emitted value
             getChildValue(value){
                 console.log(`$(value) from child to parent`);
             }
          -------------------------------------------------------------------------------------
      
  */
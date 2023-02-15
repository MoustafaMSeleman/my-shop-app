/*
  app.module --> container for all components
  ..........
  to add new component "ComponentA" you should tell app.module about it
  in vscode -- intsall "Auto Import"
  add the component name in
  @NgModule({
    declarations: [AppComponent, ComponentA],
  })

  - each component has at least 3 files
    . .component.html
      .component.css
      .component.ts

  - in ".ts" file we have :-
    ............................................................................
    ...........................................................................
    ..import { Component } from '@angular/core';                              ..
    ..                                                                        ..
    ..@Component({                                                            ..
    .. selector:'the-markup-name',                                            ..
    .. templateUrl:'the component html file path',                            ..
    .. styleUrls:['the component css file1','the component css file2']        ..
    ..})                                                                      ..
    ..                                                                        ..
    ..export class ComponentName {                                            ..
    ..                                                                        ..
    ..}                                                                       ..
    ............................................................................
    ............................................................................

  - "app" is the app root
     in app.component.html we can add a componentA by add the selector of it
     <ComponentA> </ComponentA>
     by adding the selector of the component we say that render the "component template || component templateUrl"
     and its style and functionality in this point of app page

  - "@Component" is a Angular Decorator
    ---------------------------------------------------------------------------
   |                                                                            |
   | The whole purpose of Angular decorators is to store metadata about a class |
   |                                                                            |
    ---------------------------------------------------------------------------
    1- class decorator ........ top-level decorator ...define the propuse of the classes
    2- property decorator
    3- method decorator
    4- parameter decorator



    by CMD --> you can create a component
    let's create a nav-bar component
    -------------------------------------
    |  > ng generate component nav-bar  |
    -------------------------------------
    1- will create 4 files [.html,.css,.ts, .spec.ts]
                            .....  .... ..   .......
    2- will update "app.module.ts" to inform it about new component

    ===============================================================================
    =============================================================================== #2 & #3
    ===============================================================================

     ..............
     | zen coding |   a new way to write html and css
     ..............

    in .html you can write --> div>ul>li <-- to create an unordered list inside div

    div#divId>p.pClass  --> <div id="divId">
                               <p class="PClass">
                               </p>
                            </div>

    div.class1.class2.class3>form#formId  --> <div class="class1 class2 class3">
                                                <form action="" id="formId"></form>
                                              </div>


   ......................
   | Component Lifecycle |
   ......................

   - a component instance has a lifecycle
     starts when 
           . Angular instantiates the component class
           . And renders the component view along with its child views

     ends when
           . Angular destorys the component instance 
           . And removes its rendered template from the DOM.

   - Directives have a similar lifecycle.

   - Your app can use "lifecycle hook methods" to tap into key events in the lifecycle
     of a component or directive to 
        . initialize new instances,
        . initiate change detection when needed,
        . respond to updates during change detection
        . clean up before deletion of instances

     ................   
   - lifecylye hook .
     ................
       - an interface that allows you to tap into the lifecycle of components and directives
        as they are created, updated and destroyed.
         ...........
      
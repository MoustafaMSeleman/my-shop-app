/* Angular Concepts
   ----------------
   - Angular is a platform and framework for building single-page app
     using html and typescript.
   - Angular is written in typescript.
   - it implements core and optional functionality as a set of typescript libraries
   - the basic building blocks of the Angular framework are Angular Components that
     are organized into NgModules
   - NgModules collect related code into functional sets;
   - Angular app is defined by a set of NgModules.
   - an app always has at least a root module that enables bootstrapping.
   
   - Modules, Components and Services are classes that use "decorators"
     these decorators mark their type and provide metadata that tells Angular how to use them.
 */

/* Angular Components
   ------------------
   - components are the main building block for Angular applications.
   - each component consists of :-
     html template------>declares what renders on the page
     css selector------->defines how the component is used in a template
     typescript class--->defines behavior.
     
 # Prerequisites
 ...............
  to create a component, verify that you have met the following prerequisites:
  1- install the Angular CLI
    > npm install -g @angular/cli
    

 2- create an Angular workspace
    > ng new my-app
    > cd my-app
    > ng serve --open     ---> --open to automatically opens your browser to http://localhost:4200/


 # Create a Component
 ....................
 the best way to create a component is with the Angular CLI.
 
 1- Create a component using the Angular CLI
    > ng generate component <component-name> 

    by default, this command creates the following: 
    - a dir. named after the component
    - a component file, "<component-name>.component.ts"
    - a template file,  "<component-name>.component.html"
    - a css file,  "<component-name>.component.css"
    - a testing specification file,  "<component-name>.component.spec.ts"

 2- Create manually
    [a]- navigate to your Angular project dir.
    [b]- create a new file "<component-name>.component.ts"
    [c]- at the top of the file,
       import { Component } from '@angular/core';
    [d]- after the import statement, add a @Component decorator.
       @Component({
       })
    [e]- choose a css selector for the component
       @Component({
           selector: 'app-component-overview'
       })  
    [f]- define the html template that the component uses to display info.
       in most cases, this template is a separate html file,
       @Component({
           selector: 'app-component-overview',
           templateUrl: './component-overiew.component.html',
       })
    [g]- select the styles for the component's template,
      in most cases, you define the styles for your for your component's template in a separate file
      @Component({
          selector: 'app-component-overview',
          templateUrl: './component-overview.component.html'
          styleUrls: ['./component-overview.component.css']
      })
    [h]- add a class statement includes :
     export class ComponentOverviewComponent{
         
     }

 every component requires a CSS selector.
 a component "hello-world.component.ts" that defines its selector as "app-hello-world".
 this selector intructs Angular to instantiate this component any time the tag <app-hello-world> appears in a template.

 An Angular component requires a template defined using 'template' or 'templateUrl'
 You can't have both statements in a component
 @Component({
     selector: 'app-component-overview'
     template: '<h1>Hello World!</h1>',
 })

 @Component({
     selector: 'app-component-overview',
     template:`
      <h1>Hello World!</h1>
      <p>This template definition spans multiple lines.</p>
     `
 })
  
 to declare the styles within the component, add 'style' property to the @Component decorator
 @Component({
     selctor: 'app-component-overview',
     template: '<h1>Hello World!</h1>',
     styles: ['h1 {font-weight: normal;}']
 })
 

 # Component lifecycle
   ...................
   - a component instance has a lifecycle that
     starts when Angular instantiates the component class and renders the component view along with its child views
     and ends when Angular destroys the component instance and removes its rendered template from the DOM.

 */

/**
 * Service
 * .......
 * - a broad category encompassing any value, function, or feature that an app needs
 * - a service is a class with a narrow, well-defined purpose.
 * --------------------------------------------------------------------------------------
 * Service vs. Component
 * .....................
 * - Angular distinguishes Components from Services to icrease modularity and reusability
 * - a component should present properties and methods for data binding to mediate
 *   between the view and the app logic.
 * - the view is what the template renders
 * - the app logic is what includes the notion of a model
 * - a component should user services for task that don't involve the view or app logic.
 * ---------------------------------------------------------------------------------------
 * Service Usage
 * .............
 * - fetching data from the server
 * - validating user input
 * ---------------------------------------------------------------------------------------
 * - By defining such processing tasks in an injectable service class,
 *   you make those tasks available to any component.
 * - You can also make your app more adaptable by injecting different providers of the same kind of service
 * -
 */

import { Injectable } from '@angular/core';

//Here's an example of a service class that logs to the browser console.

export class Logger {
  log(msg: any) {
    console.log(msg);
  }
  error(msg: any) {
    console.log(msg);
  }
  warn(msg: any) {
    console.log(msg);
  }
}

// Services can depend on other services.

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/**
 * Dependency injection DI
 * .......................
 * - is the part of the Angular framework that provides components with access to services and other resources.
 * - Angular provides the ability for you to
 *     inject a service into a component to give that component access to the service
 *
 * - The @Injectable() decorator defines a class as a service in Angular
 *    and allows Angular to inject it into a acomponent as a dependency.
 *
 * - Likewise, the @Injectable() decorator indicates that
 *   a component, class, pipe or NgModule has a dependency on a service.
 *
 * - The injector is the main mechanism.
 *   Angular creates an app-wide injector for you during the bootstrap process,
 *   and additional injector as needed.
 *   You don't have to create injectors
 *
 * - An injector creates dependencies and maintains a container of dependency instances that it reuses,
 *   if possible
 *
 * - A provider is an object that tells an injector how to obtain or create a dependency
 *
 * - For any dependency, you must register a provider with the app's injector,
 *   so that the injector can use the provider to create new instances.
 *   For a service, the provider is typically the service class itself
 *
 *   ** Add your service classname into providers in app.module.ts **
 *
 * - A dependency doesn't have to be a service- it could be a fn or a value.
 *
 *
 */

// Create new service by Angular CLI
/**
 * > ng g s services/itsharke.api
 *
 * will generate 2 files [.ts & .spec.ts]
 */

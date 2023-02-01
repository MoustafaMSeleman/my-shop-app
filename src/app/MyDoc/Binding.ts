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
 * - [2] Property Binding
 *  ---------------------
 *   - helps you to set values for properties of HTML elements
 *   - moves a value in one direction component's property ---> target element property
 *   - to bind to an element's property, 
 *     enclose it in [] "square brackets", which identifies the property as a target property.
 *   - a target property is the DOM property to which you want to assign a value.
 *   - <img [src]="itemImageUrl">
  */
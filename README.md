# MyFirstApp
# Assignments

## 02# #
1. Add a Input field which updates a property ('username') via Two-Way-Binding 
2. Output the username property via String Interpolation (in a paragraph below the input) 
3. Add a button which may only be clicked if the username is NOT an empty string 
4. Upon clicking the button, the username should be reset to an empty string
### Take aways
- FormsModule is needed to use [(ngModel)] which is how we specify 2-way binding.
- 2-way binded elements are dynamically updated at runtime, server keeps on listening for any changes and updates the element with each change.
- can add conditions like length === 0 to property binding
- call functions on an html element's event.

## 01# #
1. Create two new Components (manually or with CLI): WarningAlert and SuccessAlert 
2. Output them beneath each other in the AppComponent 
3. Output a warning or success message in the Components 
4. Style the Components appropriately (maybe some red/ green text?) 
Use external or internal templates and styles! 
Feel free to create more components, nest them into each other or play around with different types of selectors! 
### Take aways
select a component in different ways like selector, attribute and class.

use inline and external styles and templates.

create components manually and also using ng g c <component>
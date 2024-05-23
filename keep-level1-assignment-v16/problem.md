# Angular Assignment - Keep	Level 1
	
## Objective:	
	
The Objective of this application is to understand the fundamentals of Angular.	
	
## Expected Outcome:	
	
By the end of the assignment you should be able to understand	
	
1.  Modules  
2.  Components	
3.  Angular Directives
4.  Data Binding	
5.  Dependency Injection	
6.  Services  

## Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies `npm install`  
4. Run the backend `json-server server/db.json`  which shall run on port:3000  
5. Run the frontend `npm run start` which shall run on port:4200  

6. Run the test case using 'npm run test'. Application need not run in parallel while running test case

## Assignment:	
	
Create a Angular Application similar to Google Keep with the following specs.	
	
1.  It should be able to create and persist notes in the [json-server](https://www.npmjs.com/package/json-server).	
2.  It should be able to load all notes on the load of the page as [Cards](https://material.angular.io/components/card/overview)	
3.  json-server should host and serve angular application and notes api  

## Instructions:

1. You are expected to use `Note` class for Note model  
2. `AppModule` shall be the root module  
3. `HeaderComponent` to use Heading text content `KeepNote`  
4. `AppComponent` as the bootstrapping component  
	4.1 To have an Section with header title `Take a note`  
	4.2 IN section  include an `input` Form Control with name attribute `title` for taking `title` for the note   
	4.3 IN section   include a `textarea` Form Control with name attribute `text` for taking `text` for the note  
	4.4 Include a button with text `Done` to add and persist the note in the list. Optimistic load is suggested here, that means we should add the note in the list on the client side without waiting for server response and only in case of any server error, the same note shall be removed from the list  
	4.5 To display the collection of notes from server  
	4.6 For any server errors or UI validation errors, a property `errMessage` of type String to be set in the component    
5. `NotesService` talks to the json-server to fetch/persist data and shall include methods -  
	5.1 `getNotes()` to fetch the notes collection  
	5.2 `addNote()` to persist a note to server  
6. In case you have implemented this -> `json-server should host and serve angular application and notes api `, please add the necessary steps to run the application in this same file.  
7. Ensure following commands succeed in your local machine before submitting your code for Preliminary automated review as described next -  


npm install

npm run build

npm run test



## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->

- You add the respective Mentor as a Reporter/Master into your Assignment Repository

- Once You have checked your Assignment by clearing all unit test cases, provide access to your mentor

- Intimate your Mentor 



## References:	
	
 
1.  [Angular Architecture](https://angular.io/guide/architecture)
2.  [Angular CLI](https://cli.angular.io/)	
3.  [Angular Templates](https://angular.io/guide/architecture#templates)	
4.  [Angular Data Binding](https://angular.io/guide/architecture#data-binding)	

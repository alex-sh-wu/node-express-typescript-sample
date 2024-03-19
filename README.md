# node-express-typescript-sample
The file structure for this sample has been inspired by the following blogs:
- https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way/
- https://radzserg.medium.com/dependency-injection-in-express-application-dd85295694ab

Although Express.js is an unopinionated framework, offering developers too much freedom can sometimes hinder code development. When writing a codebase from the ground up, you need to have some opinion on how you will structure your code, otherwise tech debt and code smells will get out of hand.

The approach outlined here is a pattern I have followed for multiple Node.js projects. Its adaptability has proven invaluable, even as the project scales and the number of files grows.

## Routes
Code that expose endpoints should live here. Each type of data should have its own router and corresponding sets of routes. The code that lives in these files are simple and for setting up.

## Controllers
From reading parameters to sending back payloads, code that deal with requests and responses should live here. It is the responsibility of the controllers to validate and sanitize all user input before passing them onto the services.

These files should be free of business logic. Because of this, controllers will need the help of services to fetch or manipulate data. Controllers must be defined as a class so that services can be injected into the controllers on initialization. This pattern allows the controllers to have a separation of concerns from the business logic, and it protects the services from having to deal directly with the Express framework.

Because the services are injected during controller initialization, this allows code to be easily mocked in unit tests.

## Services
Code that handles business logic and data-fetching should live here. Services can call external APIs or db's to fetch and transform data. Service files should be free of any Express framework code.

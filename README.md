# SapientAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3. It shows a list of spacex launches and filters to filter the list.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Unit tests are writter for services and components

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## API Reference

API end point for the first-time page load without any Filters:	https://api.spaceXdata.com/v3/launches?limit=100

API end point with Filters applied: 

    Launch Success Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true

    Launch & Land Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true

    All: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

## Screenshots

Screenshots of lighthouse report:

https://sapient-app.herokuapp.com/assets/images/lighthouse-all.jpg
https://sapient-app.herokuapp.com/assets/images/lighthouse-best-practices.jpg
https://sapient-app.herokuapp.com/assets/images/lighthouse-performance.jpg
https://sapient-app.herokuapp.com/assets/images/lighthouse-acccessibility.jpg
https://sapient-app.herokuapp.com/assets/images/lighthouse-seo.jpg

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

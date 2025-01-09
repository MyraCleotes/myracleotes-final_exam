# AngularApplication

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## If not working here the steps

Run the following command to install all the necessary dependencies specified in package.json:

```bash
npm install
```

## Install Missing Angular DevKit Package

The error suggests that the @angular-devkit/build-angular package might not be installed or is missing. Run this command to install it:

```bash
npm install @angular-devkit/build-angular --save-dev
```

## Verify Angular CLI Version

Check the Angular CLI version to ensure compatibility with your project:

```bash
ng version
```

## Serve the Application Again

After successfully installing the required packages, try running the application:

```bash
ng serve --open
```

## Clear Cache (If Necessary)

If the problem persists, clear the npm cache and reinstall the dependencies:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

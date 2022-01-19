# Prince's Theatre Challenge

React native challenge building a Prince's Theatre app.

## Required

- Install node listed in `.nvm`
- Install android studio
- Install java
- Install xcode

## Project setup

- run `yarn` to install node modules
- `cd ios` and run `pod install`
- open the android folder of the project in Android Studio to install dependencies automatically
- run `yarn start`
- in a separate terminal window run either `yarn run ios` or `yarn run android`

## Testing

- Run `yarn test` to run all unit tests

## Codebase

- Codebase follows Components and Screens structure where Components can be used within screens or other components and Screen are responsible for all functionalities that are specific to the application screen that user is interacting with
- React-Query alongside axios libraries are used to handle Api calls and to gracefully handle flakiness of the apis where user can still see the film information even if the api fails as React-Query will retry calls and cache data.
- Tests for some components and screens are written within the respective Component or Screen folders
- Responsive UI

## Improving the code

- More UI responsiveness
- Mock and intercept API calls for the screen using React-Query and Axios

# Prince's Theatre Challenge

React native challenge building a Prince's Theatre app.

## Required

- Install node listed in `.nvm`
- Install android studio
- Install java. Might need to install JDK 11 if facing build issues
- Install xcode
- Make sure you follow [React Native Development Setup](https://reactnative.dev/docs/environment-setup)

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
- React-Query alongside axios libraries are used to handle Api calls and to gracefully handle flakiness as by default react-query tries 3 times and can be customized further. Furthermore the request is made only when needed (eg. app is not in the background)
- Tests for some components and screens are written within the respective Component or Screen folders
- Responsive UI

## Improving the project

- More UI responsiveness
- Mock and intercept API calls for the screen using React-Query and Axios
- Improve messaging and logging in regards to API failures
- Improve the data sent from the API (eg.use IDs to match films)
- Not including keys in the repository
- Some assumptions made throughout the app indicated with comments which in a real scenario would be clarified with the corresponding team/s

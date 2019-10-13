# expo-zeit example

## Usage

To deploy the web version and api code on zeit now you need to add zeit_now to the env secrets for the repo.
If you also want to push it automatically to Expo you also need those credentials added

> If changes don't load remember to empty local chaches

## To run locally

To run the api code we use Zeit now

- `now dev`

This starts the server in :3000
The react code will point there from the value in the .env file.

### To run the UI code we use

- `expo start`

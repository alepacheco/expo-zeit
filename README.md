# expo-zeit


## Usage

You need to add a zeit token to the repo secrets to deploy correctly when the CI runs.
You also need to add your Expo credentials to the secrets
> If changes don't load remember to empty local chaches


## To run locally (with api)

This has the api and client code running simultaneously but does not support hot reloading on the client code.

- `expo build:web`
- `now dev`

Loads on port 3000

## To run locally (w/o api)

- `expo start --web`



## TODO

- [ ] Make api run independently and cross-platform
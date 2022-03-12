# Welcome to the Anythink Market repo

To start the app use: `./start.sh`, it'll start both the backend and the frontend.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## Connect to DB

1. Create a new DB in mongodb atlas
1. Add an env variable called `MONGODB_URI` with the value of the connection URI you can find on the site,
   which you can find when clicking on the `connect` button on the site.

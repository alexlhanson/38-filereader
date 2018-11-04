
File Reader
===

## Description 
- Uses React to create an Application for uploading files
  - `App` has a dashboard route
    - `/photos` for `Dashboard` component
    - `/welcome/signup' and `/welcome/login` for `Landing Component`
    - `/settings` for component
  - `Dashboard` component has photo-item children
    - `[photo-item]` has create, read, update and delete photos
  - `Landing` component has children components for:
    - `Auth-Form` component which handles login and signup.
  - `Settings` component has the ability to create and update profile.

## Setup
- Fork/clone git repository and run npm install in frontend directory
- Use `npm run watch` in frontend folder to run webpack in order to setup local environment
- For build version run `npm run build` from frontend folder
- For frontend .env file: 
  - create file and add:
    - `API_URL=http://localhost:choose your port`


## Tools Used
- Backend from [sluggram](http://github.com/slugbyte/sluggram) 
- React
- Bootstrap
- FontAwesome
- Redux
  - Middleware: Logger
  - Middleware: Thunk
- Node
- Webpack
- Babel

### Credits

- Created by Alex Hanson


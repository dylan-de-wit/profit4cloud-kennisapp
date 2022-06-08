# Kennisapp
The kennisapp is an app that allows colleagues to find eachother based on experience in tools, programming languages, paradigms, etc... 

The app is built with [Ionic React](https://ionicframework.com/docs/react).

## Setup & serving the app
Make sure the latest Node LTS is installed. See [Node & npm](https://ionicframework.com/docs/intro/environment#node-npm) environment setup.

Recommended IDE's are: Visual Studio Code or Webstorm.

1. Install the Ionic CLI: `npm install -g @ionic/cli`
2. Install all dependencies: `npm install`
3. Serve the app: `ionic serve` on http://localhost:8100

## Deploying
### Webapp
T.B.D

### Native
#### iOS
T.B.D

#### Android
T.B.D

## Design philosophy 

### Mobile first
The application is built with a mobile first approach, all views must work well on mobile before they're made responsive for bigger screens.

### [I18n](https://react.i18next.com)
Always use translations for both NL and EN. Plain strings are not acceptable.

Translations can be found in [./src/locales](./src/locales)

### Pages & Components
- Pages can be put in [./src/pages](./src/pages)
- Reusable components can be put in [./src/components](./src/components)

### Theming
The colour scheme can be found in [./src/theme/variables.css](./src/theme/variables.css)

## Useful links
**Components:** https://ionicframework.com/docs/components
<br/>**Icons:** https://ionic.io/ionicons

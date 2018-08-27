// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBVkaJGX_tV06moTSC6IQWV6rydqhHAIcw',
    authDomain: 'sk-planes2.firebaseapp.com',
    databaseURL: 'https://sk-planes2.firebaseio.com',
    projectId: 'sk-planes2',
    storageBucket: 'sk-planes2.appspot.com',
    messagingSenderId: '194241324582'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

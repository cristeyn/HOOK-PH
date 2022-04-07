// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'hook-ph',
    appId: '1:305148913978:web:8af2e71fdeef5d1c86c803',
    storageBucket: 'hook-ph.appspot.com',
    apiKey: 'AIzaSyAQ0dWQnGhggMJ65zwDYzUOgXWohBpUgKo',
    authDomain: 'hook-ph.firebaseapp.com',
    messagingSenderId: '305148913978',
  },
  production: false,
  webApiUrl: 'http://localhost/hook-ph/api/',
  webUploadDir:  'http://localhost/hook-ph/upload/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

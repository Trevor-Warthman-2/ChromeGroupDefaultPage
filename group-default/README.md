This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
\


SAved:

"content_scripts": [{
    "js": [ "static/js/content.js" ],
    "matches": [
      "http://*.example.com/*", "https://*.example.com/*"
    ]
  }],

  Updated manifest to be V3 so hopefullt that's working
  "default-group" is the new template project


https://stackoverflow.com/questions/62186043/how-to-set-up-a-chrome-extension-using-react-and-typescript-with-multiple-pages

https://www.npmjs.com/package/cra-template-complex-browserext-typescript

https://levelup.gitconnected.com/how-to-build-a-rich-chrome-extension-quickly-with-create-react-app-and-redux-d9b64cf64832

updating manifest to not have old stuff. Just changed "service_worker" and "Module" and it's currently erroring on the logos

Remember you gotta build every time you wanna test something new
# eslint-config-chromatix

Shareable config for [ESLint](https://eslint.org/) for custom standards at [Chromatix Digital Agency](https://www.chromatix.com.au).

Based heavily on the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/) but with some of our own too. Most notably, two spaces instead of tabs. Soz.

**This config is still in development.** If you have suggestions for improvement or if you disagree with anything this config makes you do, feel free to file an issue.

## Publishing to npm/yarn

This package auto-deploys to NPM on the master branch, any changes should be Pull Requests, There will need to be a version bump for a publish to be successful

## Installation

Install globally to use on any project:

    yarn global add @chromatix/eslint-config-chromatix

Install locally to one project:

    yarn add --dev @chromatix/eslint-config-chromatix

You'll also need to have [ESLint](https://eslint.org/) installed in the same manner.

## Usage

#### Frontend / WordPress Javascript
Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [
        '@chromatix/chromatix'
      ]
    };
    
#### Node
Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [
        '@chromatix/eslint-config-chromatix/node'
      ]
    };
    
#### Vue/Nuxt
Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [
        '@chromatix/eslint-config-chromatix/vue'
      ]
    };


Then:
* Using globally?  
  Run `eslint "**/*.js"`.

* Using locally?  
  Add `"lint:js": "eslint \"**/*.js\""` to your `package.json`'s `"scripts"` section, then run `yarn lint:js`

### Additional Tips

* Outputting code coverage reports with Jest? Add `--ignore-pattern coverage/` to your `eslint` command.
* Want ESLint to list the filenames it is linting, even if everything passes? Add [cross-env](https://yarnpkg.com/en/package/cross-env) as a dev dependency and then add `cross-env DEBUG=eslint:cli-engine ` _before_ your `eslint` command.

## See also

* [stylelint-config-chromatix](https://github.com/ChromatixAU/stylelint-config-chromatix)
* [phpcs-config-chromatix](https://github.com/ChromatixAU/phpcs-config-chromatix)

## License

[MIT](LICENSE).

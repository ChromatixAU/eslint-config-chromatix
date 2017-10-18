# eslint-config-chromatix

Shareable config for [ESLint](https://eslint.org/) for custom standards at [Chromatix Digital Agency](https://www.chromatix.com.au).

Based heavily on the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/) but with some of our own too. Most notably, two spaces instead of tabs. Soz.

**This config is still in development.** If you have suggestions for improvement or if you disagree with anything this config makes you do, feel free to file an issue.

## Installation

Install globally to use on any project:

    yarn global add @chromatix/eslint-config-chromatix

Install locally to one project:

    yarn add --dev @chromatix/eslint-config-chromatix

You'll also need to have [ESLint](https://eslint.org/) installed in the same manner.

## Usage

Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [
        '@chromatix/chromatix'
      ]
    };

Then:
* Using globally?  
  Run `eslint **/*.js *.js`.

* Using locally?  
  Add `"lint:js": "eslint **/*.js *.js"` to your `package.json`'s `"scripts"` section, then run `yarn lint:js`

## License

[MIT](LICENSE).

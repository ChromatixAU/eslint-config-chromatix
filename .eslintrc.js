
module.exports = {

  // @see https://eslint.org/docs/rules/
  // @see https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/blob/master/index.js
  // @see https://github.com/WordPress-Coding-Standards/eslint-plugin-wordpress/tree/master/lib
  "extends": [
    "eslint:recommended",
    "wordpress"
  ],

  "env": {
    "browser": true,
    "node":    true,
    //"es6":   true, // Coming soon.
    //"jest":  true, // Coming soon.
    "jquery":  true
  },

  "rules": {

    // Coming soon.
    //
    //"no-var":       [ "error" ],
    //"prefer-const": [ "error" ],
    //
    // @see https://www.npmjs.com/package/eslint-plugin-dollar-sign
    //"dollar-sign/dollar-sign": [2, "ignoreProperties"],

    // Best practices and quality code.
    "complexity":            [ "error", 20 ],
    "eqeqeq":                [ "error", "always" ],
    "guard-for-in":          [ "error" ],
    "max-depth":             [ "error",  3 ],
    "max-nested-callbacks":  [ "error",  3 ],
    "max-params":            [ "error",  3 ],
    "max-statements":        [ "error", 15 ],
    "no-loop-func":          [ "error" ],
    "no-eq-null":            [ "error" ],
    "no-implicit-coercion":  [ "error" ],
    "no-magic-numbers":      [ "error" ],
    "no-param-reassign":     [ "error" ],
    "no-plusplus":           [ "error" ],
    "no-return-assign":      [ "error" ],
    "no-self-compare":       [ "error" ],
    "no-unused-expressions": [ "error" ],
    "strict":                [ "error", "safe" ],

    // Security.
    "no-eval":         [ "error" ],
    "no-implied-eval": [ "error" ],

    // Purely helpful.
    "array-callback-return": [ "warn" ],

    // UX.
    "no-alert": [ "error" ],

    // Node.js safety.
    "callback-return":       [ "error" ],
    "handle-callback-err":   [ "error" ],
    "no-buffer-constructor": [ "error" ],
    "no-mixed-requires":     [ "error" ],
    "no-path-concat":        [ "error" ],
    "no-process-env":        [ "error" ],
    "no-process-exit":       [ "error" ],

    // Indentation.
    "indent": [
      "error",
      2,
      {
        "SwitchCase":             1,
        "VariableDeclarator":     { "var": 2, "let": 2, "const": 3 },
        "flatTernaryExpressions": true
      }
    ],

    // Commenting.
    "no-warning-comments":  [ "warn" ],
    "require-jsdoc":        [ "warn" ],
    "valid-jsdoc":          [ "warn" ],
    "capitalized-comments": [
      "warn",
      "always",
      {
        "ignoreConsecutiveComments": true
      }
    ],
    "lines-around-comment": [
      "warn",
      {
        "beforeBlockComment": true,
        "beforeLineComment":  true
      }
    ],

    // Stylistic.
    "array-bracket-newline":   [ "error", { "minItems": 2 } ],
    "array-element-newline":   [ "error", "always" ],
    "dot-location":            [ "error", "property" ],
    "max-len":                 [ "error", 100 ],
    "max-lines":               [ "error", 800 ],
    "max-statements-per-line": [ "error" ],
    "no-array-constructor":    [ "error" ],
    "no-empty-function":       [ "error" ],
    "no-lone-blocks":          [ "error" ],
    "no-lonely-if":            [ "error" ],
    "no-multi-spaces":         [ "error" ],
    "no-multi-str":            [ "error" ],
    "no-negated-condition":    [ "error" ],
    "no-new-object":           [ "error" ],
    "no-tabs":                 [ "error" ],
    "object-property-newline": [ "error" ],
    "sort-keys":               [ "error" ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 1
      }
    ],
    "key-spacing": [
      "error",
      {
        "align": {
          "beforeColon": false,
          "afterColon":  true,
          "on":          "value"
        }
      }
    ],

    // Variables.
    "no-use-before-define": [ "error" ],
    "id-length":            [
      "error",
      {
        "min":  2,
        "max": 20
      }
    ],

    // Handled elsewhere.
    "linebreak-style": [ "off" ], // Handled by git.
    "no-console":      [ "off" ]  // Handled by strip-debug during minification for production.

  } // Rules.
}; // Module.exports

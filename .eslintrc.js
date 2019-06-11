module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "react/default-props-match-prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": 0,
        "react/require-default-props": 0,
    }
};

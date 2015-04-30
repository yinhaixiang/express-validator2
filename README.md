# express-validator2

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

a util to validate express params


### Quick Example(Javascript):
```javascript
// router.js
var validator = require('../libs/express-validator2');
var validator_config = require('./validator_config');
var validator.setConfig(validator_config);
app.use(validator.validate);

```

the 'validator_config' is your own file like: 'test/validator_config2.js'

```javascript
// validator_config2.js

module.exports = {
  '/isRequired': {
    name: {isRequired: true}
  },

  '/minLength': {
    name: {minLength: 3}
  },

  '/maxLength': {
    name: {maxLength: 3}
  },

  '/equals': {
    name: {equals: 'ddd'}
  },

  '/contains': {
    name: {contains: 'ab'}
  },

  '/matches': {
    name: {matches: /^\d+$/}
  },

  '/isEmail': {
    name: {isEmail: true}
  },

  '/isURL': {
    name: {isURL: true}
  },

  '/isFQDN': {
    name: {isFQDN: true}
  },

  '/isIP': {
    name: {isIP: true}
  },

  '/isAlpha': {
    name: {isAlpha: true}
  },

  '/isNumeric': {
    name: {isNumeric: true}
  },

  '/isAlphanumeric': {
    name: {isAlphanumeric: true}
  },

  '/isBase64': {
    name: {isBase64: true}
  },

  '/isHexadecimal': {
    name: {isHexadecimal: true}
  },

  '/isHexColor': {
    name: {isHexColor: true}
  },

  '/isLowercase': {
    name: {isLowercase: true}
  },

  '/isUppercase': {
    name: {isUppercase: true}
  },

  '/isInt': {
    name: {isInt: true}
  },

  '/isFloat': {
    name: {isFloat: true}
  },

  '/isDivisibleBy': {
    name: {isDivisibleBy: 7}
  },

  '/isUUID': {
    name: {isUUID: true}
  },

  '/isDate': {
    name: {isDate: true}
  },

  '/isAfter': {
    name: {isAfter: new Date('2015-02-14')}
  },

  '/isBefore': {
    name: {isBefore: new Date('2015-02-14')}
  },

  '/isIn': {
    name: {isIn: ['aa', 'bb', 'cc']}
  },

  '/isCreditCard': {
    name: {isCreditCard: true}
  },

  '/isISBN': {
    name: {isISBN: true}
  },

  '/isMobilePhone': {
    name: {isMobilePhone: true}
  },

  '/isJSON': {
    name: {isJSON: true}
  },

  '/isMultibyte': {
    name: {isMultibyte: true}
  },

  '/isAscii': {
    name: {isAscii: true}
  },

  '/isFullWidth': {
    name: {isFullWidth: true}
  },

  '/isHalfWidth': {
    name: {isHalfWidth: true}
  },

  '/isVariableWidth': {
    name: {isVariableWidth: true}
  },

  '/isSurrogatePair': {
    name: {isSurrogatePair: true}
  },

  '/isMongoId': {
    name: {isMongoId: true}
  }
};
```


### License
[MIT](LICENSE)


var assert = require("assert");
var validator = require('../../dist/libs/express-validator2');
var validator_config = require('./validator_config2');
validator.setConfig(validator_config);


var res = {
  send: function (obj) {
    assert.equal(1, 1);
  },
  status: function (code) {
    return this;
  }
};
var next = function () {
  assert.equal(1, 1);
}

var a = true;

describe('main', function () {
  it('isRequired1', function () {
    var req = {
      path: '/isRequired',
      body: {
        name: 'aa'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });




  it('isRequired2', function () {
    var req = {
      path: '/isRequired',
      body: {
        name: ''
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isRequired3', function () {
    var req = {
      path: '/isRequired',
      body: {
        name: null
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isRequired4', function () {
    var req = {
      path: '/isRequired',
      body: {
        name: undefined
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('minLength1', function () {
    var req = {
      path: '/minLength',
      body: {
        name: 'abc'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('minLength2', function () {
    var req = {
      path: '/minLength',
      body: {
        name: 'ab'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('minLength3', function () {
    var req = {
      path: '/minLength',
      body: {
        name: 'abcd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('maxLength1', function () {
    var req = {
      path: '/maxLength',
      body: {
        name: 'abc'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('maxLength2', function () {
    var req = {
      path: '/maxLength',
      body: {
        name: 'ab'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('maxLength3', function () {
    var req = {
      path: '/maxLength',
      body: {
        name: 'abcd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('equals1', function () {
    var req = {
      path: '/equals',
      body: {
        name: 'ddd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('equals2', function () {
    var req = {
      path: '/equals',
      body: {
        name: 'dddd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('contains1', function () {
    var req = {
      path: '/contains',
      body: {
        name: 'aabc'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('contains2', function () {
    var req = {
      path: '/contains',
      body: {
        name: 'acb'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('matches1', function () {
    var req = {
      path: '/matches',
      body: {
        name: '4234'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('matches2', function () {
    var req = {
      path: '/matches',
      body: {
        name: '454d443'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isEmail1', function () {
    var req = {
      path: '/isEmail',
      body: {
        name: 'yin@qq.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isEmail2', function () {
    var req = {
      path: '/isEmail',
      body: {
        name: 'yin@d@d.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isEmail3', function () {
    var req = {
      path: '/isEmail',
      body: {
        name: 'yindd.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isURL1', function () {
    var req = {
      path: '/isURL',
      body: {
        name: 'http://www.baidu.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isURL2', function () {
    var req = {
      path: '/isURL',
      body: {
        name: 'wwwba..iducom'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isFQDN1', function () {
    var req = {
      path: '/isFQDN',
      body: {
        name: 'www.baidu.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isFQDN2', function () {
    var req = {
      path: '/isFQDN',
      body: {
        name: 'http://www.baidu.com'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isIP1', function () {
    var req = {
      path: '/isIP',
      body: {
        name: '127.0.0.1'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isIP2', function () {
    var req = {
      path: '/isIP',
      body: {
        name: '127.3.3'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isAlpha1', function () {
    var req = {
      path: '/isAlpha',
      body: {
        name: 'sdfasKUHJg'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isAlpha2', function () {
    var req = {
      path: '/isAlpha',
      body: {
        name: 'sdfae2sKUHJg'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isNumeric1', function () {
    var req = {
      path: '/isNumeric',
      body: {
        name: '3423'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isNumeric2', function () {
    var req = {
      path: '/isNumeric',
      body: {
        name: '234213s234'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isAlphanumeric1', function () {
    var req = {
      path: '/isAlphanumeric',
      body: {
        name: 'sfwefs443dfv'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isAlphanumeric2', function () {
    var req = {
      path: '/isAlphanumeric',
      body: {
        name: 'sfwef.s443dfv'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isBase641', function () {
    var req = {
      path: '/isBase64',
      body: {
        name: '6YCf5bqm5Y+R55Sf55qECg=='
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isBase642', function () {
    var req = {
      path: '/isBase64',
      body: {
        name: '6YCf5bqm5Y+R55Sf55qECg='
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isHexadecimal1', function () {
    var req = {
      path: '/isHexadecimal',
      body: {
        name: 'a3ff'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isHexadecimal2', function () {
    var req = {
      path: '/isHexadecimal',
      body: {
        name: 'g'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isHexColor1', function () {
    var req = {
      path: '/isHexColor',
      body: {
        name: 'aaaaaa'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isHexColor2', function () {
    var req = {
      path: '/isHexColor',
      body: {
        name: 'aabbgg'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isLowercase1', function () {
    var req = {
      path: '/isLowercase',
      body: {
        name: 'fasfsdfsfdsd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isLowercase2', function () {
    var req = {
      path: '/isLowercase',
      body: {
        name: 'fasWsdfsfdsd'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isUppercase1', function () {
    var req = {
      path: '/isUppercase',
      body: {
        name: 'WERS23SDFSD'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isUppercase2', function () {
    var req = {
      path: '/isUppercase',
      body: {
        name: 'SDFAsSDFASD'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isInt1', function () {
    var req = {
      path: '/isInt',
      body: {
        name: '3423'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isInt2', function () {
    var req = {
      path: '/isInt',
      body: {
        name: '2342.34'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isFloat1', function () {
    var req = {
      path: '/isFloat',
      body: {
        name: '3423.234'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isFloat2', function () {
    var req = {
      path: '/isFloat',
      body: {
        name: '234.23.4'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isDivisibleBy1', function () {
    var req = {
      path: '/isDivisibleBy',
      body: {
        name: '21'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isDivisibleBy2', function () {
    var req = {
      path: '/isDivisibleBy',
      body: {
        name: '22'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isUUID1', function () {
    var req = {
      path: '/isUUID',
      body: {
        name: '6e5a0e85-b4a0-485f-be54-a758115317e1'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isUUID2', function () {
    var req = {
      path: '/isUUID',
      body: {
        name: '6e5a0e85-b4a0-485f-be54-a758115317e'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isDate1', function () {
    var req = {
      path: '/isDate',
      body: {
        name: '2014-02-02'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isDate2', function () {
    var req = {
      path: '/isDate',
      body: {
        name: '2014s02s02'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isIn1', function () {
    var req = {
      path: '/isIn',
      body: {
        name: 'bb'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isIn2', function () {
    var req = {
      path: '/isIn',
      body: {
        name: 'bbb'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });

  it('isISBN1', function () {
    var req = {
      path: '/isISBN',
      body: {
        name: '9787302287568'
      },
      query: {},
      params: {}
    };
    validator.validate(req, null, next);
  });

  it('isISBN2', function () {
    var req = {
      path: '/isISBN',
      body: {
        name: '978730228756'
      },
      query: {},
      params: {}
    };
    validator.validate(req, res, null);
  });
});
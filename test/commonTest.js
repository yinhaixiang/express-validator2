var validator = require('../express-validator2');
var validator_config = require('./validator_config2');
validator.setConfig(validator_config);


var res = {
  send: function (obj) {
    console.log(obj);
  },
  status: function (code) {
    return this;
  }
};
var next = function () {
  console.log('validating is ok...');
}

var req = {
  path: '/isRequired',
  body: {
    email: 'yin@qq.cab',
    age: '2s',
    name: 'aaaaaa'
  },
  query: {},
  params: {}
};
validator.validate(req, res, next);
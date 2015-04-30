var config, defaultErrorMessages, functions, validator;

validator = require('validator');

defaultErrorMessages = require('./default-errors');

config = null;

exports.validate = function(req, res, next) {
  var flag, msg, needValidate, param, parameters, path, regulation, rule, rules, totalFlag, value;
  totalFlag = true;
  path = req.path;
  msg = 'invalid params in api: [' + path + ']\n';
  if (config[path]) {
    parameters = config[path];
    for (param in parameters) {
      param = param;
      rules = parameters[param];
      needValidate = true;
      value = req.query[param] || req.body[param] || req.params[param];
      if (rules.isRequired === false) {
        if (!value) {
          needValidate = false;
        }
      } else {
        if (!value) {
          needValidate = false;
          msg += 'param: [' + param + '] is invalid, input is: [' + value + '], invalid message is: [' + defaultErrorMessages['isRequired'] + ']\n';
          totalFlag = false;
        }
      }
      if (needValidate) {
        for (regulation in rules) {
          rule = rules[regulation];
          flag = functions[regulation](rule, value);
          if (!flag) {
            msg += 'param: [' + param + '] is invalid, input is: [' + value + '], invalid message is: [' + defaultErrorMessages[regulation] + ']\n';
            totalFlag = false;
            break;
          }
        }
      }
    }
  }
  if (totalFlag) {
    next();
  } else {
    return res.status(403).send(msg);
  }
};

functions = {
  isRequired: function(rule, value) {
    if (rule) {
      return !validator.isNull(value);
    }
    return true;
  },
  minLength: function(rule, value) {
    if (!value) {
      return false;
    }
    return value.length >= rule;
  },
  maxLength: function(rule, value) {
    if (!value) {
      return false;
    }
    return value.length <= rule;
  },
  equals: function(rule, value) {
    return validator.equals(value, rule);
  },
  contains: function(rule, value) {
    return validator.contains(value, rule);
  },
  isEmail: function(rule, value) {
    if (rule) {
      return validator.isEmail(value);
    }
    return true;
  },
  isURL: function(rule, value) {
    if (rule) {
      return validator.isURL(value);
    }
    return true;
  },
  isFQDN: function(rule, value) {
    if (rule) {
      return validator.isFQDN(value);
    }
    return true;
  },
  isIP: function(rule, value) {
    if (rule) {
      return validator.isIP(value);
    }
    return true;
  },
  isAlpha: function(rule, value) {
    if (rule) {
      return validator.isAlpha(value);
    }
    return true;
  },
  isNumeric: function(rule, value) {
    if (rule) {
      return validator.isNumeric(value);
    }
    return true;
  },
  isAlphanumeric: function(rule, value) {
    if (rule) {
      return validator.isAlphanumeric(value);
    }
    return true;
  },
  isBase64: function(rule, value) {
    if (rule) {
      return validator.isBase64(value);
    }
    return true;
  },
  isHexadecimal: function(rule, value) {
    if (rule) {
      return validator.isHexadecimal(value);
    }
    return true;
  },
  isHexColor: function(rule, value) {
    if (rule) {
      return validator.isHexColor(value);
    }
    return true;
  },
  isLowercase: function(rule, value) {
    if (rule) {
      return validator.isLowercase(value);
    }
    return true;
  },
  isUppercase: function(rule, value) {
    if (rule) {
      return validator.isUppercase(value);
    }
    return true;
  },
  isInt: function(rule, value) {
    if (rule) {
      return validator.isInt(value);
    }
    return true;
  },
  isFloat: function(rule, value) {
    if (rule) {
      return validator.isFloat(value);
    }
    return true;
  },
  isDivisibleBy: function(rule, value) {
    if (rule) {
      return validator.isDivisibleBy(value, rule);
    }
    return true;
  },
  isByteLength: function(rule, value) {
    if (rule) {
      return validator.isByteLength(value);
    }
    return true;
  },
  isUUID: function(rule, value) {
    if (rule) {
      return validator.isUUID(value);
    }
    return true;
  },
  isDate: function(rule, value) {
    if (rule) {
      return validator.isDate(value);
    }
    return true;
  },
  isAfter: function(rule, value) {
    if (rule) {
      return validator.isAfter(value);
    }
    return true;
  },
  isBefore: function(rule, value) {
    if (rule) {
      return validator.isBefore(value);
    }
    return true;
  },
  isIn: function(rule, value) {
    return validator.isIn(value, rule);
  },
  isCreditCard: function(rule, value) {
    if (rule) {
      return validator.isCreditCard(value);
    }
    return true;
  },
  isISBN: function(rule, value) {
    if (rule) {
      return validator.isISBN(value);
    }
    return true;
  },
  isJSON: function(rule, value) {
    if (rule) {
      return validator.isJSON(value);
    }
    return true;
  },
  isMobilePhone: function(rule, value) {
    if (rule) {
      return validator.isMobilePhone(value);
    }
    return true;
  },
  isMultibyte: function(rule, value) {
    if (rule) {
      return validator.isMultibyte(value);
    }
    return true;
  },
  isAscii: function(rule, value) {
    if (rule) {
      return validator.isAscii(value);
    }
    return true;
  },
  isFullWidth: function(rule, value) {
    if (rule) {
      return validator.isFullWidth(value);
    }
    return true;
  },
  isHalfWidth: function(rule, value) {
    if (rule) {
      return validator.isHalfWidth(value);
    }
    return true;
  },
  isVariableWidth: function(rule, value) {
    if (rule) {
      return validator.isVariableWidth(value);
    }
    return true;
  },
  isSurrogatePair: function(rule, value) {
    if (rule) {
      return validator.isSurrogatePair(value);
    }
    return true;
  },
  isMongoId: function(rule, value) {
    if (rule) {
      return validator.isMongoId(value);
    }
    return true;
  },
  isLength: function(rule, value) {
    return validator.isLength(value, rule[0], rule[1]);
  },
  matches: function(rule, value) {
    if (rule instanceof Array) {
      return validator.matches(value, rule[0], rule[1]);
    } else {
      return validator.matches(value, rule);
    }
  }
};

exports.setConfig = function(validator_config) {
  config = validator_config;
};

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Kinto = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/es6");

require("core-js/fn/array/includes");

require("core-js/fn/string/pad-start");

require("core-js/fn/string/pad-end");

require("core-js/fn/symbol/async-iterator");

require("core-js/fn/object/get-own-property-descriptors");

require("core-js/fn/object/values");

require("core-js/fn/object/entries");

require("core-js/fn/promise/finally");

require("core-js/web");

require("regenerator-runtime/runtime");

if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"core-js/es6":2,"core-js/fn/array/includes":3,"core-js/fn/object/entries":4,"core-js/fn/object/get-own-property-descriptors":5,"core-js/fn/object/values":6,"core-js/fn/promise/finally":7,"core-js/fn/string/pad-end":8,"core-js/fn/string/pad-start":9,"core-js/fn/symbol/async-iterator":10,"core-js/web":275,"regenerator-runtime/runtime":276}],2:[function(require,module,exports){
require('../modules/es6.symbol');
require('../modules/es6.object.create');
require('../modules/es6.object.define-property');
require('../modules/es6.object.define-properties');
require('../modules/es6.object.get-own-property-descriptor');
require('../modules/es6.object.get-prototype-of');
require('../modules/es6.object.keys');
require('../modules/es6.object.get-own-property-names');
require('../modules/es6.object.freeze');
require('../modules/es6.object.seal');
require('../modules/es6.object.prevent-extensions');
require('../modules/es6.object.is-frozen');
require('../modules/es6.object.is-sealed');
require('../modules/es6.object.is-extensible');
require('../modules/es6.object.assign');
require('../modules/es6.object.is');
require('../modules/es6.object.set-prototype-of');
require('../modules/es6.object.to-string');
require('../modules/es6.function.bind');
require('../modules/es6.function.name');
require('../modules/es6.function.has-instance');
require('../modules/es6.parse-int');
require('../modules/es6.parse-float');
require('../modules/es6.number.constructor');
require('../modules/es6.number.to-fixed');
require('../modules/es6.number.to-precision');
require('../modules/es6.number.epsilon');
require('../modules/es6.number.is-finite');
require('../modules/es6.number.is-integer');
require('../modules/es6.number.is-nan');
require('../modules/es6.number.is-safe-integer');
require('../modules/es6.number.max-safe-integer');
require('../modules/es6.number.min-safe-integer');
require('../modules/es6.number.parse-float');
require('../modules/es6.number.parse-int');
require('../modules/es6.math.acosh');
require('../modules/es6.math.asinh');
require('../modules/es6.math.atanh');
require('../modules/es6.math.cbrt');
require('../modules/es6.math.clz32');
require('../modules/es6.math.cosh');
require('../modules/es6.math.expm1');
require('../modules/es6.math.fround');
require('../modules/es6.math.hypot');
require('../modules/es6.math.imul');
require('../modules/es6.math.log10');
require('../modules/es6.math.log1p');
require('../modules/es6.math.log2');
require('../modules/es6.math.sign');
require('../modules/es6.math.sinh');
require('../modules/es6.math.tanh');
require('../modules/es6.math.trunc');
require('../modules/es6.string.from-code-point');
require('../modules/es6.string.raw');
require('../modules/es6.string.trim');
require('../modules/es6.string.iterator');
require('../modules/es6.string.code-point-at');
require('../modules/es6.string.ends-with');
require('../modules/es6.string.includes');
require('../modules/es6.string.repeat');
require('../modules/es6.string.starts-with');
require('../modules/es6.string.anchor');
require('../modules/es6.string.big');
require('../modules/es6.string.blink');
require('../modules/es6.string.bold');
require('../modules/es6.string.fixed');
require('../modules/es6.string.fontcolor');
require('../modules/es6.string.fontsize');
require('../modules/es6.string.italics');
require('../modules/es6.string.link');
require('../modules/es6.string.small');
require('../modules/es6.string.strike');
require('../modules/es6.string.sub');
require('../modules/es6.string.sup');
require('../modules/es6.date.now');
require('../modules/es6.date.to-json');
require('../modules/es6.date.to-iso-string');
require('../modules/es6.date.to-string');
require('../modules/es6.date.to-primitive');
require('../modules/es6.array.is-array');
require('../modules/es6.array.from');
require('../modules/es6.array.of');
require('../modules/es6.array.join');
require('../modules/es6.array.slice');
require('../modules/es6.array.sort');
require('../modules/es6.array.for-each');
require('../modules/es6.array.map');
require('../modules/es6.array.filter');
require('../modules/es6.array.some');
require('../modules/es6.array.every');
require('../modules/es6.array.reduce');
require('../modules/es6.array.reduce-right');
require('../modules/es6.array.index-of');
require('../modules/es6.array.last-index-of');
require('../modules/es6.array.copy-within');
require('../modules/es6.array.fill');
require('../modules/es6.array.find');
require('../modules/es6.array.find-index');
require('../modules/es6.array.species');
require('../modules/es6.array.iterator');
require('../modules/es6.regexp.constructor');
require('../modules/es6.regexp.to-string');
require('../modules/es6.regexp.flags');
require('../modules/es6.regexp.match');
require('../modules/es6.regexp.replace');
require('../modules/es6.regexp.search');
require('../modules/es6.regexp.split');
require('../modules/es6.promise');
require('../modules/es6.map');
require('../modules/es6.set');
require('../modules/es6.weak-map');
require('../modules/es6.weak-set');
require('../modules/es6.typed.array-buffer');
require('../modules/es6.typed.data-view');
require('../modules/es6.typed.int8-array');
require('../modules/es6.typed.uint8-array');
require('../modules/es6.typed.uint8-clamped-array');
require('../modules/es6.typed.int16-array');
require('../modules/es6.typed.uint16-array');
require('../modules/es6.typed.int32-array');
require('../modules/es6.typed.uint32-array');
require('../modules/es6.typed.float32-array');
require('../modules/es6.typed.float64-array');
require('../modules/es6.reflect.apply');
require('../modules/es6.reflect.construct');
require('../modules/es6.reflect.define-property');
require('../modules/es6.reflect.delete-property');
require('../modules/es6.reflect.enumerate');
require('../modules/es6.reflect.get');
require('../modules/es6.reflect.get-own-property-descriptor');
require('../modules/es6.reflect.get-prototype-of');
require('../modules/es6.reflect.has');
require('../modules/es6.reflect.is-extensible');
require('../modules/es6.reflect.own-keys');
require('../modules/es6.reflect.prevent-extensions');
require('../modules/es6.reflect.set');
require('../modules/es6.reflect.set-prototype-of');
module.exports = require('../modules/_core');

},{"../modules/_core":29,"../modules/es6.array.copy-within":127,"../modules/es6.array.every":128,"../modules/es6.array.fill":129,"../modules/es6.array.filter":130,"../modules/es6.array.find":132,"../modules/es6.array.find-index":131,"../modules/es6.array.for-each":133,"../modules/es6.array.from":134,"../modules/es6.array.index-of":135,"../modules/es6.array.is-array":136,"../modules/es6.array.iterator":137,"../modules/es6.array.join":138,"../modules/es6.array.last-index-of":139,"../modules/es6.array.map":140,"../modules/es6.array.of":141,"../modules/es6.array.reduce":143,"../modules/es6.array.reduce-right":142,"../modules/es6.array.slice":144,"../modules/es6.array.some":145,"../modules/es6.array.sort":146,"../modules/es6.array.species":147,"../modules/es6.date.now":148,"../modules/es6.date.to-iso-string":149,"../modules/es6.date.to-json":150,"../modules/es6.date.to-primitive":151,"../modules/es6.date.to-string":152,"../modules/es6.function.bind":153,"../modules/es6.function.has-instance":154,"../modules/es6.function.name":155,"../modules/es6.map":156,"../modules/es6.math.acosh":157,"../modules/es6.math.asinh":158,"../modules/es6.math.atanh":159,"../modules/es6.math.cbrt":160,"../modules/es6.math.clz32":161,"../modules/es6.math.cosh":162,"../modules/es6.math.expm1":163,"../modules/es6.math.fround":164,"../modules/es6.math.hypot":165,"../modules/es6.math.imul":166,"../modules/es6.math.log10":167,"../modules/es6.math.log1p":168,"../modules/es6.math.log2":169,"../modules/es6.math.sign":170,"../modules/es6.math.sinh":171,"../modules/es6.math.tanh":172,"../modules/es6.math.trunc":173,"../modules/es6.number.constructor":174,"../modules/es6.number.epsilon":175,"../modules/es6.number.is-finite":176,"../modules/es6.number.is-integer":177,"../modules/es6.number.is-nan":178,"../modules/es6.number.is-safe-integer":179,"../modules/es6.number.max-safe-integer":180,"../modules/es6.number.min-safe-integer":181,"../modules/es6.number.parse-float":182,"../modules/es6.number.parse-int":183,"../modules/es6.number.to-fixed":184,"../modules/es6.number.to-precision":185,"../modules/es6.object.assign":186,"../modules/es6.object.create":187,"../modules/es6.object.define-properties":188,"../modules/es6.object.define-property":189,"../modules/es6.object.freeze":190,"../modules/es6.object.get-own-property-descriptor":191,"../modules/es6.object.get-own-property-names":192,"../modules/es6.object.get-prototype-of":193,"../modules/es6.object.is":197,"../modules/es6.object.is-extensible":194,"../modules/es6.object.is-frozen":195,"../modules/es6.object.is-sealed":196,"../modules/es6.object.keys":198,"../modules/es6.object.prevent-extensions":199,"../modules/es6.object.seal":200,"../modules/es6.object.set-prototype-of":201,"../modules/es6.object.to-string":202,"../modules/es6.parse-float":203,"../modules/es6.parse-int":204,"../modules/es6.promise":205,"../modules/es6.reflect.apply":206,"../modules/es6.reflect.construct":207,"../modules/es6.reflect.define-property":208,"../modules/es6.reflect.delete-property":209,"../modules/es6.reflect.enumerate":210,"../modules/es6.reflect.get":213,"../modules/es6.reflect.get-own-property-descriptor":211,"../modules/es6.reflect.get-prototype-of":212,"../modules/es6.reflect.has":214,"../modules/es6.reflect.is-extensible":215,"../modules/es6.reflect.own-keys":216,"../modules/es6.reflect.prevent-extensions":217,"../modules/es6.reflect.set":219,"../modules/es6.reflect.set-prototype-of":218,"../modules/es6.regexp.constructor":220,"../modules/es6.regexp.flags":221,"../modules/es6.regexp.match":222,"../modules/es6.regexp.replace":223,"../modules/es6.regexp.search":224,"../modules/es6.regexp.split":225,"../modules/es6.regexp.to-string":226,"../modules/es6.set":227,"../modules/es6.string.anchor":228,"../modules/es6.string.big":229,"../modules/es6.string.blink":230,"../modules/es6.string.bold":231,"../modules/es6.string.code-point-at":232,"../modules/es6.string.ends-with":233,"../modules/es6.string.fixed":234,"../modules/es6.string.fontcolor":235,"../modules/es6.string.fontsize":236,"../modules/es6.string.from-code-point":237,"../modules/es6.string.includes":238,"../modules/es6.string.italics":239,"../modules/es6.string.iterator":240,"../modules/es6.string.link":241,"../modules/es6.string.raw":242,"../modules/es6.string.repeat":243,"../modules/es6.string.small":244,"../modules/es6.string.starts-with":245,"../modules/es6.string.strike":246,"../modules/es6.string.sub":247,"../modules/es6.string.sup":248,"../modules/es6.string.trim":249,"../modules/es6.symbol":250,"../modules/es6.typed.array-buffer":251,"../modules/es6.typed.data-view":252,"../modules/es6.typed.float32-array":253,"../modules/es6.typed.float64-array":254,"../modules/es6.typed.int16-array":255,"../modules/es6.typed.int32-array":256,"../modules/es6.typed.int8-array":257,"../modules/es6.typed.uint16-array":258,"../modules/es6.typed.uint32-array":259,"../modules/es6.typed.uint8-array":260,"../modules/es6.typed.uint8-clamped-array":261,"../modules/es6.weak-map":262,"../modules/es6.weak-set":263}],3:[function(require,module,exports){
require('../../modules/es7.array.includes');
module.exports = require('../../modules/_core').Array.includes;

},{"../../modules/_core":29,"../../modules/es7.array.includes":264}],4:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;

},{"../../modules/_core":29,"../../modules/es7.object.entries":265}],5:[function(require,module,exports){
require('../../modules/es7.object.get-own-property-descriptors');
module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

},{"../../modules/_core":29,"../../modules/es7.object.get-own-property-descriptors":266}],6:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/_core').Object.values;

},{"../../modules/_core":29,"../../modules/es7.object.values":267}],7:[function(require,module,exports){
'use strict';
require('../../modules/es6.promise');
require('../../modules/es7.promise.finally');
module.exports = require('../../modules/_core').Promise['finally'];

},{"../../modules/_core":29,"../../modules/es6.promise":205,"../../modules/es7.promise.finally":268}],8:[function(require,module,exports){
require('../../modules/es7.string.pad-end');
module.exports = require('../../modules/_core').String.padEnd;

},{"../../modules/_core":29,"../../modules/es7.string.pad-end":269}],9:[function(require,module,exports){
require('../../modules/es7.string.pad-start');
module.exports = require('../../modules/_core').String.padStart;

},{"../../modules/_core":29,"../../modules/es7.string.pad-start":270}],10:[function(require,module,exports){
require('../../modules/es7.symbol.async-iterator');
module.exports = require('../../modules/_wks-ext').f('asyncIterator');

},{"../../modules/_wks-ext":124,"../../modules/es7.symbol.async-iterator":271}],11:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],12:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":25}],13:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":47,"./_wks":125}],14:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],15:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":56}],16:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-absolute-index":110,"./_to-length":114,"./_to-object":115}],17:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-absolute-index":110,"./_to-length":114,"./_to-object":115}],18:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":110,"./_to-iobject":113,"./_to-length":114}],19:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":22,"./_ctx":31,"./_iobject":52,"./_to-length":114,"./_to-object":115}],20:[function(require,module,exports){
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":11,"./_iobject":52,"./_to-length":114,"./_to-object":115}],21:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":54,"./_is-object":56,"./_wks":125}],22:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":21}],23:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":11,"./_invoke":51,"./_is-object":56}],24:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":25,"./_wks":125}],25:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],26:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":14,"./_ctx":31,"./_descriptors":35,"./_for-of":44,"./_iter-define":60,"./_iter-step":62,"./_meta":69,"./_object-create":73,"./_object-dp":74,"./_redefine-all":92,"./_set-species":96,"./_validate-collection":122}],27:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":14,"./_an-object":15,"./_array-methods":19,"./_for-of":44,"./_has":46,"./_is-object":56,"./_meta":69,"./_redefine-all":92,"./_validate-collection":122}],28:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":14,"./_export":39,"./_fails":41,"./_for-of":44,"./_global":45,"./_inherit-if-required":50,"./_is-object":56,"./_iter-detect":61,"./_meta":69,"./_redefine":93,"./_redefine-all":92,"./_set-to-string-tag":97}],29:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],30:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":74,"./_property-desc":91}],31:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":11}],32:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":41}],33:[function(require,module,exports){
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":15,"./_to-primitive":116}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":41}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":45,"./_is-object":56}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],38:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":79,"./_object-keys":82,"./_object-pie":83}],39:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":29,"./_ctx":31,"./_global":45,"./_hide":47,"./_redefine":93}],40:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":125}],41:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],42:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":34,"./_fails":41,"./_hide":47,"./_redefine":93,"./_wks":125}],43:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":15}],44:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":15,"./_ctx":31,"./_is-array-iter":53,"./_iter-call":58,"./_to-length":114,"./core.get-iterator-method":126}],45:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],46:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],47:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":35,"./_object-dp":74,"./_property-desc":91}],48:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":45}],49:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":35,"./_dom-create":36,"./_fails":41}],50:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":56,"./_set-proto":95}],51:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],52:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":25}],53:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":63,"./_wks":125}],54:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":25}],55:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":56}],56:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],57:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":25,"./_is-object":56,"./_wks":125}],58:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":15}],59:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":47,"./_object-create":73,"./_property-desc":91,"./_set-to-string-tag":97,"./_wks":125}],60:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":39,"./_hide":47,"./_iter-create":59,"./_iterators":63,"./_library":64,"./_object-gpo":80,"./_redefine":93,"./_set-to-string-tag":97,"./_wks":125}],61:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":125}],62:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],63:[function(require,module,exports){
module.exports = {};

},{}],64:[function(require,module,exports){
module.exports = false;

},{}],65:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],66:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":68}],67:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],68:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],69:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":41,"./_has":46,"./_is-object":56,"./_object-dp":74,"./_uid":120}],70:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":25,"./_global":45,"./_task":109}],71:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":11}],72:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":41,"./_iobject":52,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_to-object":115}],73:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":15,"./_dom-create":36,"./_enum-bug-keys":37,"./_html":48,"./_object-dps":75,"./_shared-key":98}],74:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":15,"./_descriptors":35,"./_ie8-dom-define":49,"./_to-primitive":116}],75:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":15,"./_descriptors":35,"./_object-dp":74,"./_object-keys":82}],76:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":35,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":83,"./_property-desc":91,"./_to-iobject":113,"./_to-primitive":116}],77:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":78,"./_to-iobject":113}],78:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":81}],79:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],80:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":46,"./_shared-key":98,"./_to-object":115}],81:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":18,"./_has":46,"./_shared-key":98,"./_to-iobject":113}],82:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":81}],83:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],84:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":29,"./_export":39,"./_fails":41}],85:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":82,"./_object-pie":83,"./_to-iobject":113}],86:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":15,"./_global":45,"./_object-gopn":78,"./_object-gops":79}],87:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":45,"./_string-trim":107,"./_string-ws":108}],88:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":45,"./_string-trim":107,"./_string-ws":108}],89:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],90:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":15,"./_is-object":56,"./_new-promise-capability":71}],91:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],92:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":93}],93:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":29,"./_global":45,"./_has":46,"./_hide":47,"./_uid":120}],94:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],95:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":15,"./_ctx":31,"./_is-object":56,"./_object-gopd":76}],96:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":35,"./_global":45,"./_object-dp":74,"./_wks":125}],97:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":46,"./_object-dp":74,"./_wks":125}],98:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":99,"./_uid":120}],99:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":29,"./_global":45,"./_library":64}],100:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":11,"./_an-object":15,"./_wks":125}],101:[function(require,module,exports){
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":41}],102:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":34,"./_to-integer":112}],103:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":34,"./_is-regexp":57}],104:[function(require,module,exports){
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":34,"./_export":39,"./_fails":41}],105:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":34,"./_string-repeat":106,"./_to-length":114}],106:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":34,"./_to-integer":112}],107:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":34,"./_export":39,"./_fails":41,"./_string-ws":108}],108:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],109:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":25,"./_ctx":31,"./_dom-create":36,"./_global":45,"./_html":48,"./_invoke":51}],110:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":112}],111:[function(require,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":112,"./_to-length":114}],112:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],113:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":34,"./_iobject":52}],114:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":112}],115:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":34}],116:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":56}],117:[function(require,module,exports){
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_an-instance":14,"./_array-copy-within":16,"./_array-fill":17,"./_array-includes":18,"./_array-methods":19,"./_classof":24,"./_ctx":31,"./_descriptors":35,"./_export":39,"./_fails":41,"./_global":45,"./_has":46,"./_hide":47,"./_is-array-iter":53,"./_is-object":56,"./_iter-detect":61,"./_iterators":63,"./_library":64,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_object-gpo":80,"./_property-desc":91,"./_redefine-all":92,"./_set-species":96,"./_species-constructor":100,"./_to-absolute-index":110,"./_to-index":111,"./_to-integer":112,"./_to-length":114,"./_to-object":115,"./_to-primitive":116,"./_typed":119,"./_typed-buffer":118,"./_uid":120,"./_wks":125,"./core.get-iterator-method":126,"./es6.array.iterator":137}],118:[function(require,module,exports){
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":14,"./_array-fill":17,"./_descriptors":35,"./_fails":41,"./_global":45,"./_hide":47,"./_library":64,"./_object-dp":74,"./_object-gopn":78,"./_redefine-all":92,"./_set-to-string-tag":97,"./_to-index":111,"./_to-integer":112,"./_to-length":114,"./_typed":119}],119:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":45,"./_hide":47,"./_uid":120}],120:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],121:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":45}],122:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":56}],123:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":29,"./_global":45,"./_library":64,"./_object-dp":74,"./_wks-ext":124}],124:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":125}],125:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":45,"./_shared":99,"./_uid":120}],126:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":24,"./_core":29,"./_iterators":63,"./_wks":125}],127:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":13,"./_array-copy-within":16,"./_export":39}],128:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],129:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":13,"./_array-fill":17,"./_export":39}],130:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],131:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":13,"./_array-methods":19,"./_export":39}],132:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":13,"./_array-methods":19,"./_export":39}],133:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],134:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":30,"./_ctx":31,"./_export":39,"./_is-array-iter":53,"./_iter-call":58,"./_iter-detect":61,"./_to-length":114,"./_to-object":115,"./core.get-iterator-method":126}],135:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":18,"./_export":39,"./_strict-method":101}],136:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":39,"./_is-array":54}],137:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":13,"./_iter-define":60,"./_iter-step":62,"./_iterators":63,"./_to-iobject":113}],138:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":39,"./_iobject":52,"./_strict-method":101,"./_to-iobject":113}],139:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":39,"./_strict-method":101,"./_to-integer":112,"./_to-iobject":113,"./_to-length":114}],140:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],141:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_fails":41}],142:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":20,"./_export":39,"./_strict-method":101}],143:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":20,"./_export":39,"./_strict-method":101}],144:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_cof":25,"./_export":39,"./_fails":41,"./_html":48,"./_to-absolute-index":110,"./_to-length":114}],145:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],146:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":11,"./_export":39,"./_fails":41,"./_strict-method":101,"./_to-object":115}],147:[function(require,module,exports){
require('./_set-species')('Array');

},{"./_set-species":96}],148:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":39}],149:[function(require,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":32,"./_export":39}],150:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":39,"./_fails":41,"./_to-object":115,"./_to-primitive":116}],151:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":33,"./_hide":47,"./_wks":125}],152:[function(require,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":93}],153:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_bind":23,"./_export":39}],154:[function(require,module,exports){
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":56,"./_object-dp":74,"./_object-gpo":80,"./_wks":125}],155:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":35,"./_object-dp":74}],156:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":28,"./_collection-strong":26,"./_validate-collection":122}],157:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":39,"./_math-log1p":67}],158:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":39}],159:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":39}],160:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":39,"./_math-sign":68}],161:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":39}],162:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":39}],163:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":39,"./_math-expm1":65}],164:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":39,"./_math-fround":66}],165:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":39}],166:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":39,"./_fails":41}],167:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":39}],168:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":39,"./_math-log1p":67}],169:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":39}],170:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":39,"./_math-sign":68}],171:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":39,"./_fails":41,"./_math-expm1":65}],172:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":39,"./_math-expm1":65}],173:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":39}],174:[function(require,module,exports){
'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":25,"./_descriptors":35,"./_fails":41,"./_global":45,"./_has":46,"./_inherit-if-required":50,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_redefine":93,"./_string-trim":107,"./_to-primitive":116}],175:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":39}],176:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":39,"./_global":45}],177:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":39,"./_is-integer":55}],178:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":39}],179:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":39,"./_is-integer":55}],180:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":39}],181:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":39}],182:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":87}],183:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":88}],184:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_a-number-value":12,"./_export":39,"./_fails":41,"./_string-repeat":106,"./_to-integer":112}],185:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_a-number-value":12,"./_export":39,"./_fails":41}],186:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":39,"./_object-assign":72}],187:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":39,"./_object-create":73}],188:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":35,"./_export":39,"./_object-dps":75}],189:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":35,"./_export":39,"./_object-dp":74}],190:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],191:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":76,"./_object-sap":84,"./_to-iobject":113}],192:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":77,"./_object-sap":84}],193:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":80,"./_object-sap":84,"./_to-object":115}],194:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":56,"./_object-sap":84}],195:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":56,"./_object-sap":84}],196:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":56,"./_object-sap":84}],197:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":39,"./_same-value":94}],198:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":82,"./_object-sap":84,"./_to-object":115}],199:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],200:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],201:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":39,"./_set-proto":95}],202:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":24,"./_redefine":93,"./_wks":125}],203:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":87}],204:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":88}],205:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":11,"./_an-instance":14,"./_classof":24,"./_core":29,"./_ctx":31,"./_export":39,"./_for-of":44,"./_global":45,"./_is-object":56,"./_iter-detect":61,"./_library":64,"./_microtask":70,"./_new-promise-capability":71,"./_perform":89,"./_promise-resolve":90,"./_redefine-all":92,"./_set-species":96,"./_set-to-string-tag":97,"./_species-constructor":100,"./_task":109,"./_user-agent":121,"./_wks":125}],206:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":11,"./_an-object":15,"./_export":39,"./_fails":41,"./_global":45}],207:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":11,"./_an-object":15,"./_bind":23,"./_export":39,"./_fails":41,"./_global":45,"./_is-object":56,"./_object-create":73}],208:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":15,"./_export":39,"./_fails":41,"./_object-dp":74,"./_to-primitive":116}],209:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gopd":76}],210:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_an-object":15,"./_export":39,"./_iter-create":59}],211:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gopd":76}],212:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gpo":80}],213:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_an-object":15,"./_export":39,"./_has":46,"./_is-object":56,"./_object-gopd":76,"./_object-gpo":80}],214:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":39}],215:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":15,"./_export":39}],216:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":39,"./_own-keys":86}],217:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":15,"./_export":39}],218:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":39,"./_set-proto":95}],219:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_an-object":15,"./_export":39,"./_has":46,"./_is-object":56,"./_object-dp":74,"./_object-gopd":76,"./_object-gpo":80,"./_property-desc":91}],220:[function(require,module,exports){
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":35,"./_fails":41,"./_flags":43,"./_global":45,"./_inherit-if-required":50,"./_is-regexp":57,"./_object-dp":74,"./_object-gopn":78,"./_redefine":93,"./_set-species":96,"./_wks":125}],221:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":35,"./_flags":43,"./_object-dp":74}],222:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":42}],223:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":42}],224:[function(require,module,exports){
// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

},{"./_fix-re-wks":42}],225:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

},{"./_fix-re-wks":42,"./_is-regexp":57}],226:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":15,"./_descriptors":35,"./_fails":41,"./_flags":43,"./_redefine":93,"./es6.regexp.flags":221}],227:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":28,"./_collection-strong":26,"./_validate-collection":122}],228:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":104}],229:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":104}],230:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":104}],231:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":104}],232:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":39,"./_string-at":102}],233:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103,"./_to-length":114}],234:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":104}],235:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":104}],236:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":104}],237:[function(require,module,exports){
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":39,"./_to-absolute-index":110}],238:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103}],239:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":104}],240:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":60,"./_string-at":102}],241:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":104}],242:[function(require,module,exports){
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":39,"./_to-iobject":113,"./_to-length":114}],243:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":39,"./_string-repeat":106}],244:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":104}],245:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103,"./_to-length":114}],246:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":104}],247:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":104}],248:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":104}],249:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":107}],250:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":15,"./_descriptors":35,"./_enum-keys":38,"./_export":39,"./_fails":41,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":54,"./_is-object":56,"./_library":64,"./_meta":69,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_object-gopn-ext":77,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_property-desc":91,"./_redefine":93,"./_set-to-string-tag":97,"./_shared":99,"./_to-iobject":113,"./_to-primitive":116,"./_uid":120,"./_wks":125,"./_wks-define":123,"./_wks-ext":124}],251:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":15,"./_export":39,"./_fails":41,"./_global":45,"./_is-object":56,"./_set-species":96,"./_species-constructor":100,"./_to-absolute-index":110,"./_to-length":114,"./_typed":119,"./_typed-buffer":118}],252:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":39,"./_typed":119,"./_typed-buffer":118}],253:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],254:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],255:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],256:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],257:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],258:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],259:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],260:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],261:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":117}],262:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":19,"./_collection":28,"./_collection-weak":27,"./_fails":41,"./_is-object":56,"./_meta":69,"./_object-assign":72,"./_redefine":93,"./_validate-collection":122}],263:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":28,"./_collection-weak":27,"./_validate-collection":122}],264:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":13,"./_array-includes":18,"./_export":39}],265:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":39,"./_object-to-array":85}],266:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_object-gopd":76,"./_own-keys":86,"./_to-iobject":113}],267:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":39,"./_object-to-array":85}],268:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":29,"./_export":39,"./_global":45,"./_promise-resolve":90,"./_species-constructor":100}],269:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":39,"./_string-pad":105,"./_user-agent":121}],270:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":39,"./_string-pad":105,"./_user-agent":121}],271:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":123}],272:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":45,"./_hide":47,"./_iterators":63,"./_object-keys":82,"./_redefine":93,"./_wks":125,"./es6.array.iterator":137}],273:[function(require,module,exports){
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":39,"./_task":109}],274:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":39,"./_global":45,"./_user-agent":121}],275:[function(require,module,exports){
require('../modules/web.timers');
require('../modules/web.immediate');
require('../modules/web.dom.iterable');
module.exports = require('../modules/_core');

},{"../modules/_core":29,"../modules/web.dom.iterable":272,"../modules/web.immediate":273,"../modules/web.timers":274}],276:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],277:[function(require,module,exports){
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;
},{}],278:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],279:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],280:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],281:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],282:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],283:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],284:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],285:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],286:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":297}],287:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],288:[function(require,module,exports){
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
},{}],289:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],290:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],291:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],292:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],293:[function(require,module,exports){
var defineProperty = require("./defineProperty");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;
},{"./defineProperty":284}],294:[function(require,module,exports){
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
},{"./objectWithoutPropertiesLoose":295}],295:[function(require,module,exports){
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
},{}],296:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":301,"./assertThisInitialized":280}],297:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],298:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":278,"./iterableToArrayLimit":290,"./nonIterableRest":291}],299:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
},{"./arrayWithHoles":278,"./iterableToArray":289,"./nonIterableRest":291}],300:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":279,"./iterableToArray":289,"./nonIterableSpread":292}],301:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],302:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":303}],303:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);

},{}],304:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":302}],305:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],306:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SUPPORTED_PROTOCOL_VERSION = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _utils = require("./utils");

var _http = _interopRequireDefault(require("./http"));

var _endpoint = _interopRequireDefault(require("./endpoint"));

var requests = _interopRequireWildcard(require("./requests"));

var _batch2 = require("./batch");

var _bucket = _interopRequireDefault(require("./bucket"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

/**
 * Currently supported protocol version.
 * @type {String}
 */
var SUPPORTED_PROTOCOL_VERSION = "v1";
/**
 * High level HTTP client for the Kinto API.
 *
 * @example
 * const client = new KintoClient("https://kinto.dev.mozaws.net/v1");
 * client.bucket("default")
 *    .collection("my-blog")
 *    .createRecord({title: "First article"})
 *   .then(console.log.bind(console))
 *   .catch(console.error.bind(console));
 */

exports.SUPPORTED_PROTOCOL_VERSION = SUPPORTED_PROTOCOL_VERSION;
var KintoClientBase = (_dec = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec2 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec3 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec4 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec5 = (0, _utils.nobatch)("Can't use batch within a batch!"), _dec6 = (0, _utils.capable)(["permissions_endpoint"]), _dec7 = (0, _utils.support)("1.4", "2.0"), (_class =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * @param  {String}       remote  The remote URL.
   * @param  {Object}       [options={}]                  The options object.
   * @param  {Boolean}      [options.safe=true]           Adds concurrency headers to every requests.
   * @param  {EventEmitter} [options.events=EventEmitter] The events handler instance.
   * @param  {Object}       [options.headers={}]          The key-value headers to pass to each request.
   * @param  {Object}       [options.retry=0]             Number of retries when request fails (default: 0)
   * @param  {String}       [options.bucket="default"]    The default bucket to use.
   * @param  {String}       [options.requestMode="cors"]  The HTTP request mode (from ES6 fetch spec).
   * @param  {Number}       [options.timeout=null]        The request timeout in ms, if any.
   */
  function KintoClientBase(remote) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, KintoClientBase);

    if (typeof remote !== "string" || !remote.length) {
      throw new Error("Invalid remote URL: " + remote);
    }

    if (remote[remote.length - 1] === "/") {
      remote = remote.slice(0, -1);
    }

    this._backoffReleaseTime = null;
    this._requests = [];
    this._isBatch = !!options.batch;
    this._retry = options.retry || 0;
    this._safe = !!options.safe;
    this._headers = options.headers || {}; // public properties

    /**
     * The remote server base URL.
     * @type {String}
     */

    this.remote = remote;
    /**
     * Current server information.
     * @ignore
     * @type {Object|null}
     */

    this.serverInfo = null;
    /**
     * The event emitter instance. Should comply with the `EventEmitter`
     * interface.
     * @ignore
     * @type {Class}
     */

    this.events = options.events;
    var requestMode = options.requestMode,
        timeout = options.timeout;
    /**
     * The HTTP instance.
     * @ignore
     * @type {HTTP}
     */

    this.http = new _http.default(this.events, {
      requestMode: requestMode,
      timeout: timeout
    });

    this._registerHTTPEvents();
  }
  /**
   * The remote endpoint base URL. Setting the value will also extract and
   * validate the version.
   * @type {String}
   */


  (0, _createClass2.default)(KintoClientBase, [{
    key: "_registerHTTPEvents",

    /**
     * Registers HTTP events.
     * @private
     */
    value: function _registerHTTPEvents() {
      var _this = this;

      // Prevent registering event from a batch client instance
      if (!this._isBatch) {
        this.events.on("backoff", function (backoffMs) {
          _this._backoffReleaseTime = backoffMs;
        });
      }
    }
    /**
     * Retrieve a bucket object to perform operations on it.
     *
     * @param  {String}  name              The bucket name.
     * @param  {Object}  [options={}]      The request options.
     * @param  {Boolean} [options.safe]    The resulting safe option.
     * @param  {Number}  [options.retry]   The resulting retry option.
     * @param  {Object}  [options.headers] The extended headers object option.
     * @return {Bucket}
     */

  }, {
    key: "bucket",
    value: function bucket(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _bucket.default(this, name, {
        batch: this._isBatch,
        headers: this._getHeaders(options),
        safe: this._getSafe(options),
        retry: this._getRetry(options)
      });
    }
    /**
     * Set client "headers" for every request, updating previous headers (if any).
     *
     * @param {Object} headers The headers to merge with existing ones.
     */

  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this._headers = (0, _objectSpread2.default)({}, this._headers, headers);
      this.serverInfo = null;
    }
    /**
     * Get the value of "headers" for a given request, merging the
     * per-request headers with our own "default" headers.
     *
     * Note that unlike other options, headers aren't overridden, but
     * merged instead.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Object}
     */

  }, {
    key: "_getHeaders",
    value: function _getHeaders(options) {
      return (0, _objectSpread2.default)({}, this._headers, options.headers);
    }
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */

  }, {
    key: "_getSafe",
    value: function _getSafe(options) {
      return (0, _objectSpread2.default)({
        safe: this._safe
      }, options).safe;
    }
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */

  }, {
    key: "_getRetry",
    value: function _getRetry(options) {
      return (0, _objectSpread2.default)({
        retry: this._retry
      }, options).retry;
    }
    /**
     * Retrieves the server's "hello" endpoint. This endpoint reveals
     * server capabilities and settings as well as telling the client
     * "who they are" according to their given authorization headers.
     *
     * @private
     * @param  {Object}  [options={}] The request options.
     * @param  {Object}  [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "_getHello",
    value: function () {
      var _getHello2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var options,
            path,
            _ref,
            json,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                path = this.remote + (0, _endpoint.default)("root");
                _context.next = 4;
                return this.http.request(path, {
                  headers: this._getHeaders(options)
                }, {
                  retry: this._getRetry(options)
                });

              case 4:
                _ref = _context.sent;
                json = _ref.json;
                return _context.abrupt("return", json);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _getHello() {
        return _getHello2.apply(this, arguments);
      };
    }()
    /**
     * Retrieves server information and persist them locally. This operation is
     * usually performed a single time during the instance lifecycle.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerInfo",
    value: function () {
      var _fetchServerInfo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var options,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};

                if (!this.serverInfo) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", this.serverInfo);

              case 3:
                _context2.next = 5;
                return this._getHello({
                  retry: this._getRetry(options)
                });

              case 5:
                this.serverInfo = _context2.sent;
                return _context2.abrupt("return", this.serverInfo);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function fetchServerInfo() {
        return _fetchServerInfo.apply(this, arguments);
      };
    }()
    /**
     * Retrieves Kinto server settings.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerSettings",
    value: function () {
      var _fetchServerSettings = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(options) {
        var _ref2, settings;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.fetchServerInfo(options);

              case 2:
                _ref2 = _context3.sent;
                settings = _ref2.settings;
                return _context3.abrupt("return", settings);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function fetchServerSettings(_x) {
        return _fetchServerSettings.apply(this, arguments);
      };
    }()
    /**
     * Retrieve server capabilities information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerCapabilities",
    value: function () {
      var _fetchServerCapabilities = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var options,
            _ref3,
            capabilities,
            _args4 = arguments;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                _context4.next = 3;
                return this.fetchServerInfo(options);

              case 3:
                _ref3 = _context4.sent;
                capabilities = _ref3.capabilities;
                return _context4.abrupt("return", capabilities);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function fetchServerCapabilities() {
        return _fetchServerCapabilities.apply(this, arguments);
      };
    }()
    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Object}  [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchUser",
    value: function () {
      var _fetchUser = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        var options,
            _ref4,
            user,
            _args5 = arguments;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                _context5.next = 3;
                return this._getHello(options);

              case 3:
                _ref4 = _context5.sent;
                user = _ref4.user;
                return _context5.abrupt("return", user);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function fetchUser() {
        return _fetchUser.apply(this, arguments);
      };
    }()
    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchHTTPApiVersion",
    value: function () {
      var _fetchHTTPApiVersion = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6() {
        var options,
            _ref5,
            http_api_version,
            _args6 = arguments;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                _context6.next = 3;
                return this.fetchServerInfo(options);

              case 3:
                _ref5 = _context6.sent;
                http_api_version = _ref5.http_api_version;
                return _context6.abrupt("return", http_api_version);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function fetchHTTPApiVersion() {
        return _fetchHTTPApiVersion.apply(this, arguments);
      };
    }()
    /**
     * Process batch requests, chunking them according to the batch_max_requests
     * server setting when needed.
     *
     * @param  {Array}  requests     The list of batch subrequests to perform.
     * @param  {Object} [options={}] The options object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "_batchRequests",
    value: function () {
      var _batchRequests2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(requests) {
        var _this2 = this;

        var options,
            headers,
            serverSettings,
            maxRequests,
            chunks,
            _ref6,
            responses,
            _args7 = arguments;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                headers = this._getHeaders(options);

                if (requests.length) {
                  _context7.next = 4;
                  break;
                }

                return _context7.abrupt("return", []);

              case 4:
                _context7.next = 6;
                return this.fetchServerSettings({
                  retry: this._getRetry(options)
                });

              case 6:
                serverSettings = _context7.sent;
                maxRequests = serverSettings["batch_max_requests"];

                if (!(maxRequests && requests.length > maxRequests)) {
                  _context7.next = 11;
                  break;
                }

                chunks = (0, _utils.partition)(requests, maxRequests);
                return _context7.abrupt("return", (0, _utils.pMap)(chunks, function (chunk) {
                  return _this2._batchRequests(chunk, options);
                }));

              case 11:
                _context7.next = 13;
                return this.execute({
                  // FIXME: is this really necessary, since it's also present in
                  // the "defaults"?
                  headers: headers,
                  path: (0, _endpoint.default)("batch"),
                  method: "POST",
                  body: {
                    defaults: {
                      headers: headers
                    },
                    requests: requests
                  }
                }, {
                  retry: this._getRetry(options)
                });

              case 13:
                _ref6 = _context7.sent;
                responses = _ref6.responses;
                return _context7.abrupt("return", responses);

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function _batchRequests(_x2) {
        return _batchRequests2.apply(this, arguments);
      };
    }()
    /**
     * Sends batch requests to the remote server.
     *
     * Note: Reserved for internal use only.
     *
     * @ignore
     * @param  {Function} fn                        The function to use for describing batch ops.
     * @param  {Object}   [options={}]              The options object.
     * @param  {Boolean}  [options.safe]            The safe option.
     * @param  {Number}   [options.retry]           The retry option.
     * @param  {String}   [options.bucket]          The bucket name option.
     * @param  {String}   [options.collection]      The collection name option.
     * @param  {Object}   [options.headers]         The headers object option.
     * @param  {Boolean}  [options.aggregate=false] Produces an aggregated result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function () {
      var _batch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(fn) {
        var options,
            rootBatch,
            bucketBatch,
            collBatch,
            batchClient,
            responses,
            _args8 = arguments;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                rootBatch = new KintoClientBase(this.remote, {
                  events: this.events,
                  batch: true,
                  safe: this._getSafe(options),
                  retry: this._getRetry(options)
                });

                if (options.bucket) {
                  bucketBatch = rootBatch.bucket(options.bucket);

                  if (options.collection) {
                    collBatch = bucketBatch.collection(options.collection);
                  }
                }

                batchClient = collBatch || bucketBatch || rootBatch;
                fn(batchClient);
                _context8.next = 7;
                return this._batchRequests(rootBatch._requests, options);

              case 7:
                responses = _context8.sent;

                if (!options.aggregate) {
                  _context8.next = 12;
                  break;
                }

                return _context8.abrupt("return", (0, _batch2.aggregate)(responses, rootBatch._requests));

              case 12:
                return _context8.abrupt("return", responses);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function batch(_x3) {
        return _batch.apply(this, arguments);
      };
    }()
    /**
     * Executes an atomic HTTP request.
     *
     * @private
     * @param  {Object}  request             The request object.
     * @param  {String}  request.path        The path to fetch, relative
     *     to the Kinto server root.
     * @param  {String}  [request.method="GET"] The method to use in the
     *     request.
     * @param  {Body}    [request.body]      The request body.
     * @param  {Object}  [request.headers={}] The request headers.
     * @param  {Object}  [options={}]        The options object.
     * @param  {Boolean} [options.raw=false] If true, resolve with full response
     * @param  {Boolean} [options.stringify=true] If true, serialize body data to
     * @param  {Number}  [options.retry=0]   The number of times to
     *     retry a request if the server responds with Retry-After.
     * JSON.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(request) {
        var options,
            _options$raw,
            raw,
            _options$stringify,
            stringify,
            msg,
            result,
            _args9 = arguments;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                options = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                _options$raw = options.raw, raw = _options$raw === void 0 ? false : _options$raw, _options$stringify = options.stringify, stringify = _options$stringify === void 0 ? true : _options$stringify; // If we're within a batch, add the request to the stack to send at once.

                if (!this._isBatch) {
                  _context9.next = 6;
                  break;
                }

                this._requests.push(request); // Resolve with a message in case people attempt at consuming the result
                // from within a batch operation.


                msg = "This result is generated from within a batch " + "operation and should not be consumed.";
                return _context9.abrupt("return", raw ? {
                  json: msg,
                  headers: {
                    get: function get() {}
                  }
                } : msg);

              case 6:
                _context9.next = 8;
                return this.http.request(this.remote + request.path, (0, _utils.cleanUndefinedProperties)({
                  // Limit requests to only those parts that would be allowed in
                  // a batch request -- don't pass through other fancy fetch()
                  // options like integrity, redirect, mode because they will
                  // break on a batch request.  A batch request only allows
                  // headers, method, path (above), and body.
                  method: request.method,
                  headers: request.headers,
                  body: stringify ? JSON.stringify(request.body) : request.body
                }), {
                  retry: this._getRetry(options)
                });

              case 8:
                result = _context9.sent;
                return _context9.abrupt("return", raw ? result : result.json);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function execute(_x4) {
        return _execute.apply(this, arguments);
      };
    }()
    /**
     * Fetch some pages from a paginated list, following the `next-page`
     * header automatically until we have fetched the requested number
     * of pages. Return a response with a `.next()` method that can be
     * called to fetch more results.
     *
     * @private
     * @param  {String}  path
     *     The path to make the request to.
     * @param  {Object}  params
     *     The parameters to use when making the request.
     * @param  {String}  [params.sort="-last_modified"]
     *     The sorting order to use when fetching.
     * @param  {Object}  [params.filters={}]
     *     The filters to send in the request.
     * @param  {Number}  [params.limit=undefined]
     *     The limit to send in the request. Undefined means no limit.
     * @param  {Number}  [params.pages=undefined]
     *     The number of pages to fetch. Undefined means one page. Pass
     *     Infinity to fetch everything.
     * @param  {String}  [params.since=undefined]
     *     The ETag from which to start fetching.
     * @param  {Object}  [options={}]
     *     Additional request-level parameters to use in all requests.
     * @param  {Object}  [options.headers={}]
     *     Headers to use during all requests.
     * @param  {Number}  [options.retry=0]
     *     Number of times to retry each request if the server responds
     *     with Retry-After.
     */

  }, {
    key: "paginatedList",
    value: function () {
      var _paginatedList = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(path, params) {
        var _this3 = this;

        var options,
            _sort$params,
            sort,
            filters,
            limit,
            pages,
            since,
            querystring,
            results,
            current,
            next,
            processNextPage,
            pageResults,
            handleResponse,
            _args13 = arguments;

        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : {};
                // FIXME: this is called even in batch requests, which doesn't
                // make any sense (since all batch requests get a "dummy"
                // response; see execute() above).
                _sort$params = (0, _objectSpread2.default)({
                  sort: "-last_modified"
                }, params), sort = _sort$params.sort, filters = _sort$params.filters, limit = _sort$params.limit, pages = _sort$params.pages, since = _sort$params.since; // Safety/Consistency check on ETag value.

                if (!(since && typeof since !== "string")) {
                  _context13.next = 4;
                  break;
                }

                throw new Error("Invalid value for since (".concat(since, "), should be ETag value."));

              case 4:
                querystring = (0, _utils.qsify)((0, _objectSpread2.default)({}, filters, {
                  _sort: sort,
                  _limit: limit,
                  _since: since
                }));
                results = [], current = 0;

                next =
                /*#__PURE__*/
                function () {
                  var _ref7 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee10(nextPage) {
                    return _regenerator.default.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            if (nextPage) {
                              _context10.next = 2;
                              break;
                            }

                            throw new Error("Pagination exhausted.");

                          case 2:
                            return _context10.abrupt("return", processNextPage(nextPage));

                          case 3:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, this);
                  }));

                  return function next(_x7) {
                    return _ref7.apply(this, arguments);
                  };
                }();

                processNextPage =
                /*#__PURE__*/
                function () {
                  var _ref8 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee11(nextPage) {
                    var headers;
                    return _regenerator.default.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            headers = options.headers;
                            _context11.t0 = handleResponse;
                            _context11.next = 4;
                            return _this3.http.request(nextPage, {
                              headers: headers
                            });

                          case 4:
                            _context11.t1 = _context11.sent;
                            return _context11.abrupt("return", (0, _context11.t0)(_context11.t1));

                          case 6:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));

                  return function processNextPage(_x8) {
                    return _ref8.apply(this, arguments);
                  };
                }();

                pageResults = function pageResults(results, nextPage, etag, totalRecords) {
                  // ETag string is supposed to be opaque and stored «as-is».
                  // ETag header values are quoted (because of * and W/"foo").
                  return {
                    last_modified: etag ? etag.replace(/"/g, "") : etag,
                    data: results,
                    next: next.bind(null, nextPage),
                    hasNextPage: !!nextPage,
                    totalRecords: totalRecords
                  };
                };

                handleResponse =
                /*#__PURE__*/
                function () {
                  var _ref9 = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee12(_ref10) {
                    var headers, json, nextPage, etag, totalRecords;
                    return _regenerator.default.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            headers = _ref10.headers, json = _ref10.json;
                            nextPage = headers.get("Next-Page");
                            etag = headers.get("ETag");
                            totalRecords = parseInt(headers.get("Total-Records"), 10);

                            if (pages) {
                              _context12.next = 6;
                              break;
                            }

                            return _context12.abrupt("return", pageResults(json.data, nextPage, etag, totalRecords));

                          case 6:
                            // Aggregate new results with previous ones
                            results = results.concat(json.data);
                            current += 1;

                            if (!(current >= pages || !nextPage)) {
                              _context12.next = 10;
                              break;
                            }

                            return _context12.abrupt("return", pageResults(results, nextPage, etag, totalRecords));

                          case 10:
                            return _context12.abrupt("return", processNextPage(nextPage));

                          case 11:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12, this);
                  }));

                  return function handleResponse(_x9) {
                    return _ref9.apply(this, arguments);
                  };
                }();

                _context13.t0 = handleResponse;
                _context13.next = 13;
                return this.execute( // N.B.: This doesn't use _getHeaders, because all calls to
                // `paginatedList` are assumed to come from calls that already
                // have headers merged at e.g. the bucket or collection level.
                {
                  headers: options.headers,
                  path: path + "?" + querystring
                }, // N.B. This doesn't use _getRetry, because all calls to
                // `paginatedList` are assumed to come from calls that already
                // used `_getRetry` at e.g. the bucket or collection level.
                {
                  raw: true,
                  retry: options.retry || 0
                });

              case 13:
                _context13.t1 = _context13.sent;
                return _context13.abrupt("return", (0, _context13.t0)(_context13.t1));

              case 15:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function paginatedList(_x5, _x6) {
        return _paginatedList.apply(this, arguments);
      };
    }()
    /**
     * Lists all permissions.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number} [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object[], Error>}
     */

  }, {
    key: "listPermissions",
    value: function () {
      var _listPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14() {
        var options,
            path,
            paginationOptions,
            _args14 = arguments;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
                path = (0, _endpoint.default)("permissions"); // Ensure the default sort parameter is something that exists in permissions
                // entries, as `last_modified` doesn't; here, we pick "id".

                paginationOptions = (0, _objectSpread2.default)({
                  sort: "id"
                }, options);
                return _context14.abrupt("return", this.paginatedList(path, paginationOptions, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function listPermissions() {
        return _listPermissions.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of buckets.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number} [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object[], Error>}
     */

  }, {
    key: "listBuckets",
    value: function () {
      var _listBuckets = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15() {
        var options,
            path,
            _args15 = arguments;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                options = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : {};
                path = (0, _endpoint.default)("bucket");
                return _context15.abrupt("return", this.paginatedList(path, options, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function listBuckets() {
        return _listBuckets.apply(this, arguments);
      };
    }()
    /**
     * Creates a new bucket on the server.
     *
     * @param  {String|null}  id                The bucket name (optional).
     * @param  {Object}       [options={}]      The options object.
     * @param  {Boolean}      [options.data]    The bucket data option.
     * @param  {Boolean}      [options.safe]    The safe option.
     * @param  {Object}       [options.headers] The headers object option.
     * @param  {Number}       [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createBucket",
    value: function () {
      var _createBucket = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16(id) {
        var options,
            _options$data,
            data,
            permissions,
            path,
            _args16 = arguments;

        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                options = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                _options$data = options.data, data = _options$data === void 0 ? {} : _options$data, permissions = options.permissions;

                if (id != null) {
                  data.id = id;
                }

                path = data.id ? (0, _endpoint.default)("bucket", data.id) : (0, _endpoint.default)("bucket");
                return _context16.abrupt("return", this.execute(requests.createRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                }), {
                  retry: this._getRetry(options)
                }));

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function createBucket(_x10) {
        return _createBucket.apply(this, arguments);
      };
    }()
    /**
     * Deletes a bucket from the server.
     *
     * @ignore
     * @param  {Object|String} bucket                  The bucket to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteBucket",
    value: function () {
      var _deleteBucket = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee17(bucket) {
        var options,
            bucketObj,
            path,
            _bucketObj$options,
            last_modified,
            _args17 = arguments;

        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                options = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : {};
                bucketObj = (0, _utils.toDataBody)(bucket);

                if (bucketObj.id) {
                  _context17.next = 4;
                  break;
                }

                throw new Error("A bucket id is required.");

              case 4:
                path = (0, _endpoint.default)("bucket", bucketObj.id);
                _bucketObj$options = (0, _objectSpread2.default)({}, bucketObj, options), last_modified = _bucketObj$options.last_modified;
                return _context17.abrupt("return", this.execute(requests.deleteRequest(path, {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                }), {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function deleteBucket(_x11) {
        return _deleteBucket.apply(this, arguments);
      };
    }()
    /**
     * Deletes all buckets on the server.
     *
     * @ignore
     * @param  {Object}  [options={}]            The options object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteBuckets",
    value: function () {
      var _deleteBuckets = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee18() {
        var options,
            path,
            _args18 = arguments;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                options = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
                path = (0, _endpoint.default)("bucket");
                return _context18.abrupt("return", this.execute(requests.deleteRequest(path, {
                  last_modified: options.last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                }), {
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function deleteBuckets() {
        return _deleteBuckets.apply(this, arguments);
      };
    }()
  }, {
    key: "remote",
    get: function get() {
      return this._remote;
    }
    /**
     * @ignore
     */
    ,
    set: function set(url) {
      var version;

      try {
        version = url.match(/\/(v\d+)\/?$/)[1];
      } catch (err) {
        throw new Error("The remote URL must contain the version: " + url);
      }

      if (version !== SUPPORTED_PROTOCOL_VERSION) {
        throw new Error("Unsupported protocol version: ".concat(version));
      }

      this._remote = url;
      this._version = version;
    }
    /**
     * The current server protocol version, eg. `v1`.
     * @type {String}
     */

  }, {
    key: "version",
    get: function get() {
      return this._version;
    }
    /**
     * Backoff remaining time, in milliseconds. Defaults to zero if no backoff is
     * ongoing.
     *
     * @type {Number}
     */

  }, {
    key: "backoff",
    get: function get() {
      var currentTime = new Date().getTime();

      if (this._backoffReleaseTime && currentTime < this._backoffReleaseTime) {
        return this._backoffReleaseTime - currentTime;
      }

      return 0;
    }
  }]);
  return KintoClientBase;
}(), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchServerSettings", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "fetchServerSettings"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchServerCapabilities", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "fetchServerCapabilities"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchUser", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "fetchUser"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchHTTPApiVersion", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "fetchHTTPApiVersion"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "batch", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "batch"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "listPermissions", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "listPermissions"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "deleteBuckets", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "deleteBuckets"), _class.prototype)), _class));
exports.default = KintoClientBase;
},{"./batch":307,"./bucket":308,"./endpoint":310,"./http":312,"./requests":314,"./utils":315,"@babel/runtime/helpers/applyDecoratedDescriptor":277,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/interopRequireWildcard":288,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/regenerator":304}],307:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregate = aggregate;

/**
 * Exports batch responses as a result object.
 *
 * @private
 * @param  {Array} responses The batch subrequest responses.
 * @param  {Array} requests  The initial issued requests.
 * @return {Object}
 */
function aggregate() {
  var responses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var requests = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (responses.length !== requests.length) {
    throw new Error("Responses length should match requests one.");
  }

  var results = {
    errors: [],
    published: [],
    conflicts: [],
    skipped: []
  };
  return responses.reduce(function (acc, response, index) {
    var status = response.status;
    var request = requests[index];

    if (status >= 200 && status < 400) {
      acc.published.push(response.body);
    } else if (status === 404) {
      // Extract the id manually from request path while waiting for Kinto/kinto#818
      var regex = /(buckets|groups|collections|records)\/([^/]+)$/;
      var extracts = request.path.match(regex);
      var id = extracts.length === 3 ? extracts[2] : undefined;
      acc.skipped.push({
        id: id,
        path: request.path,
        error: response.body
      });
    } else if (status === 412) {
      acc.conflicts.push({
        // XXX: specifying the type is probably superfluous
        type: "outgoing",
        local: request.body,
        remote: response.body.details && response.body.details.existing || null
      });
    } else {
      acc.errors.push({
        path: request.path,
        sent: request,
        error: response.body
      });
    }

    return acc;
  }, results);
}
},{}],308:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _utils = require("./utils");

var _collection = _interopRequireDefault(require("./collection"));

var requests = _interopRequireWildcard(require("./requests"));

var _endpoint = _interopRequireDefault(require("./endpoint"));

var _dec, _class;

/**
 * Abstract representation of a selected bucket.
 *
 */
var Bucket = (_dec = (0, _utils.capable)(["history"]), (_class =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * @param  {KintoClient} client            The client instance.
   * @param  {String}      name              The bucket name.
   * @param  {Object}      [options={}]      The headers object option.
   * @param  {Object}      [options.headers] The headers object option.
   * @param  {Boolean}     [options.safe]    The safe option.
   * @param  {Number}      [options.retry]   The retry option.
   */
  function Bucket(client, name) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2.default)(this, Bucket);

    /**
     * @ignore
     */
    this.client = client;
    /**
     * The bucket name.
     * @type {String}
     */

    this.name = name;
    /**
     * @ignore
     */

    this._isBatch = !!options.batch;
    /**
     * @ignore
     */

    this._headers = options.headers || {};
    this._retry = options.retry || 0;
    this._safe = !!options.safe;
  }
  /**
   * Get the value of "headers" for a given request, merging the
   * per-request headers with our own "default" headers.
   *
   * @private
   */


  (0, _createClass2.default)(Bucket, [{
    key: "_getHeaders",
    value: function _getHeaders(options) {
      return (0, _objectSpread2.default)({}, this._headers, options.headers);
    }
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */

  }, {
    key: "_getSafe",
    value: function _getSafe(options) {
      return (0, _objectSpread2.default)({
        safe: this._safe
      }, options).safe;
    }
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */

  }, {
    key: "_getRetry",
    value: function _getRetry(options) {
      return (0, _objectSpread2.default)({
        retry: this._retry
      }, options).retry;
    }
    /**
     * Selects a collection.
     *
     * @param  {String}  name              The collection name.
     * @param  {Object}  [options={}]      The options object.
     * @param  {Object}  [options.headers] The headers object option.
     * @param  {Boolean} [options.safe]    The safe option.
     * @return {Collection}
     */

  }, {
    key: "collection",
    value: function collection(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _collection.default(this.client, this, name, {
        batch: this._isBatch,
        headers: this._getHeaders(options),
        retry: this._getRetry(options),
        safe: this._getSafe(options)
      });
    }
    /**
     * Retrieves bucket data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getData",
    value: function () {
      var _getData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var options,
            request,
            _ref,
            data,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                request = {
                  headers: this._getHeaders(options),
                  path: (0, _endpoint.default)("bucket", this.name)
                };
                _context.next = 4;
                return this.client.execute(request, {
                  retry: this._getRetry(options)
                });

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getData() {
        return _getData.apply(this, arguments);
      };
    }()
    /**
     * Set bucket data.
     * @param  {Object}  data                    The bucket data object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers={}]    The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.patch]         The patch option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setData",
    value: function () {
      var _setData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(data) {
        var options,
            bucket,
            bucketId,
            path,
            patch,
            permissions,
            _data$options,
            last_modified,
            request,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};

                if ((0, _utils.isObject)(data)) {
                  _context2.next = 3;
                  break;
                }

                throw new Error("A bucket object is required.");

              case 3:
                bucket = (0, _objectSpread2.default)({}, data, {
                  id: this.name
                }); // For default bucket, we need to drop the id from the data object.
                // Bug in Kinto < 3.1.1

                bucketId = bucket.id;

                if (bucket.id === "default") {
                  delete bucket.id;
                }

                path = (0, _endpoint.default)("bucket", bucketId);
                patch = options.patch, permissions = options.permissions;
                _data$options = (0, _objectSpread2.default)({}, data, options), last_modified = _data$options.last_modified;
                request = requests.updateRequest(path, {
                  data: bucket,
                  permissions: permissions
                }, {
                  last_modified: last_modified,
                  patch: patch,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context2.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function setData(_x) {
        return _setData.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of history entries in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listHistory",
    value: function () {
      var _listHistory = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var options,
            path,
            _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                path = (0, _endpoint.default)("history", this.name);
                return _context3.abrupt("return", this.client.paginatedList(path, options, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function listHistory() {
        return _listHistory.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of collections in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listCollections",
    value: function () {
      var _listCollections = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var options,
            path,
            _args4 = arguments;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                path = (0, _endpoint.default)("collection", this.name);
                return _context4.abrupt("return", this.client.paginatedList(path, options, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function listCollections() {
        return _listCollections.apply(this, arguments);
      };
    }()
    /**
     * Creates a new collection in current bucket.
     *
     * @param  {String|undefined}  id          The collection id.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Number}  [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.permissions] The permissions object.
     * @param  {Object}  [options.data]        The data object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createCollection",
    value: function () {
      var _createCollection = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id) {
        var options,
            permissions,
            _options$data,
            data,
            path,
            request,
            _args5 = arguments;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                permissions = options.permissions, _options$data = options.data, data = _options$data === void 0 ? {} : _options$data;
                data.id = id;
                path = (0, _endpoint.default)("collection", this.name, id);
                request = requests.createRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context5.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function createCollection(_x2) {
        return _createCollection.apply(this, arguments);
      };
    }()
    /**
     * Deletes a collection from the current bucket.
     *
     * @param  {Object|String} collection              The collection to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteCollection",
    value: function () {
      var _deleteCollection = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(collection) {
        var options,
            collectionObj,
            id,
            _collectionObj$option,
            last_modified,
            path,
            request,
            _args6 = arguments;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                collectionObj = (0, _utils.toDataBody)(collection);

                if (collectionObj.id) {
                  _context6.next = 4;
                  break;
                }

                throw new Error("A collection id is required.");

              case 4:
                id = collectionObj.id;
                _collectionObj$option = (0, _objectSpread2.default)({}, collectionObj, options), last_modified = _collectionObj$option.last_modified;
                path = (0, _endpoint.default)("collection", this.name, id);
                request = requests.deleteRequest(path, {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context6.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function deleteCollection(_x3) {
        return _deleteCollection.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of groups in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listGroups",
    value: function () {
      var _listGroups = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7() {
        var options,
            path,
            _args7 = arguments;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                path = (0, _endpoint.default)("group", this.name);
                return _context7.abrupt("return", this.client.paginatedList(path, options, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function listGroups() {
        return _listGroups.apply(this, arguments);
      };
    }()
    /**
     * Creates a new group in current bucket.
     *
     * @param  {String} id                The group id.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getGroup",
    value: function () {
      var _getGroup = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id) {
        var options,
            request,
            _args8 = arguments;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                request = {
                  headers: this._getHeaders(options),
                  path: (0, _endpoint.default)("group", this.name, id)
                };
                return _context8.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getGroup(_x4) {
        return _getGroup.apply(this, arguments);
      };
    }()
    /**
     * Creates a new group in current bucket.
     *
     * @param  {String|undefined}  id                    The group id.
     * @param  {Array<String>}     [members=[]]          The list of principals.
     * @param  {Object}            [options={}]          The options object.
     * @param  {Object}            [options.data]        The data object.
     * @param  {Object}            [options.permissions] The permissions object.
     * @param  {Boolean}           [options.safe]        The safe option.
     * @param  {Object}            [options.headers]     The headers object option.
     * @param  {Number}            [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createGroup",
    value: function () {
      var _createGroup = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(id) {
        var members,
            options,
            data,
            path,
            permissions,
            request,
            _args9 = arguments;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                members = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : [];
                options = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                data = (0, _objectSpread2.default)({}, options.data, {
                  id: id,
                  members: members
                });
                path = (0, _endpoint.default)("group", this.name, id);
                permissions = options.permissions;
                request = requests.createRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context9.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function createGroup(_x5) {
        return _createGroup.apply(this, arguments);
      };
    }()
    /**
     * Updates an existing group in current bucket.
     *
     * @param  {Object}  group                   The group object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.data]          The data object.
     * @param  {Object}  [options.permissions]   The permissions object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "updateGroup",
    value: function () {
      var _updateGroup = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(group) {
        var options,
            data,
            path,
            patch,
            permissions,
            _data$options2,
            last_modified,
            request,
            _args10 = arguments;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                options = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};

                if ((0, _utils.isObject)(group)) {
                  _context10.next = 3;
                  break;
                }

                throw new Error("A group object is required.");

              case 3:
                if (group.id) {
                  _context10.next = 5;
                  break;
                }

                throw new Error("A group id is required.");

              case 5:
                data = (0, _objectSpread2.default)({}, options.data, group);
                path = (0, _endpoint.default)("group", this.name, group.id);
                patch = options.patch, permissions = options.permissions;
                _data$options2 = (0, _objectSpread2.default)({}, data, options), last_modified = _data$options2.last_modified;
                request = requests.updateRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  last_modified: last_modified,
                  patch: patch,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context10.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function updateGroup(_x6) {
        return _updateGroup.apply(this, arguments);
      };
    }()
    /**
     * Deletes a group from the current bucket.
     *
     * @param  {Object|String} group                   The group to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteGroup",
    value: function () {
      var _deleteGroup = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(group) {
        var options,
            groupObj,
            id,
            _groupObj$options,
            last_modified,
            path,
            request,
            _args11 = arguments;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                groupObj = (0, _utils.toDataBody)(group);
                id = groupObj.id;
                _groupObj$options = (0, _objectSpread2.default)({}, groupObj, options), last_modified = _groupObj$options.last_modified;
                path = (0, _endpoint.default)("group", this.name, id);
                request = requests.deleteRequest(path, {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context11.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function deleteGroup(_x7) {
        return _deleteGroup.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of permissions for this bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getPermissions",
    value: function () {
      var _getPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12() {
        var options,
            request,
            _ref2,
            permissions,
            _args12 = arguments;

        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
                request = {
                  headers: this._getHeaders(options),
                  path: (0, _endpoint.default)("bucket", this.name)
                };
                _context12.next = 4;
                return this.client.execute(request, {
                  retry: this._getRetry(options)
                });

              case 4:
                _ref2 = _context12.sent;
                permissions = _ref2.permissions;
                return _context12.abrupt("return", permissions);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function getPermissions() {
        return _getPermissions.apply(this, arguments);
      };
    }()
    /**
     * Replaces all existing bucket permissions with the ones provided.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers={}]    The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setPermissions",
    value: function () {
      var _setPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(permissions) {
        var options,
            path,
            last_modified,
            data,
            request,
            _args13 = arguments;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context13.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("bucket", this.name);
                last_modified = options.last_modified;
                data = {
                  last_modified: last_modified
                };
                request = requests.updateRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context13.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function setPermissions(_x8) {
        return _setPermissions.apply(this, arguments);
      };
    }()
    /**
     * Append principals to the bucket permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "addPermissions",
    value: function () {
      var _addPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(permissions) {
        var options,
            path,
            last_modified,
            request,
            _args14 = arguments;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context14.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("bucket", this.name);
                last_modified = options.last_modified;
                request = requests.jsonPatchPermissionsRequest(path, permissions, "add", {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context14.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function addPermissions(_x9) {
        return _addPermissions.apply(this, arguments);
      };
    }()
    /**
     * Remove principals from the bucket permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "removePermissions",
    value: function () {
      var _removePermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(permissions) {
        var options,
            path,
            last_modified,
            request,
            _args15 = arguments;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                options = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context15.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("bucket", this.name);
                last_modified = options.last_modified;
                request = requests.jsonPatchPermissionsRequest(path, permissions, "remove", {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context15.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function removePermissions(_x10) {
        return _removePermissions.apply(this, arguments);
      };
    }()
    /**
     * Performs batch operations at the current bucket level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Number}   [options.retry=0]    The retry option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function () {
      var _batch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16(fn) {
        var options,
            _args16 = arguments;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                options = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                return _context16.abrupt("return", this.client.batch(fn, {
                  bucket: this.name,
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options),
                  safe: this._getSafe(options),
                  aggregate: !!options.aggregate
                }));

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function batch(_x11) {
        return _batch.apply(this, arguments);
      };
    }()
  }]);
  return Bucket;
}(), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "listHistory", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "listHistory"), _class.prototype)), _class));
exports.default = Bucket;
},{"./collection":309,"./endpoint":310,"./requests":314,"./utils":315,"@babel/runtime/helpers/applyDecoratedDescriptor":277,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/interopRequireWildcard":288,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/regenerator":304}],309:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _uuid = require("uuid");

var _utils = require("./utils");

var requests = _interopRequireWildcard(require("./requests"));

var _endpoint = _interopRequireDefault(require("./endpoint"));

var _dec, _dec2, _dec3, _class;

/**
 * Abstract representation of a selected collection.
 *
 */
var Collection = (_dec = (0, _utils.capable)(["attachments"]), _dec2 = (0, _utils.capable)(["attachments"]), _dec3 = (0, _utils.capable)(["history"]), (_class =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * @param  {KintoClient}  client            The client instance.
   * @param  {Bucket}       bucket            The bucket instance.
   * @param  {String}       name              The collection name.
   * @param  {Object}       [options={}]      The options object.
   * @param  {Object}       [options.headers] The headers object option.
   * @param  {Boolean}      [options.safe]    The safe option.
   * @param  {Number}       [options.retry]   The retry option.
   * @param  {Boolean}      [options.batch]   (Private) Whether this
   *     Collection is operating as part of a batch.
   */
  function Collection(client, bucket, name) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2.default)(this, Collection);

    /**
     * @ignore
     */
    this.client = client;
    /**
     * @ignore
     */

    this.bucket = bucket;
    /**
     * The collection name.
     * @type {String}
     */

    this.name = name;
    /**
     * @ignore
     */

    this._isBatch = !!options.batch;
    /**
     * @ignore
     */

    this._retry = options.retry || 0;
    this._safe = !!options.safe; // FIXME: This is kind of ugly; shouldn't the bucket be responsible
    // for doing the merge?

    this._headers = (0, _objectSpread2.default)({}, this.bucket._headers, options.headers);
  }
  /**
   * Get the value of "headers" for a given request, merging the
   * per-request headers with our own "default" headers.
   *
   * @private
   */


  (0, _createClass2.default)(Collection, [{
    key: "_getHeaders",
    value: function _getHeaders(options) {
      return (0, _objectSpread2.default)({}, this._headers, options.headers);
    }
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */

  }, {
    key: "_getSafe",
    value: function _getSafe(options) {
      return (0, _objectSpread2.default)({
        safe: this._safe
      }, options).safe;
    }
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */

  }, {
    key: "_getRetry",
    value: function _getRetry(options) {
      return (0, _objectSpread2.default)({
        retry: this._retry
      }, options).retry;
    }
    /**
     * Retrieves the total number of records in this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Number, Error>}
     */

  }, {
    key: "getTotalRecords",
    value: function () {
      var _getTotalRecords = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var options,
            path,
            request,
            _ref,
            headers,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                path = (0, _endpoint.default)("record", this.bucket.name, this.name);
                request = {
                  headers: this._getHeaders(options),
                  path: path,
                  method: "HEAD"
                };
                _context.next = 5;
                return this.client.execute(request, {
                  raw: true,
                  retry: this._getRetry(options)
                });

              case 5:
                _ref = _context.sent;
                headers = _ref.headers;
                return _context.abrupt("return", parseInt(headers.get("Total-Records"), 10));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTotalRecords() {
        return _getTotalRecords.apply(this, arguments);
      };
    }()
    /**
     * Retrieves collection data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Object} [options.query]   Query parameters to pass in
     *     the request. This might be useful for features that aren't
     *     yet supported by this library.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getData",
    value: function () {
      var _getData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var options,
            path,
            querystring,
            request,
            _ref2,
            data,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);

                if (options.query) {
                  querystring = (0, _utils.qsify)(options.query);
                  path = path + "?" + querystring;
                }

                request = {
                  headers: this._getHeaders(options),
                  path: path
                };
                _context2.next = 6;
                return this.client.execute(request, {
                  retry: this._getRetry(options)
                });

              case 6:
                _ref2 = _context2.sent;
                data = _ref2.data;
                return _context2.abrupt("return", data);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getData() {
        return _getData.apply(this, arguments);
      };
    }()
    /**
     * Set collection data.
     * @param  {Object}   data                    The collection data object.
     * @param  {Object}   [options={}]            The options object.
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Number}   [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Boolean}  [options.patch]         The patch option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setData",
    value: function () {
      var _setData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(data) {
        var options,
            patch,
            permissions,
            _data$options,
            last_modified,
            path,
            request,
            _args3 = arguments;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};

                if ((0, _utils.isObject)(data)) {
                  _context3.next = 3;
                  break;
                }

                throw new Error("A collection object is required.");

              case 3:
                patch = options.patch, permissions = options.permissions;
                _data$options = (0, _objectSpread2.default)({}, data, options), last_modified = _data$options.last_modified;
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);
                request = requests.updateRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  last_modified: last_modified,
                  patch: patch,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context3.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function setData(_x) {
        return _setData.apply(this, arguments);
      };
    }()
    /**
     * Retrieves the list of permissions for this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getPermissions",
    value: function () {
      var _getPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var options,
            path,
            request,
            _ref3,
            permissions,
            _args4 = arguments;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);
                request = {
                  headers: this._getHeaders(options),
                  path: path
                };
                _context4.next = 5;
                return this.client.execute(request, {
                  retry: this._getRetry(options)
                });

              case 5:
                _ref3 = _context4.sent;
                permissions = _ref3.permissions;
                return _context4.abrupt("return", permissions);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getPermissions() {
        return _getPermissions.apply(this, arguments);
      };
    }()
    /**
     * Replaces all existing collection permissions with the ones provided.
     *
     * @param  {Object}   permissions             The permissions object.
     * @param  {Object}   [options={}]            The options object
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Number}   [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setPermissions",
    value: function () {
      var _setPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(permissions) {
        var options,
            path,
            data,
            request,
            _args5 = arguments;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context5.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);
                data = {
                  last_modified: options.last_modified
                };
                request = requests.updateRequest(path, {
                  data: data,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context5.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function setPermissions(_x2) {
        return _setPermissions.apply(this, arguments);
      };
    }()
    /**
     * Append principals to the collection permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "addPermissions",
    value: function () {
      var _addPermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(permissions) {
        var options,
            path,
            last_modified,
            request,
            _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context6.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);
                last_modified = options.last_modified;
                request = requests.jsonPatchPermissionsRequest(path, permissions, "add", {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context6.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function addPermissions(_x3) {
        return _addPermissions.apply(this, arguments);
      };
    }()
    /**
     * Remove principals from the collection permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "removePermissions",
    value: function () {
      var _removePermissions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(permissions) {
        var options,
            path,
            last_modified,
            request,
            _args7 = arguments;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};

                if ((0, _utils.isObject)(permissions)) {
                  _context7.next = 3;
                  break;
                }

                throw new Error("A permissions object is required.");

              case 3:
                path = (0, _endpoint.default)("collection", this.bucket.name, this.name);
                last_modified = options.last_modified;
                request = requests.jsonPatchPermissionsRequest(path, permissions, "remove", {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context7.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function removePermissions(_x4) {
        return _removePermissions.apply(this, arguments);
      };
    }()
    /**
     * Creates a record in current collection.
     *
     * @param  {Object}  record                The record to create.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Number}  [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.permissions] The permissions option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createRecord",
    value: function () {
      var _createRecord = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(record) {
        var options,
            permissions,
            path,
            request,
            _args8 = arguments;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                permissions = options.permissions;
                path = (0, _endpoint.default)("record", this.bucket.name, this.name, record.id);
                request = requests.createRequest(path, {
                  data: record,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context8.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function createRecord(_x5) {
        return _createRecord.apply(this, arguments);
      };
    }()
    /**
     * Adds an attachment to a record, creating the record when it doesn't exist.
     *
     * @param  {String}  dataURL                 The data url.
     * @param  {Object}  [record={}]             The record data.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @param  {String}  [options.filename]      Force the attachment filename.
     * @param  {String}  [options.gzipped]       Force the attachment to be gzipped or not.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "addAttachment",
    value: function () {
      var _addAttachment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dataURI) {
        var record,
            options,
            permissions,
            id,
            path,
            _record$options,
            last_modified,
            addAttachmentRequest,
            _args9 = arguments;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                record = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                options = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                permissions = options.permissions;
                id = record.id || _uuid.v4.v4();
                path = (0, _endpoint.default)("attachment", this.bucket.name, this.name, id);
                _record$options = (0, _objectSpread2.default)({}, record, options), last_modified = _record$options.last_modified;
                addAttachmentRequest = requests.addAttachmentRequest(path, dataURI, {
                  data: record,
                  permissions: permissions
                }, {
                  last_modified: last_modified,
                  filename: options.filename,
                  gzipped: options.gzipped,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                _context9.next = 9;
                return this.client.execute(addAttachmentRequest, {
                  stringify: false,
                  retry: this._getRetry(options)
                });

              case 9:
                return _context9.abrupt("return", this.getRecord(id));

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function addAttachment(_x6) {
        return _addAttachment.apply(this, arguments);
      };
    }()
    /**
     * Removes an attachment from a given record.
     *
     * @param  {Object}  recordId                The record id.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     */

  }, {
    key: "removeAttachment",
    value: function () {
      var _removeAttachment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(recordId) {
        var options,
            last_modified,
            path,
            request,
            _args10 = arguments;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                options = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                last_modified = options.last_modified;
                path = (0, _endpoint.default)("attachment", this.bucket.name, this.name, recordId);
                request = requests.deleteRequest(path, {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context10.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function removeAttachment(_x7) {
        return _removeAttachment.apply(this, arguments);
      };
    }()
    /**
     * Updates a record in current collection.
     *
     * @param  {Object}  record                  The record to update.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "updateRecord",
    value: function () {
      var _updateRecord = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(record) {
        var options,
            permissions,
            _record$options2,
            last_modified,
            path,
            request,
            _args11 = arguments;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};

                if ((0, _utils.isObject)(record)) {
                  _context11.next = 3;
                  break;
                }

                throw new Error("A record object is required.");

              case 3:
                if (record.id) {
                  _context11.next = 5;
                  break;
                }

                throw new Error("A record id is required.");

              case 5:
                permissions = options.permissions;
                _record$options2 = (0, _objectSpread2.default)({}, record, options), last_modified = _record$options2.last_modified;
                path = (0, _endpoint.default)("record", this.bucket.name, this.name, record.id);
                request = requests.updateRequest(path, {
                  data: record,
                  permissions: permissions
                }, {
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options),
                  last_modified: last_modified,
                  patch: !!options.patch
                });
                return _context11.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function updateRecord(_x8) {
        return _updateRecord.apply(this, arguments);
      };
    }()
    /**
     * Deletes a record from the current collection.
     *
     * @param  {Object|String} record                  The record to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteRecord",
    value: function () {
      var _deleteRecord = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(record) {
        var options,
            recordObj,
            id,
            _recordObj$options,
            last_modified,
            path,
            request,
            _args12 = arguments;

        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                recordObj = (0, _utils.toDataBody)(record);

                if (recordObj.id) {
                  _context12.next = 4;
                  break;
                }

                throw new Error("A record id is required.");

              case 4:
                id = recordObj.id;
                _recordObj$options = (0, _objectSpread2.default)({}, recordObj, options), last_modified = _recordObj$options.last_modified;
                path = (0, _endpoint.default)("record", this.bucket.name, this.name, id);
                request = requests.deleteRequest(path, {
                  last_modified: last_modified,
                  headers: this._getHeaders(options),
                  safe: this._getSafe(options)
                });
                return _context12.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function deleteRecord(_x9) {
        return _deleteRecord.apply(this, arguments);
      };
    }()
    /**
     * Retrieves a record from the current collection.
     *
     * @param  {String} id                The record id to retrieve.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getRecord",
    value: function () {
      var _getRecord = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(id) {
        var options,
            path,
            request,
            _args13 = arguments;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                path = (0, _endpoint.default)("record", this.bucket.name, this.name, id);
                request = {
                  headers: this._getHeaders(options),
                  path: path
                };
                return _context13.abrupt("return", this.client.execute(request, {
                  retry: this._getRetry(options)
                }));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function getRecord(_x10) {
        return _getRecord.apply(this, arguments);
      };
    }()
    /**
     * Lists records from the current collection.
     *
     * Sorting is done by passing a `sort` string option:
     *
     * - The field to order the results by, prefixed with `-` for descending.
     * Default: `-last_modified`.
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/sorting.html
     *
     * Filtering is done by passing a `filters` option object:
     *
     * - `{fieldname: "value"}`
     * - `{min_fieldname: 4000}`
     * - `{in_fieldname: "1,2,3"}`
     * - `{not_fieldname: 0}`
     * - `{exclude_fieldname: "0,1"}`
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/filtering.html
     *
     * Paginating is done by passing a `limit` option, then calling the `next()`
     * method from the resolved result object to fetch the next page, if any.
     *
     * @param  {Object}   [options={}]                    The options object.
     * @param  {Object}   [options.headers]               The headers object option.
     * @param  {Number}   [options.retry=0]               Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}   [options.filters=[]]            The filters object.
     * @param  {String}   [options.sort="-last_modified"] The sort field.
     * @param  {String}   [options.at]                    The timestamp to get a snapshot at.
     * @param  {String}   [options.limit=null]            The limit field.
     * @param  {String}   [options.pages=1]               The number of result pages to aggregate.
     * @param  {Number}   [options.since=null]            Only retrieve records modified since the provided timestamp.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "listRecords",
    value: function () {
      var _listRecords = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14() {
        var options,
            path,
            _args14 = arguments;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
                path = (0, _endpoint.default)("record", this.bucket.name, this.name);

                if (!options.hasOwnProperty("at")) {
                  _context14.next = 6;
                  break;
                }

                return _context14.abrupt("return", this.getSnapshot(options.at));

              case 6:
                return _context14.abrupt("return", this.client.paginatedList(path, options, {
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options)
                }));

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function listRecords() {
        return _listRecords.apply(this, arguments);
      };
    }()
    /**
     * @private
     */

  }, {
    key: "isHistoryComplete",
    value: function () {
      var _isHistoryComplete = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15() {
        var _ref4, _ref4$data, oldestHistoryEntry;

        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.bucket.listHistory({
                  limit: 1,
                  filters: {
                    action: "create",
                    resource_name: "collection",
                    collection_id: this.name
                  }
                });

              case 2:
                _ref4 = _context15.sent;
                _ref4$data = (0, _slicedToArray2.default)(_ref4.data, 1);
                oldestHistoryEntry = _ref4$data[0];
                return _context15.abrupt("return", !!oldestHistoryEntry);

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function isHistoryComplete() {
        return _isHistoryComplete.apply(this, arguments);
      };
    }()
    /**
     * @private
     */

  }, {
    key: "listChangesBackTo",
    value: function () {
      var _listChangesBackTo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16(at) {
        var _ref5, changes;

        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.isHistoryComplete();

              case 2:
                if (_context16.sent) {
                  _context16.next = 4;
                  break;
                }

                throw new Error("Computing a snapshot is only possible when the full history for a " + "collection is available. Here, the history plugin seems to have " + "been enabled after the creation of the collection.");

              case 4:
                _context16.next = 6;
                return this.bucket.listHistory({
                  pages: Infinity,
                  // all pages up to target timestamp are required
                  sort: "-target.data.last_modified",
                  filters: {
                    resource_name: "record",
                    collection_id: this.name,
                    "max_target.data.last_modified": String(at) // eq. to <=

                  }
                });

              case 6:
                _ref5 = _context16.sent;
                changes = _ref5.data;
                return _context16.abrupt("return", changes);

              case 9:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function listChangesBackTo(_x11) {
        return _listChangesBackTo.apply(this, arguments);
      };
    }()
    /**
     * @private
     */

  }, {
    key: "getSnapshot",
    value: function () {
      var _getSnapshot = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee17(at) {
        var changes, seenIds, snapshot, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!(!Number.isInteger(at) || at <= 0)) {
                  _context17.next = 2;
                  break;
                }

                throw new Error("Invalid argument, expected a positive integer.");

              case 2:
                _context17.next = 4;
                return this.listChangesBackTo(at);

              case 4:
                changes = _context17.sent;
                // Replay changes to compute the requested snapshot.
                seenIds = new Set();
                snapshot = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context17.prev = 10;

                _loop = function _loop() {
                  var _ref6 = _step.value;
                  var action = _ref6.action,
                      record = _ref6.target.data;

                  if (action == "delete") {
                    seenIds.add(record.id); // ensure not reprocessing deleted entries

                    snapshot = snapshot.filter(function (r) {
                      return r.id !== record.id;
                    });
                  } else if (!seenIds.has(record.id)) {
                    seenIds.add(record.id);
                    snapshot.push(record);
                  }
                };

                for (_iterator = changes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
                }

                _context17.next = 19;
                break;

              case 15:
                _context17.prev = 15;
                _context17.t0 = _context17["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context17.t0;

              case 19:
                _context17.prev = 19;
                _context17.prev = 20;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 22:
                _context17.prev = 22;

                if (!_didIteratorError) {
                  _context17.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context17.finish(22);

              case 26:
                return _context17.finish(19);

              case 27:
                return _context17.abrupt("return", {
                  last_modified: String(at),
                  data: snapshot.sort(function (a, b) {
                    return b.last_modified - a.last_modified;
                  }),
                  next: function next() {
                    throw new Error("Snapshots don't support pagination");
                  },
                  hasNextPage: false,
                  totalRecords: snapshot.length
                });

              case 28:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[10, 15, 19, 27], [20,, 22, 26]]);
      }));

      return function getSnapshot(_x12) {
        return _getSnapshot.apply(this, arguments);
      };
    }()
    /**
     * Performs batch operations at the current collection level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Number}   [options.retry]      The retry option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function () {
      var _batch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee18(fn) {
        var options,
            _args18 = arguments;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                options = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : {};
                return _context18.abrupt("return", this.client.batch(fn, {
                  bucket: this.bucket.name,
                  collection: this.name,
                  headers: this._getHeaders(options),
                  retry: this._getRetry(options),
                  safe: this._getSafe(options),
                  aggregate: !!options.aggregate
                }));

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function batch(_x13) {
        return _batch.apply(this, arguments);
      };
    }()
  }]);
  return Collection;
}(), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "addAttachment", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addAttachment"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "removeAttachment", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "removeAttachment"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "getSnapshot", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "getSnapshot"), _class.prototype)), _class));
exports.default = Collection;
},{"./endpoint":310,"./requests":314,"./utils":315,"@babel/runtime/helpers/applyDecoratedDescriptor":277,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/interopRequireWildcard":288,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/slicedToArray":298,"@babel/runtime/regenerator":304,"uuid":316}],310:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endpoint;

/**
 * Endpoints templates.
 * @type {Object}
 */
var ENDPOINTS = {
  root: function root() {
    return "/";
  },
  batch: function batch() {
    return "/batch";
  },
  permissions: function permissions() {
    return "/permissions";
  },
  bucket: function bucket(_bucket) {
    return "/buckets" + (_bucket ? "/".concat(_bucket) : "");
  },
  history: function history(bucket) {
    return "".concat(ENDPOINTS.bucket(bucket), "/history");
  },
  collection: function collection(bucket, coll) {
    return "".concat(ENDPOINTS.bucket(bucket), "/collections") + (coll ? "/".concat(coll) : "");
  },
  group: function group(bucket, _group) {
    return "".concat(ENDPOINTS.bucket(bucket), "/groups") + (_group ? "/".concat(_group) : "");
  },
  record: function record(bucket, coll, id) {
    return "".concat(ENDPOINTS.collection(bucket, coll), "/records") + (id ? "/".concat(id) : "");
  },
  attachment: function attachment(bucket, coll, id) {
    return "".concat(ENDPOINTS.record(bucket, coll, id), "/attachment");
  }
};
/**
 * Retrieves a server enpoint by its name.
 *
 * @private
 * @param  {String}    name The endpoint name.
 * @param  {...string} args The endpoint parameters.
 * @return {String}
 */

function endpoint(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return ENDPOINTS[name].apply(ENDPOINTS, args);
}
},{}],311:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnparseableResponseError = exports.ServerResponse = exports.NetworkTimeoutError = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

function _extendableBuiltin5(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

function _extendableBuiltin3(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

/**
 * Kinto server error code descriptors.
 * @type {Object}
 */
var ERROR_CODES = {
  104: "Missing Authorization Token",
  105: "Invalid Authorization Token",
  106: "Request body was not valid JSON",
  107: "Invalid request parameter",
  108: "Missing request parameter",
  109: "Invalid posted data",
  110: "Invalid Token / id",
  111: "Missing Token / id",
  112: "Content-Length header was not provided",
  113: "Request body too large",
  114: "Resource was created, updated or deleted meanwhile",
  115: "Method not allowed on this end point (hint: server may be readonly)",
  116: "Requested version not available on this server",
  117: "Client has sent too many requests",
  121: "Resource access is forbidden for this user",
  122: "Another resource violates constraint",
  201: "Service Temporary unavailable due to high load",
  202: "Service deprecated",
  999: "Internal Server Error"
};
var _default = ERROR_CODES;
exports.default = _default;

var NetworkTimeoutError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  (0, _inherits2.default)(NetworkTimeoutError, _extendableBuiltin2);

  function NetworkTimeoutError(url, options) {
    var _this;

    (0, _classCallCheck2.default)(this, NetworkTimeoutError);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NetworkTimeoutError).call(this, "Timeout while trying to access ".concat(url, " with ").concat(JSON.stringify(options))));

    if (Error.captureStackTrace) {
      Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), NetworkTimeoutError);
    }

    _this.url = url;
    _this.options = options;
    return _this;
  }

  return NetworkTimeoutError;
}(_extendableBuiltin(Error));

exports.NetworkTimeoutError = NetworkTimeoutError;

var UnparseableResponseError =
/*#__PURE__*/
function (_extendableBuiltin4) {
  (0, _inherits2.default)(UnparseableResponseError, _extendableBuiltin4);

  function UnparseableResponseError(response, body, error) {
    var _this2;

    (0, _classCallCheck2.default)(this, UnparseableResponseError);
    var status = response.status;
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UnparseableResponseError).call(this, "Response from server unparseable (HTTP ".concat(status || 0, "; ").concat(error, "): ").concat(body)));

    if (Error.captureStackTrace) {
      Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)), UnparseableResponseError);
    }

    _this2.status = status;
    _this2.response = response;
    _this2.stack = error.stack;
    _this2.error = error;
    return _this2;
  }

  return UnparseableResponseError;
}(_extendableBuiltin3(Error));
/**
 * "Error" subclass representing a >=400 response from the server.
 *
 * Whether or not this is an error depends on your application.
 *
 * The `json` field can be undefined if the server responded with an
 * empty response body. This shouldn't generally happen. Most "bad"
 * responses come with a JSON error description, or (if they're
 * fronted by a CDN or nginx or something) occasionally non-JSON
 * responses (which become UnparseableResponseErrors, above).
 */


exports.UnparseableResponseError = UnparseableResponseError;

var ServerResponse =
/*#__PURE__*/
function (_extendableBuiltin6) {
  (0, _inherits2.default)(ServerResponse, _extendableBuiltin6);

  function ServerResponse(response, json) {
    var _this3;

    (0, _classCallCheck2.default)(this, ServerResponse);
    var status = response.status;
    var statusText = response.statusText;
    var errnoMsg;

    if (json) {
      // Try to fill in information from the JSON error.
      statusText = json.error || statusText; // Take errnoMsg from either ERROR_CODES or json.message.

      if (json.errno && json.errno in ERROR_CODES) {
        errnoMsg = ERROR_CODES[json.errno];
      } else if (json.message) {
        errnoMsg = json.message;
      } // If we had both ERROR_CODES and json.message, and they differ,
      // combine them.


      if (errnoMsg && json.message && json.message !== errnoMsg) {
        errnoMsg += " (".concat(json.message, ")");
      }
    }

    var message = "HTTP ".concat(status, " ").concat(statusText);

    if (errnoMsg) {
      message += ": ".concat(errnoMsg);
    }

    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ServerResponse).call(this, message.trim()));

    if (Error.captureStackTrace) {
      Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this3)), ServerResponse);
    }

    _this3.response = response;
    _this3.data = json;
    return _this3;
  }

  return ServerResponse;
}(_extendableBuiltin5(Error));

exports.ServerResponse = ServerResponse;
},{"@babel/runtime/helpers/assertThisInitialized":280,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/getPrototypeOf":285,"@babel/runtime/helpers/inherits":286,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/possibleConstructorReturn":296}],312:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("./utils");

var _errors = require("./errors");

/**
 * Enhanced HTTP client for the Kinto protocol.
 * @private
 */
var HTTP =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(HTTP, null, [{
    key: "DEFAULT_REQUEST_HEADERS",

    /**
     * Default HTTP request headers applied to each outgoing request.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    /**
     * Default options.
     *
     * @type {Object}
     */

  }, {
    key: "defaultOptions",
    get: function get() {
      return {
        timeout: null,
        requestMode: "cors"
      };
    }
    /**
     * Constructor.
     *
     * @param {EventEmitter} events                       The event handler.
     * @param {Object}       [options={}}                 The options object.
     * @param {Number}       [options.timeout=null]       The request timeout in ms, if any (default: `null`).
     * @param {String}       [options.requestMode="cors"] The HTTP request mode (default: `"cors"`).
     */

  }]);

  function HTTP(events) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, HTTP);

    // public properties

    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */
    if (!events) {
      throw new Error("No events handler provided");
    }

    this.events = events;
    /**
     * The request mode.
     * @see  https://fetch.spec.whatwg.org/#requestmode
     * @type {String}
     */

    this.requestMode = options.requestMode || HTTP.defaultOptions.requestMode;
    /**
     * The request timeout.
     * @type {Number}
     */

    this.timeout = options.timeout || HTTP.defaultOptions.timeout;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(HTTP, [{
    key: "timedFetch",
    value: function timedFetch(url, options) {
      var _this = this;

      var hasTimedout = false;
      return new Promise(function (resolve, reject) {
        // Detect if a request has timed out.
        var _timeoutId;

        if (_this.timeout) {
          _timeoutId = setTimeout(function () {
            hasTimedout = true;
            reject(new _errors.NetworkTimeoutError(url, options));
          }, _this.timeout);
        }

        function proceedWithHandler(fn) {
          return function (arg) {
            if (!hasTimedout) {
              if (_timeoutId) {
                clearTimeout(_timeoutId);
              }

              fn(arg);
            }
          };
        }

        fetch(url, options).then(proceedWithHandler(resolve)).catch(proceedWithHandler(reject));
      });
    }
    /**
     * @private
     */

  }, {
    key: "processResponse",
    value: function () {
      var _processResponse = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(response) {
        var status, headers, text, json;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = response.status, headers = response.headers;
                _context.next = 3;
                return response.text();

              case 3:
                text = _context.sent;

                if (!(text.length !== 0)) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 5;
                json = JSON.parse(text);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](5);
                throw new _errors.UnparseableResponseError(response, text, _context.t0);

              case 12:
                if (!(status >= 400)) {
                  _context.next = 14;
                  break;
                }

                throw new _errors.ServerResponse(response, json);

              case 14:
                return _context.abrupt("return", {
                  status: status,
                  json: json,
                  headers: headers
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 9]]);
      }));

      return function processResponse(_x) {
        return _processResponse.apply(this, arguments);
      };
    }()
    /**
     * @private
     */

  }, {
    key: "retry",
    value: function () {
      var _retry = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(url, retryAfter, request, options) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _utils.delay)(retryAfter);

              case 2:
                return _context2.abrupt("return", this.request(url, request, (0, _objectSpread2.default)({}, options, {
                  retry: options.retry - 1
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function retry(_x2, _x3, _x4, _x5) {
        return _retry.apply(this, arguments);
      };
    }()
    /**
     * Performs an HTTP request to the Kinto server.
     *
     * Resolves with an objet containing the following HTTP response properties:
     * - `{Number}  status`  The HTTP status code.
     * - `{Object}  json`    The JSON response body.
     * - `{Headers} headers` The response headers object; see the ES6 fetch() spec.
     *
     * @param  {String} url               The URL.
     * @param  {Object} [request={}]      The request object, passed to
     *     fetch() as its options object.
     * @param  {Object} [request.headers] The request headers object (default: {})
     * @param  {Object} [options={}]      Options for making the
     *     request
     * @param  {Number} [options.retry]   Number of retries (default: 0)
     * @return {Promise}
     */

  }, {
    key: "request",
    value: function () {
      var _request2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(url) {
        var _request,
            options,
            response,
            status,
            headers,
            retryAfter,
            _args3 = arguments;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _request = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {
                  headers: {}
                };
                options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {
                  retry: 0
                };
                // Ensure default request headers are always set
                _request.headers = (0, _objectSpread2.default)({}, HTTP.DEFAULT_REQUEST_HEADERS, _request.headers); // If a multipart body is provided, remove any custom Content-Type header as
                // the fetch() implementation will add the correct one for us.

                if (_request.body && typeof _request.body.append === "function") {
                  delete _request.headers["Content-Type"];
                }

                _request.mode = this.requestMode;
                _context3.next = 7;
                return this.timedFetch(url, _request);

              case 7:
                response = _context3.sent;
                status = response.status, headers = response.headers;

                this._checkForDeprecationHeader(headers);

                this._checkForBackoffHeader(status, headers); // Check if the server summons the client to retry after a while.


                retryAfter = this._checkForRetryAfterHeader(status, headers); // If number of allowed of retries is not exhausted, retry the same request.

                if (!(retryAfter && options.retry > 0)) {
                  _context3.next = 16;
                  break;
                }

                return _context3.abrupt("return", this.retry(url, retryAfter, _request, options));

              case 16:
                return _context3.abrupt("return", this.processResponse(response));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function request(_x6) {
        return _request2.apply(this, arguments);
      };
    }()
  }, {
    key: "_checkForDeprecationHeader",
    value: function _checkForDeprecationHeader(headers) {
      var alertHeader = headers.get("Alert");

      if (!alertHeader) {
        return;
      }

      var alert;

      try {
        alert = JSON.parse(alertHeader);
      } catch (err) {
        console.warn("Unable to parse Alert header message", alertHeader);
        return;
      }

      console.warn(alert.message, alert.url);
      this.events.emit("deprecated", alert);
    }
  }, {
    key: "_checkForBackoffHeader",
    value: function _checkForBackoffHeader(status, headers) {
      var backoffMs;
      var backoffSeconds = parseInt(headers.get("Backoff"), 10);

      if (backoffSeconds > 0) {
        backoffMs = new Date().getTime() + backoffSeconds * 1000;
      } else {
        backoffMs = 0;
      }

      this.events.emit("backoff", backoffMs);
    }
  }, {
    key: "_checkForRetryAfterHeader",
    value: function _checkForRetryAfterHeader(status, headers) {
      var retryAfter = headers.get("Retry-After");

      if (!retryAfter) {
        return;
      }

      var delay = parseInt(retryAfter, 10) * 1000;
      retryAfter = new Date().getTime() + delay;
      this.events.emit("retry-after", retryAfter);
      return delay;
    }
  }]);
  return HTTP;
}();

exports.default = HTTP;
},{"./errors":311,"./utils":315,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/regenerator":304}],313:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _events = require("events");

var _base = _interopRequireDefault(require("./base"));

var KintoClient =
/*#__PURE__*/
function (_KintoClientBase) {
  (0, _inherits2.default)(KintoClient, _KintoClientBase);

  function KintoClient(remote) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, KintoClient);
    var events = options.events || new _events.EventEmitter();
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KintoClient).call(this, remote, Object.assign({
      events: events
    }, options)));
  }

  return KintoClient;
}(_base.default); // This is a hack to avoid Browserify to expose the above class
// at `new KintoClient()` instead of `new KintoClient.default()`.
// See https://github.com/Kinto/kinto-http.js/issues/77


exports.default = KintoClient;

if ((typeof module === "undefined" ? "undefined" : (0, _typeof2.default)(module)) === "object") {
  module.exports = KintoClient;
}
},{"./base":306,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/getPrototypeOf":285,"@babel/runtime/helpers/inherits":286,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/possibleConstructorReturn":296,"@babel/runtime/helpers/typeof":301,"events":305}],314:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRequest = createRequest;
exports.updateRequest = updateRequest;
exports.jsonPatchPermissionsRequest = jsonPatchPermissionsRequest;
exports.deleteRequest = deleteRequest;
exports.addAttachmentRequest = addAttachmentRequest;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _utils = require("./utils");

var requestDefaults = {
  safe: false,
  // check if we should set default content type here
  headers: {},
  permissions: undefined,
  data: undefined,
  patch: false
};
/**
 * @private
 */

function safeHeader(safe, last_modified) {
  if (!safe) {
    return {};
  }

  if (last_modified) {
    return {
      "If-Match": "\"".concat(last_modified, "\"")
    };
  }

  return {
    "If-None-Match": "*"
  };
}
/**
 * @private
 */


function createRequest(path, _ref) {
  var data = _ref.data,
      permissions = _ref.permissions;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _requestDefaults$opti = (0, _objectSpread2.default)({}, requestDefaults, options),
      headers = _requestDefaults$opti.headers,
      safe = _requestDefaults$opti.safe;

  return {
    method: data && data.id ? "PUT" : "POST",
    path: path,
    headers: (0, _objectSpread2.default)({}, headers, safeHeader(safe)),
    body: {
      data: data,
      permissions: permissions
    }
  };
}
/**
 * @private
 */


function updateRequest(path, _ref2) {
  var data = _ref2.data,
      permissions = _ref2.permissions;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _requestDefaults$opti2 = (0, _objectSpread2.default)({}, requestDefaults, options),
      headers = _requestDefaults$opti2.headers,
      safe = _requestDefaults$opti2.safe,
      patch = _requestDefaults$opti2.patch;

  var _data$options = (0, _objectSpread2.default)({}, data, options),
      last_modified = _data$options.last_modified;

  if (Object.keys((0, _utils.omit)(data, "id", "last_modified")).length === 0) {
    data = undefined;
  }

  return {
    method: patch ? "PATCH" : "PUT",
    path: path,
    headers: (0, _objectSpread2.default)({}, headers, safeHeader(safe, last_modified)),
    body: {
      data: data,
      permissions: permissions
    }
  };
}
/**
 * @private
 */


function jsonPatchPermissionsRequest(path, permissions, opType) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _requestDefaults$opti3 = (0, _objectSpread2.default)({}, requestDefaults, options),
      headers = _requestDefaults$opti3.headers,
      safe = _requestDefaults$opti3.safe,
      last_modified = _requestDefaults$opti3.last_modified;

  var ops = [];

  var _arr = Object.entries(permissions);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = (0, _slicedToArray2.default)(_arr[_i], 2),
        type = _arr$_i[0],
        principals = _arr$_i[1];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = principals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var principal = _step.value;
        ops.push({
          op: opType,
          path: "/permissions/".concat(type, "/").concat(principal)
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return {
    method: "PATCH",
    path: path,
    headers: (0, _objectSpread2.default)({}, headers, safeHeader(safe, last_modified), {
      "Content-Type": "application/json-patch+json"
    }),
    body: ops
  };
}
/**
 * @private
 */


function deleteRequest(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _requestDefaults$opti4 = (0, _objectSpread2.default)({}, requestDefaults, options),
      headers = _requestDefaults$opti4.headers,
      safe = _requestDefaults$opti4.safe,
      last_modified = _requestDefaults$opti4.last_modified;

  if (safe && !last_modified) {
    throw new Error("Safe concurrency check requires a last_modified value.");
  }

  return {
    method: "DELETE",
    path: path,
    headers: (0, _objectSpread2.default)({}, headers, safeHeader(safe, last_modified))
  };
}
/**
 * @private
 */


function addAttachmentRequest(path, dataURI) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      data = _ref3.data,
      permissions = _ref3.permissions;

  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _requestDefaults$opti5 = (0, _objectSpread2.default)({}, requestDefaults, options),
      headers = _requestDefaults$opti5.headers,
      safe = _requestDefaults$opti5.safe,
      gzipped = _requestDefaults$opti5.gzipped;

  var _data$options2 = (0, _objectSpread2.default)({}, data, options),
      last_modified = _data$options2.last_modified;

  var body = {
    data: data,
    permissions: permissions
  };
  var formData = (0, _utils.createFormData)(dataURI, body, options);
  var customPath = gzipped != null ? customPath = path + "?gzipped=" + (gzipped ? "true" : "false") : path;
  return {
    method: "POST",
    path: customPath,
    headers: (0, _objectSpread2.default)({}, headers, safeHeader(safe, last_modified)),
    body: formData
  };
}
},{"./utils":315,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/slicedToArray":298}],315:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;
exports.delay = delay;
exports.pMap = pMap;
exports.omit = omit;
exports.toDataBody = toDataBody;
exports.qsify = qsify;
exports.checkVersion = checkVersion;
exports.support = support;
exports.capable = capable;
exports.nobatch = nobatch;
exports.isObject = isObject;
exports.parseDataURL = parseDataURL;
exports.extractFileInfo = extractFileInfo;
exports.createFormData = createFormData;
exports.cleanUndefinedProperties = cleanUndefinedProperties;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * Chunks an array into n pieces.
 *
 * @private
 * @param  {Array}  array
 * @param  {Number} n
 * @return {Array}
 */
function partition(array, n) {
  if (n <= 0) {
    return array;
  }

  return array.reduce(function (acc, x, i) {
    if (i === 0 || i % n === 0) {
      acc.push([x]);
    } else {
      acc[acc.length - 1].push(x);
    }

    return acc;
  }, []);
}
/**
 * Returns a Promise always resolving after the specified amount in milliseconds.
 *
 * @return Promise<void>
 */


function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
/**
 * Maps a list to promises using the provided mapping function, executes them
 * sequentially then returns a Promise resolving with ordered results obtained.
 * Think of this as a sequential Promise.all.
 *
 * @private
 * @param  {Array}    list The list to map.
 * @param  {Function} fn   The mapping function.
 * @return {Promise}
 */


function pMap(_x, _x2) {
  return _pMap.apply(this, arguments);
}
/**
 * Takes an object and returns a copy of it with the provided keys omitted.
 *
 * @private
 * @param  {Object}    obj  The source object.
 * @param  {...String} keys The keys to omit.
 * @return {Object}
 */


function _pMap() {
  _pMap = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(list, fn) {
    var results;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            results = [];
            _context2.next = 3;
            return list.reduce(
            /*#__PURE__*/
            function () {
              var _ref = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(promise, entry) {
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return promise;

                      case 2:
                        _context.t0 = results;
                        _context.next = 5;
                        return fn(entry);

                      case 5:
                        _context.t1 = _context.sent;
                        results = _context.t0.concat.call(_context.t0, _context.t1);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }(), Promise.resolve());

          case 3:
            return _context2.abrupt("return", results);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _pMap.apply(this, arguments);
}

function omit(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (!keys.includes(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
/**
 * Always returns a resource data object from the provided argument.
 *
 * @private
 * @param  {Object|String} resource
 * @return {Object}
 */


function toDataBody(resource) {
  if (isObject(resource)) {
    return resource;
  }

  if (typeof resource === "string") {
    return {
      id: resource
    };
  }

  throw new Error("Invalid argument.");
}
/**
 * Transforms an object into an URL query string, stripping out any undefined
 * values.
 *
 * @param  {Object} obj
 * @return {String}
 */


function qsify(obj) {
  var encode = function encode(v) {
    return encodeURIComponent(typeof v === "boolean" ? String(v) : v);
  };

  var stripUndefined = function stripUndefined(o) {
    return JSON.parse(JSON.stringify(o));
  };

  var stripped = stripUndefined(obj);
  return Object.keys(stripped).map(function (k) {
    var ks = encode(k) + "=";

    if (Array.isArray(stripped[k])) {
      return ks + stripped[k].map(function (v) {
        return encode(v);
      }).join(",");
    } else {
      return ks + encode(stripped[k]);
    }
  }).join("&");
}
/**
 * Checks if a version is within the provided range.
 *
 * @param  {String} version    The version to check.
 * @param  {String} minVersion The minimum supported version (inclusive).
 * @param  {String} maxVersion The minimum supported version (exclusive).
 * @throws {Error} If the version is outside of the provided range.
 */


function checkVersion(version, minVersion, maxVersion) {
  var extract = function extract(str) {
    return str.split(".").map(function (x) {
      return parseInt(x, 10);
    });
  };

  var _extract = extract(version),
      _extract2 = (0, _slicedToArray2.default)(_extract, 2),
      verMajor = _extract2[0],
      verMinor = _extract2[1];

  var _extract3 = extract(minVersion),
      _extract4 = (0, _slicedToArray2.default)(_extract3, 2),
      minMajor = _extract4[0],
      minMinor = _extract4[1];

  var _extract5 = extract(maxVersion),
      _extract6 = (0, _slicedToArray2.default)(_extract5, 2),
      maxMajor = _extract6[0],
      maxMinor = _extract6[1];

  var checks = [verMajor < minMajor, verMajor === minMajor && verMinor < minMinor, verMajor > maxMajor, verMajor === maxMajor && verMinor >= maxMinor];

  if (checks.some(function (x) {
    return x;
  })) {
    throw new Error("Version ".concat(version, " doesn't satisfy ").concat(minVersion, " <= x < ").concat(maxVersion));
  }
}
/**
 * Generates a decorator function ensuring a version check is performed against
 * the provided requirements before executing it.
 *
 * @param  {String} min The required min version (inclusive).
 * @param  {String} max The required max version (inclusive).
 * @return {Function}
 */


function support(min, max) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this = this;

        var wrappedMethod = function wrappedMethod() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          // "this" is the current instance which its method is decorated.
          var client = "client" in _this ? _this.client : _this;
          return client.fetchHTTPApiVersion().then(function (version) {
            return checkVersion(version, min, max);
          }).then(function () {
            return fn.apply(_this, args);
          });
        };

        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}
/**
 * Generates a decorator function ensuring that the specified capabilities are
 * available on the server before executing it.
 *
 * @param  {Array<String>} capabilities The required capabilities.
 * @return {Function}
 */


function capable(capabilities) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this2 = this;

        var wrappedMethod = function wrappedMethod() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          // "this" is the current instance which its method is decorated.
          var client = "client" in _this2 ? _this2.client : _this2;
          return client.fetchServerCapabilities().then(function (available) {
            var missing = capabilities.filter(function (c) {
              return !(c in available);
            });

            if (missing.length > 0) {
              var missingStr = missing.join(", ");
              throw new Error("Required capabilities ".concat(missingStr, " not present on server"));
            }
          }).then(function () {
            return fn.apply(_this2, args);
          });
        };

        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}
/**
 * Generates a decorator function ensuring an operation is not performed from
 * within a batch request.
 *
 * @param  {String} message The error message to throw.
 * @return {Function}
 */


function nobatch(message) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this3 = this;

        var wrappedMethod = function wrappedMethod() {
          // "this" is the current instance which its method is decorated.
          if (_this3._isBatch) {
            throw new Error(message);
          }

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return fn.apply(_this3, args);
        };

        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}
/**
 * Returns true if the specified value is an object (i.e. not an array nor null).
 * @param  {Object} thing The value to inspect.
 * @return {bool}
 */


function isObject(thing) {
  return (0, _typeof2.default)(thing) === "object" && thing !== null && !Array.isArray(thing);
}
/**
 * Parses a data url.
 * @param  {String} dataURL The data url.
 * @return {Object}
 */


function parseDataURL(dataURL) {
  var regex = /^data:(.*);base64,(.*)/;
  var match = dataURL.match(regex);

  if (!match) {
    throw new Error("Invalid data-url: ".concat(String(dataURL).substr(0, 32), "..."));
  }

  var props = match[1];
  var base64 = match[2];

  var _props$split = props.split(";"),
      _props$split2 = (0, _toArray2.default)(_props$split),
      type = _props$split2[0],
      rawParams = _props$split2.slice(1);

  var params = rawParams.reduce(function (acc, param) {
    var _param$split = param.split("="),
        _param$split2 = (0, _slicedToArray2.default)(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];

    return (0, _objectSpread3.default)({}, acc, (0, _defineProperty2.default)({}, key, value));
  }, {});
  return (0, _objectSpread3.default)({}, params, {
    type: type,
    base64: base64
  });
}
/**
 * Extracts file information from a data url.
 * @param  {String} dataURL The data url.
 * @return {Object}
 */


function extractFileInfo(dataURL) {
  var _parseDataURL = parseDataURL(dataURL),
      name = _parseDataURL.name,
      type = _parseDataURL.type,
      base64 = _parseDataURL.base64;

  var binary = atob(base64);
  var array = [];

  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  var blob = new Blob([new Uint8Array(array)], {
    type: type
  });
  return {
    blob: blob,
    name: name
  };
}
/**
 * Creates a FormData instance from a data url and an existing JSON response
 * body.
 * @param  {String} dataURL            The data url.
 * @param  {Object} body               The response body.
 * @param  {Object} [options={}]       The options object.
 * @param  {Object} [options.filename] Force attachment file name.
 * @return {FormData}
 */


function createFormData(dataURL, body) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$filename = options.filename,
      filename = _options$filename === void 0 ? "untitled" : _options$filename;

  var _extractFileInfo = extractFileInfo(dataURL),
      blob = _extractFileInfo.blob,
      name = _extractFileInfo.name;

  var formData = new FormData();
  formData.append("attachment", blob, name || filename);

  for (var property in body) {
    if (typeof body[property] !== "undefined") {
      formData.append(property, JSON.stringify(body[property]));
    }
  }

  return formData;
}
/**
 * Clones an object with all its undefined keys removed.
 * @private
 */


function cleanUndefinedProperties(obj) {
  var result = {};

  for (var key in obj) {
    if (typeof obj[key] !== "undefined") {
      result[key] = obj[key];
    }
  }

  return result;
}
},{"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/defineProperty":284,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/slicedToArray":298,"@babel/runtime/helpers/toArray":299,"@babel/runtime/helpers/typeof":301,"@babel/runtime/regenerator":304}],316:[function(require,module,exports){
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":319,"./v4":320}],317:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],318:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],319:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":317,"./lib/rng":318}],320:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":317,"./lib/rng":318}],321:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _collection = _interopRequireDefault(require("./collection"));

var _base = _interopRequireDefault(require("./adapters/base"));

var DEFAULT_BUCKET_NAME = "default";
var DEFAULT_REMOTE = "http://localhost:8888/v1";
var DEFAULT_RETRY = 1;
/**
 * KintoBase class.
 */

var KintoBase =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(KintoBase, null, [{
    key: "adapters",

    /**
     * Provides a public access to the base adapter class. Users can create a
     * custom DB adapter by extending {@link BaseAdapter}.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        BaseAdapter: _base.default
      };
    }
    /**
     * Synchronization strategies. Available strategies are:
     *
     * - `MANUAL`: Conflicts will be reported in a dedicated array.
     * - `SERVER_WINS`: Conflicts are resolved using remote data.
     * - `CLIENT_WINS`: Conflicts are resolved using local data.
     *
     * @type {Object}
     */

  }, {
    key: "syncStrategy",
    get: function get() {
      return _collection.default.strategy;
    }
    /**
     * Constructor.
     *
     * Options:
     * - `{String}`       `remote`         The server URL to use.
     * - `{String}`       `bucket`         The collection bucket name.
     * - `{EventEmitter}` `events`         Events handler.
     * - `{BaseAdapter}`  `adapter`        The base DB adapter class.
     * - `{Object}`       `adapterOptions` Options given to the adapter.
     * - `{Object}`       `headers`        The HTTP headers to use.
     * - `{Object}`       `retry`          Number of retries when the server fails to process the request (default: `1`)
     * - `{String}`       `requestMode`    The HTTP CORS mode to use.
     * - `{Number}`       `timeout`        The requests timeout in ms (default: `5000`).
     *
     * @param  {Object} options The options object.
     */

  }]);

  function KintoBase() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, KintoBase);
    var defaults = {
      bucket: DEFAULT_BUCKET_NAME,
      remote: DEFAULT_REMOTE,
      retry: DEFAULT_RETRY
    };
    this._options = (0, _objectSpread2.default)({}, defaults, options);

    if (!this._options.adapter) {
      throw new Error("No adapter provided");
    }

    var _this$_options = this._options,
        ApiClass = _this$_options.ApiClass,
        events = _this$_options.events,
        headers = _this$_options.headers,
        remote = _this$_options.remote,
        requestMode = _this$_options.requestMode,
        retry = _this$_options.retry,
        timeout = _this$_options.timeout; // public properties

    /**
     * The kinto HTTP client instance.
     * @type {KintoClient}
     */

    this.api = new ApiClass(remote, {
      events: events,
      headers: headers,
      requestMode: requestMode,
      retry: retry,
      timeout: timeout
    });
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */

    this.events = this._options.events;
  }
  /**
   * Creates a {@link Collection} instance. The second (optional) parameter
   * will set collection-level options like e.g. `remoteTransformers`.
   *
   * @param  {String} collName The collection name.
   * @param  {Object} [options={}]                 Extra options or override client's options.
   * @param  {Object} [options.idSchema]           IdSchema instance (default: UUID)
   * @param  {Object} [options.remoteTransformers] Array<RemoteTransformer> (default: `[]`])
   * @param  {Object} [options.hooks]              Array<Hook> (default: `[]`])
   * @param  {Object} [options.localFields]        Array<Field> (default: `[]`])
   * @return {Collection}
   */


  (0, _createClass2.default)(KintoBase, [{
    key: "collection",
    value: function collection(collName) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!collName) {
        throw new Error("missing collection name");
      }

      var _this$_options$option = (0, _objectSpread2.default)({}, this._options, options),
          bucket = _this$_options$option.bucket,
          events = _this$_options$option.events,
          adapter = _this$_options$option.adapter,
          adapterOptions = _this$_options$option.adapterOptions;

      var idSchema = options.idSchema,
          remoteTransformers = options.remoteTransformers,
          hooks = options.hooks,
          localFields = options.localFields;
      return new _collection.default(bucket, collName, this.api, {
        events: events,
        adapter: adapter,
        adapterOptions: adapterOptions,
        idSchema: idSchema,
        remoteTransformers: remoteTransformers,
        hooks: hooks,
        localFields: localFields
      });
    }
  }]);
  return KintoBase;
}();

exports.default = KintoBase;

},{"./adapters/base":323,"./collection":324,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293}],322:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = _open2;
exports.execute = execute;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _base = _interopRequireDefault(require("./base.js"));

var _utils = require("../utils");

var INDEXED_FIELDS = ["id", "_status", "last_modified"];
/**
 * Small helper that wraps the opening of an IndexedDB into a Promise.
 *
 * @param dbname          {String}   The database name.
 * @param version         {Integer}  Schema version
 * @param onupgradeneeded {Function} The callback to execute if schema is
 *                                   missing or different.
 * @return {Promise<IDBDatabase>}
 */

function _open2(_x, _x2) {
  return _open.apply(this, arguments);
}
/**
 * Helper to run the specified callback in a single transaction on the
 * specified store.
 * The helper focuses on transaction wrapping into a promise.
 *
 * @param db           {IDBDatabase} The database instance.
 * @param name         {String}      The store name.
 * @param callback     {Function}    The piece of code to execute in the transaction.
 * @param options      {Object}      Options.
 * @param options.mode {String}      Transaction mode (default: read).
 * @return {Promise} any value returned by the callback.
 */


function _open() {
  _open = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(dbname, _ref) {
    var version, onupgradeneeded;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            version = _ref.version, onupgradeneeded = _ref.onupgradeneeded;
            return _context10.abrupt("return", new Promise(function (resolve, reject) {
              var request = indexedDB.open(dbname, version);

              request.onupgradeneeded = function (event) {
                var db = event.target.result;

                db.onerror = function (event) {
                  return reject(event.target.error);
                };

                return onupgradeneeded(event);
              };

              request.onerror = function (event) {
                reject(event.target.error);
              };

              request.onsuccess = function (event) {
                var db = event.target.result;
                resolve(db);
              };
            }));

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return _open.apply(this, arguments);
}

function execute(_x3, _x4, _x5) {
  return _execute.apply(this, arguments);
}
/**
 * Helper to wrap the deletion of an IndexedDB database into a promise.
 *
 * @param dbName {String} the database to delete
 * @return {Promise}
 */


function _execute() {
  _execute = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(db, name, callback) {
    var options,
        mode,
        _args11 = arguments;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
            mode = options.mode;
            return _context11.abrupt("return", new Promise(function (resolve, reject) {
              // On Safari, calling IDBDatabase.transaction with mode == undefined raises
              // a TypeError.
              var transaction = mode ? db.transaction([name], mode) : db.transaction([name]);
              var store = transaction.objectStore(name); // Let the callback abort this transaction.

              var abort = function abort(e) {
                transaction.abort();
                reject(e);
              }; // Execute the specified callback **synchronously**.


              var result;

              try {
                result = callback(store, abort);
              } catch (e) {
                abort(e);
              }

              transaction.onerror = function (event) {
                return reject(event.target.error);
              };

              transaction.oncomplete = function (event) {
                return resolve(result);
              };
            }));

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _execute.apply(this, arguments);
}

function deleteDatabase(_x6) {
  return _deleteDatabase.apply(this, arguments);
}
/**
 * IDB cursor handlers.
 * @type {Object}
 */


function _deleteDatabase() {
  _deleteDatabase = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee12(dbName) {
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", new Promise(function (resolve, reject) {
              var request = indexedDB.deleteDatabase(dbName);

              request.onsuccess = function (event) {
                return resolve(event.target);
              };

              request.onerror = function (event) {
                return reject(event.target.error);
              };
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));
  return _deleteDatabase.apply(this, arguments);
}

var cursorHandlers = {
  all: function all(filters, done) {
    var results = [];
    return function (event) {
      var cursor = event.target.result;

      if (cursor) {
        var value = cursor.value;

        if ((0, _utils.filterObject)(filters, value)) {
          results.push(value);
        }

        cursor.continue();
      } else {
        done(results);
      }
    };
  },
  in: function _in(values, filters, done) {
    var results = [];
    return function (event) {
      var cursor = event.target.result;

      if (!cursor) {
        done(results);
        return;
      }

      var key = cursor.key,
          value = cursor.value; // `key` can be an array of two values (see `keyPath` in indices definitions).

      var i = 0; // `values` can be an array of arrays if we filter using an index whose key path
      // is an array (eg. `cursorHandlers.in([["bid/cid", 42], ["bid/cid", 43]], ...)`)

      while (key > values[i]) {
        // The cursor has passed beyond this key. Check next.
        ++i;

        if (i === values.length) {
          done(results); // There is no next. Stop searching.

          return;
        }
      }

      var isEqual = Array.isArray(key) ? (0, _utils.arrayEqual)(key, values[i]) : key === values[i];

      if (isEqual) {
        if ((0, _utils.filterObject)(filters, value)) {
          results.push(value);
        }

        cursor.continue();
      } else {
        cursor.continue(values[i]);
      }
    };
  }
};
/**
 * Creates an IDB request and attach it the appropriate cursor event handler to
 * perform a list query.
 *
 * Multiple matching values are handled by passing an array.
 *
 * @param  {String}           cid        The collection id (ie. `{bid}/{cid}`)
 * @param  {IDBStore}         store      The IDB store.
 * @param  {Object}           filters    Filter the records by field.
 * @param  {Function}         done       The operation completion handler.
 * @return {IDBRequest}
 */

function createListRequest(cid, store, filters, done) {
  var filterFields = Object.keys(filters); // If no filters, get all results in one bulk.

  if (filterFields.length == 0) {
    var _request = store.index("cid").getAll(IDBKeyRange.only(cid));

    _request.onsuccess = function (event) {
      return done(event.target.result);
    };

    return _request;
  } // Introspect filters and check if they leverage an indexed field.


  var indexField = filterFields.find(function (field) {
    return INDEXED_FIELDS.includes(field);
  });

  if (!indexField) {
    // Iterate on all records for this collection (ie. cid)
    var _request2 = store.index("cid").openCursor(IDBKeyRange.only(cid));

    _request2.onsuccess = cursorHandlers.all(filters, done);
    return _request2;
  } // If `indexField` was used already, don't filter again.


  var remainingFilters = (0, _utils.omitKeys)(filters, [indexField]); // value specified in the filter (eg. `filters: { _status: ["created", "updated"] }`)

  var value = filters[indexField]; // For the "id" field, use the primary key.

  var indexStore = indexField == "id" ? store : store.index(indexField); // WHERE IN equivalent clause

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return done([]);
    }

    var values = value.map(function (i) {
      return [cid, i];
    }).sort();
    var range = IDBKeyRange.bound(values[0], values[values.length - 1]);

    var _request3 = indexStore.openCursor(range);

    _request3.onsuccess = cursorHandlers.in(values, remainingFilters, done);
    return _request3;
  } // If no filters on custom attribute, get all results in one bulk.


  if (remainingFilters.length == 0) {
    var _request4 = indexStore.getAll(IDBKeyRange.only([cid, value]));

    _request4.onsuccess = function (event) {
      return done(event.target.result);
    };

    return _request4;
  } // WHERE field = value clause


  var request = indexStore.openCursor(IDBKeyRange.only([cid, value]));
  request.onsuccess = cursorHandlers.all(remainingFilters, done);
  return request;
}
/**
 * IndexedDB adapter.
 *
 * This adapter doesn't support any options.
 */


var IDB =
/*#__PURE__*/
function (_BaseAdapter) {
  (0, _inherits2.default)(IDB, _BaseAdapter);

  /**
   * Constructor.
   *
   * @param  {String} cid  The key base for this collection (eg. `bid/cid`)
   * @param  {Object} options
   * @param  {String} options.dbName         The IndexedDB name (default: `"KintoDB"`)
   * @param  {String} options.migrateOldData Whether old database data should be migrated (default: `false`)
   */
  function IDB(cid) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, IDB);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IDB).call(this));
    _this.cid = cid;
    _this.dbName = options.dbName || "KintoDB";
    _this._options = options;
    _this._db = null;
    return _this;
  }

  (0, _createClass2.default)(IDB, [{
    key: "_handleError",
    value: function _handleError(method, err) {
      var error = new Error(method + "() " + err.message);
      error.stack = err.stack;
      throw error;
    }
    /**
     * Ensures a connection to the IndexedDB database has been opened.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "open",
    value: function () {
      var _open3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var dataToMigrate, records, timestamp;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._db) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this);

              case 2:
                if (!this._options.migrateOldData) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return migrationRequired(this.cid);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = null;

              case 9:
                dataToMigrate = _context.t0;
                _context.next = 12;
                return _open2(this.dbName, {
                  version: 1,
                  onupgradeneeded: function onupgradeneeded(event) {
                    var db = event.target.result; // Records store

                    var recordsStore = db.createObjectStore("records", {
                      keyPath: ["_cid", "id"]
                    }); // An index to obtain all the records in a collection.

                    recordsStore.createIndex("cid", "_cid"); // Here we create indices for every known field in records by collection.
                    // Local record status ("synced", "created", "updated", "deleted")

                    recordsStore.createIndex("_status", ["_cid", "_status"]); // Last modified field

                    recordsStore.createIndex("last_modified", ["_cid", "last_modified"]); // Timestamps store

                    db.createObjectStore("timestamps", {
                      keyPath: "cid"
                    });
                  }
                });

              case 12:
                this._db = _context.sent;

                if (!dataToMigrate) {
                  _context.next = 23;
                  break;
                }

                records = dataToMigrate.records, timestamp = dataToMigrate.timestamp;
                _context.next = 17;
                return this.loadDump(records);

              case 17:
                _context.next = 19;
                return this.saveLastModified(timestamp);

              case 19:
                console.log("".concat(this.cid, ": data was migrated successfully.")); // Delete the old database.

                _context.next = 22;
                return deleteDatabase(this.cid);

              case 22:
                console.warn("".concat(this.cid, ": old database was deleted."));

              case 23:
                return _context.abrupt("return", this);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function open() {
        return _open3.apply(this, arguments);
      };
    }()
    /**
     * Closes current connection to the database.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._db) {
        this._db.close(); // indexedDB.close is synchronous


        this._db = null;
      }

      return Promise.resolve();
    }
    /**
     * Returns a transaction and an object store for a store name.
     *
     * To determine if a transaction has completed successfully, we should rather
     * listen to the transaction’s complete event rather than the IDBObjectStore
     * request’s success event, because the transaction may still fail after the
     * success event fires.
     *
     * @param  {String}      name  Store name
     * @param  {Function}    callback to execute
     * @param  {Object}      options Options
     * @param  {String}      options.mode  Transaction mode ("readwrite" or undefined)
     * @return {Object}
     */

  }, {
    key: "prepare",
    value: function () {
      var _prepare = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(name, callback, options) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.open();

              case 2:
                _context2.next = 4;
                return execute(this._db, name, callback, options);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function prepare(_x7, _x8, _x9) {
        return _prepare.apply(this, arguments);
      };
    }()
    /**
     * Deletes every records in the current collection.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.prepare("records", function (store) {
                  var range = IDBKeyRange.only(_this2.cid);
                  var request = store.index("cid").openKeyCursor(range);

                  request.onsuccess = function (event) {
                    var cursor = event.target.result;

                    if (cursor) {
                      store.delete(cursor.primaryKey);
                      cursor.continue();
                    }
                  };

                  return request;
                }, {
                  mode: "readwrite"
                });

              case 3:
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);

                this._handleError("clear", _context3.t0);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      return function clear() {
        return _clear.apply(this, arguments);
      };
    }()
    /**
     * Executes the set of synchronous CRUD operations described in the provided
     * callback within an IndexedDB transaction, for current db store.
     *
     * The callback will be provided an object exposing the following synchronous
     * CRUD operation methods: get, create, update, delete.
     *
     * Important note: because limitations in IndexedDB implementations, no
     * asynchronous code should be performed within the provided callback; the
     * promise will therefore be rejected if the callback returns a Promise.
     *
     * Options:
     * - {Array} preload: The list of record IDs to fetch and make available to
     *   the transaction object get() method (default: [])
     *
     * @example
     * const db = new IDB("example");
     * const result = await db.execute(transaction => {
     *   transaction.create({id: 1, title: "foo"});
     *   transaction.update({id: 2, title: "bar"});
     *   transaction.delete(3);
     *   return "foo";
     * });
     *
     * @override
     * @param  {Function} callback The operation description callback.
     * @param  {Object}   options  The options object.
     * @return {Promise}
     */

  }, {
    key: "execute",
    value: function () {
      var _execute2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(callback) {
        var _this3 = this;

        var options,
            result,
            _args4 = arguments;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {
                  preload: []
                };
                _context4.next = 3;
                return this.prepare("records", function (store, abort) {
                  var runCallback = function runCallback() {
                    var preloaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    // Expose a consistent API for every adapter instead of raw store methods.
                    var proxy = transactionProxy(_this3, store, preloaded); // The callback is executed synchronously within the same transaction.

                    try {
                      var returned = callback(proxy);

                      if (returned instanceof Promise) {
                        // XXX: investigate how to provide documentation details in error.
                        throw new Error("execute() callback should not return a Promise.");
                      } // Bring to scope that will be returned (once promise awaited).


                      result = returned;
                    } catch (e) {
                      // The callback has thrown an error explicitly. Abort transaction cleanly.
                      abort(e);
                    }
                  }; // No option to preload records, go straight to `callback`.


                  if (!options.preload.length) {
                    return runCallback();
                  } // Preload specified records using a list request.


                  var filters = {
                    id: options.preload
                  };
                  createListRequest(_this3.cid, store, filters, function (records) {
                    // Store obtained records by id.
                    var preloaded = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (var _iterator = records[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var r = _step.value;
                        var _cid = r._cid,
                            record = (0, _objectWithoutProperties2.default)(r, ["_cid"]); // eslint-disable-line no-unused-vars

                        preloaded[record.id] = record;
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }

                    runCallback(preloaded);
                  });
                }, {
                  mode: "readwrite"
                });

              case 3:
                return _context4.abrupt("return", result);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function execute(_x10) {
        return _execute2.apply(this, arguments);
      };
    }()
    /**
     * Retrieve a record by its primary key from the IndexedDB database.
     *
     * @override
     * @param  {String} id The record id.
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id) {
        var _this4 = this;

        var record;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.prepare("records", function (store) {
                  store.get([_this4.cid, id]).onsuccess = function (e) {
                    return record = e.target.result;
                  };
                });

              case 3:
                return _context5.abrupt("return", record);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);

                this._handleError("get", _context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));

      return function get(_x11) {
        return _get.apply(this, arguments);
      };
    }()
    /**
     * Lists all records from the IndexedDB database.
     *
     * @override
     * @param  {Object} params  The filters and order to apply to the results.
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6() {
        var _this5 = this;

        var params,
            filters,
            results,
            _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {
                  filters: {}
                };
                filters = params.filters;
                _context6.prev = 2;
                results = [];
                _context6.next = 6;
                return this.prepare("records", function (store) {
                  createListRequest(_this5.cid, store, filters, function (_results) {
                    // we have received all requested records that match the filters,
                    // we now park them within current scope and hide the `_cid` attribute.
                    results = _results.map(function (r) {
                      var _cid = r._cid,
                          record = (0, _objectWithoutProperties2.default)(r, ["_cid"]); // eslint-disable-line no-unused-vars

                      return record;
                    });
                  });
                });

              case 6:
                return _context6.abrupt("return", params.order ? (0, _utils.sortObjects)(params.order, results) : results);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](2);

                this._handleError("list", _context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 9]]);
      }));

      return function list() {
        return _list.apply(this, arguments);
      };
    }()
    /**
     * Store the lastModified value into metadata store.
     *
     * @override
     * @param  {Number}  lastModified
     * @return {Promise}
     */

  }, {
    key: "saveLastModified",
    value: function () {
      var _saveLastModified = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(lastModified) {
        var _this6 = this;

        var value;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                value = parseInt(lastModified, 10) || null;
                _context7.prev = 1;
                _context7.next = 4;
                return this.prepare("timestamps", function (store) {
                  return store.put({
                    cid: _this6.cid,
                    value: value
                  });
                }, {
                  mode: "readwrite"
                });

              case 4:
                return _context7.abrupt("return", value);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);

                this._handleError("saveLastModified", _context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));

      return function saveLastModified(_x12) {
        return _saveLastModified.apply(this, arguments);
      };
    }()
    /**
     * Retrieve saved lastModified value.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "getLastModified",
    value: function () {
      var _getLastModified = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8() {
        var _this7 = this;

        var entry;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                entry = null;
                _context8.next = 4;
                return this.prepare("timestamps", function (store) {
                  store.get(_this7.cid).onsuccess = function (e) {
                    return entry = e.target.result;
                  };
                });

              case 4:
                return _context8.abrupt("return", entry ? entry.value : null);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);

                this._handleError("getLastModified", _context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      return function getLastModified() {
        return _getLastModified.apply(this, arguments);
      };
    }()
    /**
     * Load a dump of records exported from a server.
     *
     * @abstract
     * @param  {Array} records The records to load.
     * @return {Promise}
     */

  }, {
    key: "loadDump",
    value: function () {
      var _loadDump = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(records) {
        var previousLastModified, lastModified;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return this.execute(function (transaction) {
                  // Since the put operations are asynchronous, we chain
                  // them together. The last one will be waited for the
                  // `transaction.oncomplete` callback.
                  var i = 0;
                  putNext();

                  function putNext() {
                    if (i == records.length) {
                      return;
                    } // On error, `transaction.onerror` is called.


                    transaction.update(records[i]).onsuccess = putNext;
                    ++i;
                  }
                });

              case 3:
                _context9.next = 5;
                return this.getLastModified();

              case 5:
                previousLastModified = _context9.sent;
                lastModified = Math.max.apply(Math, (0, _toConsumableArray2.default)(records.map(function (record) {
                  return record.last_modified;
                })));

                if (!(lastModified > previousLastModified)) {
                  _context9.next = 10;
                  break;
                }

                _context9.next = 10;
                return this.saveLastModified(lastModified);

              case 10:
                return _context9.abrupt("return", records);

              case 13:
                _context9.prev = 13;
                _context9.t0 = _context9["catch"](0);

                this._handleError("loadDump", _context9.t0);

              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 13]]);
      }));

      return function loadDump(_x13) {
        return _loadDump.apply(this, arguments);
      };
    }()
  }]);
  return IDB;
}(_base.default);
/**
 * IDB transaction proxy.
 *
 * @param  {IDB} adapter        The call IDB adapter
 * @param  {IDBStore} store     The IndexedDB database store.
 * @param  {Array}    preloaded The list of records to make available to
 *                              get() (default: []).
 * @return {Object}
 */


exports.default = IDB;

function transactionProxy(adapter, store) {
  var preloaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var _cid = adapter.cid;
  return {
    create: function create(record) {
      store.add((0, _objectSpread2.default)({}, record, {
        _cid: _cid
      }));
    },
    update: function update(record) {
      return store.put((0, _objectSpread2.default)({}, record, {
        _cid: _cid
      }));
    },
    delete: function _delete(id) {
      store.delete([_cid, id]);
    },
    get: function get(id) {
      return preloaded[id];
    }
  };
}
/**
 * Up to version 10.X of kinto.js, each collection had its own collection.
 * The database name was `${bid}/${cid}` (eg. `"blocklists/certificates"`)
 * and contained only one store with the same name.
 */


function migrationRequired(_x14) {
  return _migrationRequired.apply(this, arguments);
}

function _migrationRequired() {
  _migrationRequired = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee13(dbName) {
    var exists, db, records, timestamp;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            exists = true;
            _context13.next = 3;
            return _open2(dbName, {
              version: 1,
              onupgradeneeded: function onupgradeneeded(event) {
                exists = false;
              }
            });

          case 3:
            db = _context13.sent;
            // Check that the DB we're looking at is really a legacy one,
            // and not some remainder of the open() operation above.
            exists &= db.objectStoreNames.contains("__meta__") && db.objectStoreNames.contains(dbName);

            if (exists) {
              _context13.next = 10;
              break;
            }

            db.close(); // Testing the existence creates it, so delete it :)

            _context13.next = 9;
            return deleteDatabase(dbName);

          case 9:
            return _context13.abrupt("return", null);

          case 10:
            console.warn("".concat(dbName, ": old IndexedDB database found."));
            _context13.prev = 11;
            _context13.next = 14;
            return execute(db, dbName, function (store) {
              store.openCursor().onsuccess = cursorHandlers.all({}, function (res) {
                return records = res;
              });
            });

          case 14:
            console.log("".concat(dbName, ": found ").concat(records.length, " records.")); // Check if there's a entry for this.

            timestamp = null;
            _context13.next = 18;
            return execute(db, "__meta__", function (store) {
              store.get("".concat(dbName, "-lastModified")).onsuccess = function (e) {
                timestamp = e.target.result ? e.target.result.value : null;
              };
            });

          case 18:
            if (timestamp) {
              _context13.next = 21;
              break;
            }

            _context13.next = 21;
            return execute(db, "__meta__", function (store) {
              store.get("lastModified").onsuccess = function (e) {
                timestamp = e.target.result ? e.target.result.value : null;
              };
            });

          case 21:
            console.log("".concat(dbName, ": ").concat(timestamp ? "found" : "no", " timestamp.")); // Those will be inserted in the new database/schema.

            return _context13.abrupt("return", {
              records: records,
              timestamp: timestamp
            });

          case 25:
            _context13.prev = 25;
            _context13.t0 = _context13["catch"](11);
            console.error("Error occured during migration", _context13.t0);
            return _context13.abrupt("return", null);

          case 29:
            _context13.prev = 29;
            db.close();
            return _context13.finish(29);

          case 32:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this, [[11, 25, 29, 32]]);
  }));
  return _migrationRequired.apply(this, arguments);
}

},{"../utils":326,"./base.js":323,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/getPrototypeOf":285,"@babel/runtime/helpers/inherits":286,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/objectWithoutProperties":294,"@babel/runtime/helpers/possibleConstructorReturn":296,"@babel/runtime/helpers/toConsumableArray":300,"@babel/runtime/regenerator":304}],323:[function(require,module,exports){
"use strict";
/**
 * Base db adapter.
 *
 * @abstract
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BaseAdapter =
/*#__PURE__*/
function () {
  function BaseAdapter() {
    (0, _classCallCheck2.default)(this, BaseAdapter);
  }

  (0, _createClass2.default)(BaseAdapter, [{
    key: "clear",

    /**
     * Deletes every records present in the database.
     *
     * @abstract
     * @return {Promise}
     */
    value: function clear() {
      throw new Error("Not Implemented.");
    }
    /**
     * Executes a batch of operations within a single transaction.
     *
     * @abstract
     * @param  {Function} callback The operation callback.
     * @param  {Object}   options  The options object.
     * @return {Promise}
     */

  }, {
    key: "execute",
    value: function execute(callback) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        preload: []
      };
      throw new Error("Not Implemented.");
    }
    /**
     * Retrieve a record by its primary key from the database.
     *
     * @abstract
     * @param  {String} id The record id.
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(id) {
      throw new Error("Not Implemented.");
    }
    /**
     * Lists all records from the database.
     *
     * @abstract
     * @param  {Object} params  The filters and order to apply to the results.
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: {},
        order: ""
      };
      throw new Error("Not Implemented.");
    }
    /**
     * Store the lastModified value.
     *
     * @abstract
     * @param  {Number}  lastModified
     * @return {Promise}
     */

  }, {
    key: "saveLastModified",
    value: function saveLastModified(lastModified) {
      throw new Error("Not Implemented.");
    }
    /**
     * Retrieve saved lastModified value.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "getLastModified",
    value: function getLastModified() {
      throw new Error("Not Implemented.");
    }
    /**
     * Load a dump of records exported from a server.
     *
     * @abstract
     * @param  {Array} records The records to load.
     * @return {Promise}
     */

  }, {
    key: "loadDump",
    value: function loadDump(records) {
      throw new Error("Not Implemented.");
    }
  }]);
  return BaseAdapter;
}();

exports.default = BaseAdapter;

},{"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287}],324:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordsEqual = recordsEqual;
exports.CollectionTransaction = exports.default = exports.SyncResultObject = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _base = _interopRequireDefault(require("./adapters/base"));

var _IDB = _interopRequireDefault(require("./adapters/IDB"));

var _utils = require("./utils");

var _uuid = require("uuid");

var RECORD_FIELDS_TO_CLEAN = ["_status"];
var AVAILABLE_HOOKS = ["incoming-changes"];
/**
 * Compare two records omitting local fields and synchronization
 * attributes (like _status and last_modified)
 * @param {Object} a    A record to compare.
 * @param {Object} b    A record to compare.
 * @param {Array} localFields Additional fields to ignore during the comparison
 * @return {boolean}
 */

function recordsEqual(a, b) {
  var localFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fieldsToClean = RECORD_FIELDS_TO_CLEAN.concat(["last_modified"]).concat(localFields);

  var cleanLocal = function cleanLocal(r) {
    return (0, _utils.omitKeys)(r, fieldsToClean);
  };

  return (0, _utils.deepEqual)(cleanLocal(a), cleanLocal(b));
}
/**
 * Synchronization result object.
 */


var SyncResultObject =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(SyncResultObject, null, [{
    key: "defaults",

    /**
     * Object default values.
     * @type {Object}
     */
    get: function get() {
      return {
        ok: true,
        lastModified: null,
        errors: [],
        created: [],
        updated: [],
        deleted: [],
        published: [],
        conflicts: [],
        skipped: [],
        resolved: []
      };
    }
    /**
     * Public constructor.
     */

  }]);

  function SyncResultObject() {
    (0, _classCallCheck2.default)(this, SyncResultObject);

    /**
     * Current synchronization result status; becomes `false` when conflicts or
     * errors are registered.
     * @type {Boolean}
     */
    this.ok = true;
    Object.assign(this, SyncResultObject.defaults);
  }
  /**
   * Adds entries for a given result type.
   *
   * @param {String} type    The result type.
   * @param {Array}  entries The result entries.
   * @return {SyncResultObject}
   */


  (0, _createClass2.default)(SyncResultObject, [{
    key: "add",
    value: function add(type, entries) {
      if (!Array.isArray(this[type])) {
        return;
      }

      if (!Array.isArray(entries)) {
        entries = [entries];
      } // Deduplicate entries by id. If the values don't have `id` attribute, just
      // keep all.


      var recordsWithoutId = new Set();
      var recordsById = new Map();

      function addOneRecord(record) {
        if (!record.id) {
          recordsWithoutId.add(record);
        } else {
          recordsById.set(record.id, record);
        }
      }

      this[type].forEach(addOneRecord);
      entries.forEach(addOneRecord);
      this[type] = Array.from(recordsById.values()).concat(Array.from(recordsWithoutId));
      this.ok = this.errors.length + this.conflicts.length === 0;
      return this;
    }
    /**
     * Reinitializes result entries for a given result type.
     *
     * @param  {String} type The result type.
     * @return {SyncResultObject}
     */

  }, {
    key: "reset",
    value: function reset(type) {
      this[type] = SyncResultObject.defaults[type];
      this.ok = this.errors.length + this.conflicts.length === 0;
      return this;
    }
  }]);
  return SyncResultObject;
}();

exports.SyncResultObject = SyncResultObject;

function createUUIDSchema() {
  return {
    generate: function generate() {
      return (0, _uuid.v4)();
    },
    validate: function validate(id) {
      return typeof id == "string" && _utils.RE_RECORD_ID.test(id);
    }
  };
}

function markStatus(record, status) {
  return (0, _objectSpread2.default)({}, record, {
    _status: status
  });
}

function markDeleted(record) {
  return markStatus(record, "deleted");
}

function markSynced(record) {
  return markStatus(record, "synced");
}
/**
 * Import a remote change into the local database.
 *
 * @param  {IDBTransactionProxy} transaction The transaction handler.
 * @param  {Object}              remote      The remote change object to import.
 * @param  {Array<String>}       localFields The list of fields that remain local.
 * @return {Object}
 */


function importChange(transaction, remote, localFields) {
  var local = transaction.get(remote.id);

  if (!local) {
    // Not found locally but remote change is marked as deleted; skip to
    // avoid recreation.
    if (remote.deleted) {
      return {
        type: "skipped",
        data: remote
      };
    }

    var _synced = markSynced(remote);

    transaction.create(_synced);
    return {
      type: "created",
      data: _synced
    };
  } // Compare local and remote, ignoring local fields.


  var isIdentical = recordsEqual(local, remote, localFields); // Apply remote changes on local record.

  var synced = (0, _objectSpread2.default)({}, local, markSynced(remote)); // Detect or ignore conflicts if record has also been modified locally.

  if (local._status !== "synced") {
    // Locally deleted, unsynced: scheduled for remote deletion.
    if (local._status === "deleted") {
      return {
        type: "skipped",
        data: local
      };
    }

    if (isIdentical) {
      // If records are identical, import anyway, so we bump the
      // local last_modified value from the server and set record
      // status to "synced".
      transaction.update(synced);
      return {
        type: "updated",
        data: {
          old: local,
          new: synced
        }
      };
    }

    if (local.last_modified !== undefined && local.last_modified === remote.last_modified) {
      // If our local version has the same last_modified as the remote
      // one, this represents an object that corresponds to a resolved
      // conflict. Our local version represents the final output, so
      // we keep that one. (No transaction operation to do.)
      // But if our last_modified is undefined,
      // that means we've created the same object locally as one on
      // the server, which *must* be a conflict.
      return {
        type: "void"
      };
    }

    return {
      type: "conflicts",
      data: {
        type: "incoming",
        local: local,
        remote: remote
      }
    };
  } // Local record was synced.


  if (remote.deleted) {
    transaction.delete(remote.id);
    return {
      type: "deleted",
      data: local
    };
  } // Import locally.


  transaction.update(synced); // if identical, simply exclude it from all SyncResultObject lists

  var type = isIdentical ? "void" : "updated";
  return {
    type: type,
    data: {
      old: local,
      new: synced
    }
  };
}
/**
 * Abstracts a collection of records stored in the local database, providing
 * CRUD operations and synchronization helpers.
 */


var Collection =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   *
   * Options:
   * - `{BaseAdapter} adapter` The DB adapter (default: `IDB`)
   *
   * @param  {String} bucket  The bucket identifier.
   * @param  {String} name    The collection name.
   * @param  {Api}    api     The Api instance.
   * @param  {Object} options The options object.
   */
  function Collection(bucket, name, api) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2.default)(this, Collection);
    this._bucket = bucket;
    this._name = name;
    this._lastModified = null;
    var DBAdapter = options.adapter || _IDB.default;

    if (!DBAdapter) {
      throw new Error("No adapter provided");
    }

    var db = new DBAdapter("".concat(bucket, "/").concat(name), options.adapterOptions);

    if (!(db instanceof _base.default)) {
      throw new Error("Unsupported adapter.");
    } // public properties

    /**
     * The db adapter instance
     * @type {BaseAdapter}
     */


    this.db = db;
    /**
     * The Api instance.
     * @type {KintoClient}
     */

    this.api = api;
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */

    this.events = options.events;
    /**
     * The IdSchema instance.
     * @type {Object}
     */

    this.idSchema = this._validateIdSchema(options.idSchema);
    /**
     * The list of remote transformers.
     * @type {Array}
     */

    this.remoteTransformers = this._validateRemoteTransformers(options.remoteTransformers);
    /**
     * The list of hooks.
     * @type {Object}
     */

    this.hooks = this._validateHooks(options.hooks);
    /**
     * The list of fields names that will remain local.
     * @type {Array}
     */

    this.localFields = options.localFields || [];
  }
  /**
   * The collection name.
   * @type {String}
   */


  (0, _createClass2.default)(Collection, [{
    key: "_validateIdSchema",

    /**
     * Validates an idSchema.
     *
     * @param  {Object|undefined} idSchema
     * @return {Object}
     */
    value: function _validateIdSchema(idSchema) {
      if (typeof idSchema === "undefined") {
        return createUUIDSchema();
      }

      if ((0, _typeof2.default)(idSchema) !== "object") {
        throw new Error("idSchema must be an object.");
      } else if (typeof idSchema.generate !== "function") {
        throw new Error("idSchema must provide a generate function.");
      } else if (typeof idSchema.validate !== "function") {
        throw new Error("idSchema must provide a validate function.");
      }

      return idSchema;
    }
    /**
     * Validates a list of remote transformers.
     *
     * @param  {Array|undefined} remoteTransformers
     * @return {Array}
     */

  }, {
    key: "_validateRemoteTransformers",
    value: function _validateRemoteTransformers(remoteTransformers) {
      if (typeof remoteTransformers === "undefined") {
        return [];
      }

      if (!Array.isArray(remoteTransformers)) {
        throw new Error("remoteTransformers should be an array.");
      }

      return remoteTransformers.map(function (transformer) {
        if ((0, _typeof2.default)(transformer) !== "object") {
          throw new Error("A transformer must be an object.");
        } else if (typeof transformer.encode !== "function") {
          throw new Error("A transformer must provide an encode function.");
        } else if (typeof transformer.decode !== "function") {
          throw new Error("A transformer must provide a decode function.");
        }

        return transformer;
      });
    }
    /**
     * Validate the passed hook is correct.
     *
     * @param {Array|undefined} hook.
     * @return {Array}
     **/

  }, {
    key: "_validateHook",
    value: function _validateHook(hook) {
      if (!Array.isArray(hook)) {
        throw new Error("A hook definition should be an array of functions.");
      }

      return hook.map(function (fn) {
        if (typeof fn !== "function") {
          throw new Error("A hook definition should be an array of functions.");
        }

        return fn;
      });
    }
    /**
     * Validates a list of hooks.
     *
     * @param  {Object|undefined} hooks
     * @return {Object}
     */

  }, {
    key: "_validateHooks",
    value: function _validateHooks(hooks) {
      if (typeof hooks === "undefined") {
        return {};
      }

      if (Array.isArray(hooks)) {
        throw new Error("hooks should be an object, not an array.");
      }

      if ((0, _typeof2.default)(hooks) !== "object") {
        throw new Error("hooks should be an object.");
      }

      var validatedHooks = {};

      for (var hook in hooks) {
        if (!AVAILABLE_HOOKS.includes(hook)) {
          throw new Error("The hook should be one of " + AVAILABLE_HOOKS.join(", "));
        }

        validatedHooks[hook] = this._validateHook(hooks[hook]);
      }

      return validatedHooks;
    }
    /**
     * Deletes every records in the current collection and marks the collection as
     * never synced.
     *
     * @return {Promise}
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.clear();

              case 2:
                _context.next = 4;
                return this.db.saveLastModified(null);

              case 4:
                return _context.abrupt("return", {
                  data: [],
                  permissions: {}
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function clear() {
        return _clear.apply(this, arguments);
      };
    }()
    /**
     * Encodes a record.
     *
     * @param  {String} type   Either "remote" or "local".
     * @param  {Object} record The record object to encode.
     * @return {Promise}
     */

  }, {
    key: "_encodeRecord",
    value: function _encodeRecord(type, record) {
      if (!this["".concat(type, "Transformers")].length) {
        return Promise.resolve(record);
      }

      return (0, _utils.waterfall)(this["".concat(type, "Transformers")].map(function (transformer) {
        return function (record) {
          return transformer.encode(record);
        };
      }), record);
    }
    /**
     * Decodes a record.
     *
     * @param  {String} type   Either "remote" or "local".
     * @param  {Object} record The record object to decode.
     * @return {Promise}
     */

  }, {
    key: "_decodeRecord",
    value: function _decodeRecord(type, record) {
      if (!this["".concat(type, "Transformers")].length) {
        return Promise.resolve(record);
      }

      return (0, _utils.waterfall)(this["".concat(type, "Transformers")].reverse().map(function (transformer) {
        return function (record) {
          return transformer.decode(record);
        };
      }), record);
    }
    /**
     * Adds a record to the local database, asserting that none
     * already exist with this ID.
     *
     * Note: If either the `useRecordId` or `synced` options are true, then the
     * record object must contain the id field to be validated. If none of these
     * options are true, an id is generated using the current IdSchema; in this
     * case, the record passed must not have an id.
     *
     * Options:
     * - {Boolean} synced       Sets record status to "synced" (default: `false`).
     * - {Boolean} useRecordId  Forces the `id` field from the record to be used,
     *                          instead of one that is generated automatically
     *                          (default: `false`).
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "create",
    value: function create(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        useRecordId: false,
        synced: false
      };

      // Validate the record and its ID (if any), even though this
      // validation is also done in the CollectionTransaction method,
      // because we need to pass the ID to preloadIds.
      var reject = function reject(msg) {
        return Promise.reject(new Error(msg));
      };

      if ((0, _typeof2.default)(record) !== "object") {
        return reject("Record is not an object.");
      }

      if ((options.synced || options.useRecordId) && !record.hasOwnProperty("id")) {
        return reject("Missing required Id; synced and useRecordId options require one");
      }

      if (!options.synced && !options.useRecordId && record.hasOwnProperty("id")) {
        return reject("Extraneous Id; can't create a record having one set.");
      }

      var newRecord = (0, _objectSpread2.default)({}, record, {
        id: options.synced || options.useRecordId ? record.id : this.idSchema.generate(record),
        _status: options.synced ? "synced" : "created"
      });

      if (!this.idSchema.validate(newRecord.id)) {
        return reject("Invalid Id: ".concat(newRecord.id));
      }

      return this.execute(function (txn) {
        return txn.create(newRecord);
      }, {
        preloadIds: [newRecord.id]
      }).catch(function (err) {
        if (options.useRecordId) {
          throw new Error("Couldn't create record. It may have been virtually deleted.");
        }

        throw err;
      });
    }
    /**
     * Like {@link CollectionTransaction#update}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} synced: Sets record status to "synced" (default: false)
     * - {Boolean} patch:  Extends the existing record instead of overwriting it
     *   (default: false)
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "update",
    value: function update(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        synced: false,
        patch: false
      };

      // Validate the record and its ID, even though this validation is
      // also done in the CollectionTransaction method, because we need
      // to pass the ID to preloadIds.
      if ((0, _typeof2.default)(record) !== "object") {
        return Promise.reject(new Error("Record is not an object."));
      }

      if (!record.hasOwnProperty("id")) {
        return Promise.reject(new Error("Cannot update a record missing id."));
      }

      if (!this.idSchema.validate(record.id)) {
        return Promise.reject(new Error("Invalid Id: ".concat(record.id)));
      }

      return this.execute(function (txn) {
        return txn.update(record, options);
      }, {
        preloadIds: [record.id]
      });
    }
    /**
     * Like {@link CollectionTransaction#upsert}, but wrapped in its own transaction.
     *
     * @param  {Object} record
     * @return {Promise}
     */

  }, {
    key: "upsert",
    value: function upsert(record) {
      // Validate the record and its ID, even though this validation is
      // also done in the CollectionTransaction method, because we need
      // to pass the ID to preloadIds.
      if ((0, _typeof2.default)(record) !== "object") {
        return Promise.reject(new Error("Record is not an object."));
      }

      if (!record.hasOwnProperty("id")) {
        return Promise.reject(new Error("Cannot update a record missing id."));
      }

      if (!this.idSchema.validate(record.id)) {
        return Promise.reject(new Error("Invalid Id: ".concat(record.id)));
      }

      return this.execute(function (txn) {
        return txn.upsert(record);
      }, {
        preloadIds: [record.id]
      });
    }
    /**
     * Like {@link CollectionTransaction#get}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {String} id
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        includeDeleted: false
      };
      return this.execute(function (txn) {
        return txn.get(id, options);
      }, {
        preloadIds: [id]
      });
    }
    /**
     * Like {@link CollectionTransaction#getAny}, but wrapped in its own transaction.
     *
     * @param  {String} id
     * @return {Promise}
     */

  }, {
    key: "getAny",
    value: function getAny(id) {
      return this.execute(function (txn) {
        return txn.getAny(id);
      }, {
        preloadIds: [id]
      });
    }
    /**
     * Same as {@link Collection#delete}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} virtual: When set to `true`, doesn't actually delete the record,
     *   update its `_status` attribute to `deleted` instead (default: true)
     *
     * @param  {String} id       The record's Id.
     * @param  {Object} options  The options object.
     * @return {Promise}
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        virtual: true
      };
      return this.execute(function (transaction) {
        return transaction.delete(id, options);
      }, {
        preloadIds: [id]
      });
    }
    /**
     * Same as {@link Collection#deleteAll}, but wrapped in its own transaction, execulding the parameter.
     *
     * @return {Promise}
     */

  }, {
    key: "deleteAll",
    value: function () {
      var _deleteAll = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _ref, data, recordIds;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.list({}, {
                  includeDeleted: false
                });

              case 2:
                _ref = _context2.sent;
                data = _ref.data;
                recordIds = data.map(function (record) {
                  return record.id;
                });
                return _context2.abrupt("return", this.execute(function (transaction) {
                  return transaction.deleteAll(recordIds);
                }, {
                  preloadIds: recordIds
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function deleteAll() {
        return _deleteAll.apply(this, arguments);
      };
    }()
    /**
     * The same as {@link CollectionTransaction#deleteAny}, but wrapped
     * in its own transaction.
     *
     * @param  {String} id       The record's Id.
     * @return {Promise}
     */

  }, {
    key: "deleteAny",
    value: function deleteAny(id) {
      return this.execute(function (txn) {
        return txn.deleteAny(id);
      }, {
        preloadIds: [id]
      });
    }
    /**
     * Lists records from the local database.
     *
     * Params:
     * - {Object} filters Filter the results (default: `{}`).
     * - {String} order   The order to apply   (default: `-last_modified`).
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {Object} params  The filters and order to apply to the results.
     * @param  {Object} options The options object.
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var params,
            options,
            results,
            data,
            _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {
                  includeDeleted: false
                };
                params = (0, _objectSpread2.default)({
                  order: "-last_modified",
                  filters: {}
                }, params);
                _context3.next = 5;
                return this.db.list(params);

              case 5:
                results = _context3.sent;
                data = results;

                if (!options.includeDeleted) {
                  data = results.filter(function (record) {
                    return record._status !== "deleted";
                  });
                }

                return _context3.abrupt("return", {
                  data: data,
                  permissions: {}
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function list() {
        return _list.apply(this, arguments);
      };
    }()
    /**
     * Imports remote changes into the local database.
     * This method is in charge of detecting the conflicts, and resolve them
     * according to the specified strategy.
     * @param  {SyncResultObject} syncResultObject The sync result object.
     * @param  {Array}            decodedChanges   The list of changes to import in the local database.
     * @param  {String}           strategy         The {@link Collection.strategy} (default: MANUAL)
     * @return {Promise}
     */

  }, {
    key: "importChanges",
    value: function () {
      var _importChanges = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(syncResultObject, decodedChanges) {
        var _this = this;

        var strategy,
            _ref2,
            imports,
            resolved,
            data,
            _args4 = arguments;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                strategy = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : Collection.strategy.MANUAL;
                _context4.prev = 1;
                _context4.next = 4;
                return this.db.execute(function (transaction) {
                  var imports = decodedChanges.map(function (remote) {
                    // Store remote change into local database.
                    return importChange(transaction, remote, _this.localFields);
                  });
                  var conflicts = imports.filter(function (i) {
                    return i.type === "conflicts";
                  }).map(function (i) {
                    return i.data;
                  });

                  var resolved = _this._handleConflicts(transaction, conflicts, strategy);

                  return {
                    imports: imports,
                    resolved: resolved
                  };
                }, {
                  preload: decodedChanges.map(function (record) {
                    return record.id;
                  })
                });

              case 4:
                _ref2 = _context4.sent;
                imports = _ref2.imports;
                resolved = _ref2.resolved;
                // Lists of created/updated/deleted records
                imports.forEach(function (_ref3) {
                  var type = _ref3.type,
                      data = _ref3.data;
                  return syncResultObject.add(type, data);
                }); // Automatically resolved conflicts (if not manual)

                if (resolved.length > 0) {
                  syncResultObject.reset("conflicts").add("resolved", resolved);
                }

                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                data = {
                  type: "incoming",
                  message: _context4.t0.message,
                  stack: _context4.t0.stack
                }; // XXX one error of the whole transaction instead of per atomic op

                syncResultObject.add("errors", data);

              case 15:
                return _context4.abrupt("return", syncResultObject);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 11]]);
      }));

      return function importChanges(_x, _x2) {
        return _importChanges.apply(this, arguments);
      };
    }()
    /**
     * Imports the responses of pushed changes into the local database.
     * Basically it stores the timestamp assigned by the server into the local
     * database.
     * @param  {SyncResultObject} syncResultObject The sync result object.
     * @param  {Array}            toApplyLocally   The list of changes to import in the local database.
     * @param  {Array}            conflicts        The list of conflicts that have to be resolved.
     * @param  {String}           strategy         The {@link Collection.strategy}.
     * @return {Promise}
     */

  }, {
    key: "_applyPushedResults",
    value: function () {
      var _applyPushedResults2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(syncResultObject, toApplyLocally, conflicts) {
        var _this2 = this;

        var strategy,
            toDeleteLocally,
            toUpdateLocally,
            _ref4,
            published,
            resolved,
            _args5 = arguments;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                strategy = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : Collection.strategy.MANUAL;
                toDeleteLocally = toApplyLocally.filter(function (r) {
                  return r.deleted;
                });
                toUpdateLocally = toApplyLocally.filter(function (r) {
                  return !r.deleted;
                });
                _context5.next = 5;
                return this.db.execute(function (transaction) {
                  var updated = toUpdateLocally.map(function (record) {
                    var synced = markSynced(record);
                    transaction.update(synced);
                    return synced;
                  });
                  var deleted = toDeleteLocally.map(function (record) {
                    transaction.delete(record.id); // Amend result data with the deleted attribute set

                    return {
                      id: record.id,
                      deleted: true
                    };
                  });
                  var published = updated.concat(deleted); // Handle conflicts, if any

                  var resolved = _this2._handleConflicts(transaction, conflicts, strategy);

                  return {
                    published: published,
                    resolved: resolved
                  };
                });

              case 5:
                _ref4 = _context5.sent;
                published = _ref4.published;
                resolved = _ref4.resolved;
                syncResultObject.add("published", published);

                if (resolved.length > 0) {
                  syncResultObject.reset("conflicts").reset("resolved").add("resolved", resolved);
                }

                return _context5.abrupt("return", syncResultObject);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function _applyPushedResults(_x3, _x4, _x5) {
        return _applyPushedResults2.apply(this, arguments);
      };
    }()
    /**
     * Handles synchronization conflicts according to specified strategy.
     *
     * @param  {SyncResultObject} result    The sync result object.
     * @param  {String}           strategy  The {@link Collection.strategy}.
     * @return {Promise<Array<Object>>} The resolved conflicts, as an
     *    array of {accepted, rejected} objects
     */

  }, {
    key: "_handleConflicts",
    value: function _handleConflicts(transaction, conflicts, strategy) {
      var _this3 = this;

      if (strategy === Collection.strategy.MANUAL) {
        return [];
      }

      return conflicts.map(function (conflict) {
        var resolution = strategy === Collection.strategy.CLIENT_WINS ? conflict.local : conflict.remote;
        var rejected = strategy === Collection.strategy.CLIENT_WINS ? conflict.remote : conflict.local;
        var accepted, status, id;

        if (resolution === null) {
          // We "resolved" with the server-side deletion. Delete locally.
          // This only happens during SERVER_WINS because the local
          // version of a record can never be null.
          // We can get "null" from the remote side if we got a conflict
          // and there is no remote version available; see kinto-http.js
          // batch.js:aggregate.
          transaction.delete(conflict.local.id);
          accepted = null; // The record was deleted, but that status is "synced" with
          // the server, so we don't need to push the change.

          status = "synced";
          id = conflict.local.id;
        } else {
          var updated = _this3._resolveRaw(conflict, resolution);

          transaction.update(updated);
          accepted = updated;
          status = updated._status;
          id = updated.id;
        }

        return {
          rejected: rejected,
          accepted: accepted,
          id: id,
          _status: status
        };
      });
    }
    /**
     * Execute a bunch of operations in a transaction.
     *
     * This transaction should be atomic -- either all of its operations
     * will succeed, or none will.
     *
     * The argument to this function is itself a function which will be
     * called with a {@link CollectionTransaction}. Collection methods
     * are available on this transaction, but instead of returning
     * promises, they are synchronous. execute() returns a Promise whose
     * value will be the return value of the provided function.
     *
     * Most operations will require access to the record itself, which
     * must be preloaded by passing its ID in the preloadIds option.
     *
     * Options:
     * - {Array} preloadIds: list of IDs to fetch at the beginning of
     *   the transaction
     *
     * @return {Promise} Resolves with the result of the given function
     *    when the transaction commits.
     */

  }, {
    key: "execute",
    value: function execute(doOperations) {
      var _this4 = this;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$preloadIds = _ref5.preloadIds,
          preloadIds = _ref5$preloadIds === void 0 ? [] : _ref5$preloadIds;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = preloadIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var id = _step.value;

          if (!this.idSchema.validate(id)) {
            return Promise.reject(Error("Invalid Id: ".concat(id)));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this.db.execute(function (transaction) {
        var txn = new CollectionTransaction(_this4, transaction);
        var result = doOperations(txn);
        txn.emitEvents();
        return result;
      }, {
        preload: preloadIds
      });
    }
    /**
     * Resets the local records as if they were never synced; existing records are
     * marked as newly created, deleted records are dropped.
     *
     * A next call to {@link Collection.sync} will thus republish the whole
     * content of the local collection to the server.
     *
     * @return {Promise} Resolves with the number of processed records.
     */

  }, {
    key: "resetSyncStatus",
    value: function () {
      var _resetSyncStatus = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6() {
        var unsynced;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.list({
                  filters: {
                    _status: ["deleted", "synced"]
                  },
                  order: ""
                }, {
                  includeDeleted: true
                });

              case 2:
                unsynced = _context6.sent;
                _context6.next = 5;
                return this.db.execute(function (transaction) {
                  unsynced.data.forEach(function (record) {
                    if (record._status === "deleted") {
                      // Garbage collect deleted records.
                      transaction.delete(record.id);
                    } else {
                      // Records that were synced become «created».
                      transaction.update((0, _objectSpread2.default)({}, record, {
                        last_modified: undefined,
                        _status: "created"
                      }));
                    }
                  });
                });

              case 5:
                this._lastModified = null;
                _context6.next = 8;
                return this.db.saveLastModified(null);

              case 8:
                return _context6.abrupt("return", unsynced.data.length);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function resetSyncStatus() {
        return _resetSyncStatus.apply(this, arguments);
      };
    }()
    /**
     * Returns an object containing two lists:
     *
     * - `toDelete`: unsynced deleted records we can safely delete;
     * - `toSync`: local updates to send to the server.
     *
     * @return {Promise}
     */

  }, {
    key: "gatherLocalChanges",
    value: function () {
      var _gatherLocalChanges = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7() {
        var unsynced, deleted;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.list({
                  filters: {
                    _status: ["created", "updated"]
                  },
                  order: ""
                });

              case 2:
                unsynced = _context7.sent;
                _context7.next = 5;
                return this.list({
                  filters: {
                    _status: "deleted"
                  },
                  order: ""
                }, {
                  includeDeleted: true
                });

              case 5:
                deleted = _context7.sent;
                _context7.next = 8;
                return Promise.all(unsynced.data.concat(deleted.data).map(this._encodeRecord.bind(this, "remote")));

              case 8:
                return _context7.abrupt("return", _context7.sent);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function gatherLocalChanges() {
        return _gatherLocalChanges.apply(this, arguments);
      };
    }()
    /**
     * Fetch remote changes, import them to the local database, and handle
     * conflicts according to `options.strategy`. Then, updates the passed
     * {@link SyncResultObject} with import results.
     *
     * Options:
     * - {String} strategy: The selected sync strategy.
     * - {String} expectedTimestamp: A timestamp to use as a "cache busting" query parameter.
     * - {Array<String>} exclude: A list of record ids to exclude from pull.
     * - {Object} headers: The HTTP headers to use in the request.
     * - {int} retry: The number of retries to do if the HTTP request fails.
     * - {int} lastModified: The timestamp to use in `?_since` query.
     *
     * @param  {KintoClient.Collection} client           Kinto client Collection instance.
     * @param  {SyncResultObject}       syncResultObject The sync result object.
     * @param  {Object}                 options          The options object.
     * @return {Promise}
     */

  }, {
    key: "pullChanges",
    value: function () {
      var _pullChanges = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(client, syncResultObject) {
        var _this5 = this;

        var options,
            since,
            filters,
            exclude_id,
            _ref6,
            data,
            last_modified,
            unquoted,
            localSynced,
            serverChanged,
            emptyCollection,
            decodedChanges,
            payload,
            afterHooks,
            _args8 = arguments;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};

                if (syncResultObject.ok) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", syncResultObject);

              case 3:
                if (!this.lastModified) {
                  _context8.next = 7;
                  break;
                }

                _context8.t0 = this.lastModified;
                _context8.next = 10;
                break;

              case 7:
                _context8.next = 9;
                return this.db.getLastModified();

              case 9:
                _context8.t0 = _context8.sent;

              case 10:
                since = _context8.t0;
                options = (0, _objectSpread2.default)({
                  strategy: Collection.strategy.MANUAL,
                  lastModified: since,
                  headers: {}
                }, options); // Optionally ignore some records when pulling for changes.
                // (avoid redownloading our own changes on last step of #sync())

                if (options.exclude) {
                  // Limit the list of excluded records to the first 50 records in order
                  // to remain under de-facto URL size limit (~2000 chars).
                  // http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers/417184#417184
                  exclude_id = options.exclude.slice(0, 50).map(function (r) {
                    return r.id;
                  }).join(",");
                  filters = {
                    exclude_id: exclude_id
                  };
                }

                if (options.expectedTimestamp) {
                  filters = (0, _objectSpread2.default)({}, filters, {
                    _expected: options.expectedTimestamp
                  });
                } // First fetch remote changes from the server


                _context8.next = 16;
                return client.listRecords({
                  // Since should be ETag (see https://github.com/Kinto/kinto.js/issues/356)
                  since: options.lastModified ? "".concat(options.lastModified) : undefined,
                  headers: options.headers,
                  retry: options.retry,
                  // Fetch every page by default (FIXME: option to limit pages, see #277)
                  pages: Infinity,
                  filters: filters
                });

              case 16:
                _ref6 = _context8.sent;
                data = _ref6.data;
                last_modified = _ref6.last_modified;
                // last_modified is the ETag header value (string).
                // For retro-compatibility with first kinto.js versions
                // parse it to integer.
                unquoted = last_modified ? parseInt(last_modified, 10) : undefined; // Check if server was flushed.
                // This is relevant for the Kinto demo server
                // (and thus for many new comers).

                localSynced = options.lastModified;
                serverChanged = unquoted > options.lastModified;
                emptyCollection = data.length === 0;

                if (!(!options.exclude && localSynced && serverChanged && emptyCollection)) {
                  _context8.next = 25;
                  break;
                }

                throw Error("Server has been flushed.");

              case 25:
                syncResultObject.lastModified = unquoted; // Decode incoming changes.

                _context8.next = 28;
                return Promise.all(data.map(function (change) {
                  return _this5._decodeRecord("remote", change);
                }));

              case 28:
                decodedChanges = _context8.sent;
                // Hook receives decoded records.
                payload = {
                  lastModified: unquoted,
                  changes: decodedChanges
                };
                _context8.next = 32;
                return this.applyHook("incoming-changes", payload);

              case 32:
                afterHooks = _context8.sent;

                if (!(afterHooks.changes.length > 0)) {
                  _context8.next = 36;
                  break;
                }

                _context8.next = 36;
                return this.importChanges(syncResultObject, afterHooks.changes, options.strategy);

              case 36:
                return _context8.abrupt("return", syncResultObject);

              case 37:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function pullChanges(_x6, _x7) {
        return _pullChanges.apply(this, arguments);
      };
    }()
  }, {
    key: "applyHook",
    value: function applyHook(hookName, payload) {
      var _this6 = this;

      if (typeof this.hooks[hookName] == "undefined") {
        return Promise.resolve(payload);
      }

      return (0, _utils.waterfall)(this.hooks[hookName].map(function (hook) {
        return function (record) {
          var result = hook(payload, _this6);
          var resultThenable = result && typeof result.then === "function";
          var resultChanges = result && result.hasOwnProperty("changes");

          if (!(resultThenable || resultChanges)) {
            throw new Error("Invalid return value for hook: ".concat(JSON.stringify(result), " has no 'then()' or 'changes' properties"));
          }

          return result;
        };
      }), payload);
    }
    /**
     * Publish local changes to the remote server and updates the passed
     * {@link SyncResultObject} with publication results.
     *
     * Options:
     * - {String} strategy: The selected sync strategy.
     * - {Object} headers: The HTTP headers to use in the request.
     * - {int} retry: The number of retries to do if the HTTP request fails.
     *
     * @param  {KintoClient.Collection} client           Kinto client Collection instance.
     * @param  {SyncResultObject}       syncResultObject The sync result object.
     * @param  {Object}                 changes          The change object.
     * @param  {Array}                  changes.toDelete The list of records to delete.
     * @param  {Array}                  changes.toSync   The list of records to create/update.
     * @param  {Object}                 options          The options object.
     * @return {Promise}
     */

  }, {
    key: "pushChanges",
    value: function () {
      var _pushChanges = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(client, changes, syncResultObject) {
        var _this7 = this;

        var options,
            safe,
            toDelete,
            toSync,
            synced,
            conflicts,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            _step2$value,
            type,
            local,
            remote,
            safeLocal,
            realLocal,
            realRemote,
            conflict,
            missingRemotely,
            published,
            toApplyLocally,
            decoded,
            _args9 = arguments;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                options = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : {};

                if (syncResultObject.ok) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt("return", syncResultObject);

              case 3:
                safe = !options.strategy || options.strategy !== Collection.CLIENT_WINS;
                toDelete = changes.filter(function (r) {
                  return r._status == "deleted";
                });
                toSync = changes.filter(function (r) {
                  return r._status != "deleted";
                }); // Perform a batch request with every changes.

                _context9.next = 8;
                return client.batch(function (batch) {
                  toDelete.forEach(function (r) {
                    // never published locally deleted records should not be pusblished
                    if (r.last_modified) {
                      batch.deleteRecord(r);
                    }
                  });
                  toSync.forEach(function (r) {
                    // Clean local fields (like _status) before sending to server.
                    var published = _this7.cleanLocalFields(r);

                    if (r._status === "created") {
                      batch.createRecord(published);
                    } else {
                      batch.updateRecord(published);
                    }
                  });
                }, {
                  headers: options.headers,
                  retry: options.retry,
                  safe: safe,
                  aggregate: true
                });

              case 8:
                synced = _context9.sent;
                // Store outgoing errors into sync result object
                syncResultObject.add("errors", synced.errors.map(function (e) {
                  return (0, _objectSpread2.default)({}, e, {
                    type: "outgoing"
                  });
                })); // Store outgoing conflicts into sync result object

                conflicts = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context9.prev = 14;
                _iterator2 = synced.conflicts[Symbol.iterator]();

              case 16:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context9.next = 33;
                  break;
                }

                _step2$value = _step2.value, type = _step2$value.type, local = _step2$value.local, remote = _step2$value.remote;
                // Note: we ensure that local data are actually available, as they may
                // be missing in the case of a published deletion.
                safeLocal = local && local.data || {
                  id: remote.id
                };
                _context9.next = 21;
                return this._decodeRecord("remote", safeLocal);

              case 21:
                realLocal = _context9.sent;
                _context9.t0 = remote;

                if (!_context9.t0) {
                  _context9.next = 27;
                  break;
                }

                _context9.next = 26;
                return this._decodeRecord("remote", remote);

              case 26:
                _context9.t0 = _context9.sent;

              case 27:
                realRemote = _context9.t0;
                conflict = {
                  type: type,
                  local: realLocal,
                  remote: realRemote
                };
                conflicts.push(conflict);

              case 30:
                _iteratorNormalCompletion2 = true;
                _context9.next = 16;
                break;

              case 33:
                _context9.next = 39;
                break;

              case 35:
                _context9.prev = 35;
                _context9.t1 = _context9["catch"](14);
                _didIteratorError2 = true;
                _iteratorError2 = _context9.t1;

              case 39:
                _context9.prev = 39;
                _context9.prev = 40;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 42:
                _context9.prev = 42;

                if (!_didIteratorError2) {
                  _context9.next = 45;
                  break;
                }

                throw _iteratorError2;

              case 45:
                return _context9.finish(42);

              case 46:
                return _context9.finish(39);

              case 47:
                syncResultObject.add("conflicts", conflicts); // Records that must be deleted are either deletions that were pushed
                // to server (published) or deleted records that were never pushed (skipped).

                missingRemotely = synced.skipped.map(function (r) {
                  return (0, _objectSpread2.default)({}, r, {
                    deleted: true
                  });
                }); // For created and updated records, the last_modified coming from server
                // will be stored locally.
                // Reflect publication results locally using the response from
                // the batch request.

                published = synced.published.map(function (c) {
                  return c.data;
                });
                toApplyLocally = published.concat(missingRemotely); // Apply the decode transformers, if any

                _context9.next = 53;
                return Promise.all(toApplyLocally.map(function (record) {
                  return _this7._decodeRecord("remote", record);
                }));

              case 53:
                decoded = _context9.sent;

                if (!(decoded.length > 0 || conflicts.length > 0)) {
                  _context9.next = 57;
                  break;
                }

                _context9.next = 57;
                return this._applyPushedResults(syncResultObject, decoded, conflicts, options.strategy);

              case 57:
                return _context9.abrupt("return", syncResultObject);

              case 58:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[14, 35, 39, 47], [40,, 42, 46]]);
      }));

      return function pushChanges(_x8, _x9, _x10) {
        return _pushChanges.apply(this, arguments);
      };
    }()
    /**
     * Return a copy of the specified record without the local fields.
     *
     * @param  {Object} record  A record with potential local fields.
     * @return {Object}
     */

  }, {
    key: "cleanLocalFields",
    value: function cleanLocalFields(record) {
      var localKeys = RECORD_FIELDS_TO_CLEAN.concat(this.localFields);
      return (0, _utils.omitKeys)(record, localKeys);
    }
    /**
     * Resolves a conflict, updating local record according to proposed
     * resolution — keeping remote record `last_modified` value as a reference for
     * further batch sending.
     *
     * @param  {Object} conflict   The conflict object.
     * @param  {Object} resolution The proposed record.
     * @return {Promise}
     */

  }, {
    key: "resolve",
    value: function resolve(conflict, resolution) {
      var _this8 = this;

      return this.db.execute(function (transaction) {
        var updated = _this8._resolveRaw(conflict, resolution);

        transaction.update(updated);
        return {
          data: updated,
          permissions: {}
        };
      });
    }
    /**
     * @private
     */

  }, {
    key: "_resolveRaw",
    value: function _resolveRaw(conflict, resolution) {
      var resolved = (0, _objectSpread2.default)({}, resolution, {
        // Ensure local record has the latest authoritative timestamp
        last_modified: conflict.remote && conflict.remote.last_modified
      }); // If the resolution object is strictly equal to the
      // remote record, then we can mark it as synced locally.
      // Otherwise, mark it as updated (so that the resolution is pushed).

      var synced = (0, _utils.deepEqual)(resolved, conflict.remote);
      return markStatus(resolved, synced ? "synced" : "updated");
    }
    /**
     * Synchronize remote and local data. The promise will resolve with a
     * {@link SyncResultObject}, though will reject:
     *
     * - if the server is currently backed off;
     * - if the server has been detected flushed.
     *
     * Options:
     * - {Object} headers: HTTP headers to attach to outgoing requests.
     * - {String} expectedTimestamp: A timestamp to use as a "cache busting" query parameter.
     * - {Number} retry: Number of retries when server fails to process the request (default: 1).
     * - {Collection.strategy} strategy: See {@link Collection.strategy}.
     * - {Boolean} ignoreBackoff: Force synchronization even if server is currently
     *   backed off.
     * - {String} bucket: The remove bucket id to use (default: null)
     * - {String} collection: The remove collection id to use (default: null)
     * - {String} remote The remote Kinto server endpoint to use (default: null).
     *
     * @param  {Object} options Options.
     * @return {Promise}
     * @throws {Error} If an invalid remote option is passed.
     */

  }, {
    key: "sync",
    value: function () {
      var _sync = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10() {
        var _this9 = this;

        var options,
            previousRemote,
            seconds,
            client,
            result,
            lastModified,
            toSync,
            resolvedUnsynced,
            resolvedEncoded,
            pullOpts,
            _args10 = arguments;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                options = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {
                  strategy: Collection.strategy.MANUAL,
                  headers: {},
                  retry: 1,
                  ignoreBackoff: false,
                  bucket: null,
                  collection: null,
                  remote: null,
                  expectedTimestamp: null
                };
                options = (0, _objectSpread2.default)({}, options, {
                  bucket: options.bucket || this.bucket,
                  collection: options.collection || this.name
                });
                previousRemote = this.api.remote;

                if (options.remote) {
                  // Note: setting the remote ensures it's valid, throws when invalid.
                  this.api.remote = options.remote;
                }

                if (!(!options.ignoreBackoff && this.api.backoff > 0)) {
                  _context10.next = 7;
                  break;
                }

                seconds = Math.ceil(this.api.backoff / 1000);
                return _context10.abrupt("return", Promise.reject(new Error("Server is asking clients to back off; retry in ".concat(seconds, "s or use the ignoreBackoff option."))));

              case 7:
                client = this.api.bucket(options.bucket).collection(options.collection);
                result = new SyncResultObject();
                _context10.prev = 9;
                _context10.next = 12;
                return this.pullChanges(client, result, options);

              case 12:
                lastModified = result.lastModified; // Fetch local changes

                _context10.next = 15;
                return this.gatherLocalChanges();

              case 15:
                toSync = _context10.sent;
                _context10.next = 18;
                return this.pushChanges(client, toSync, result, options);

              case 18:
                // Publish local resolution of push conflicts to server (on CLIENT_WINS)
                resolvedUnsynced = result.resolved.filter(function (r) {
                  return r._status !== "synced";
                });

                if (!(resolvedUnsynced.length > 0)) {
                  _context10.next = 25;
                  break;
                }

                _context10.next = 22;
                return Promise.all(resolvedUnsynced.map(function (resolution) {
                  var record = resolution.accepted;

                  if (record === null) {
                    record = {
                      id: resolution.id,
                      _status: resolution._status
                    };
                  }

                  return _this9._encodeRecord("remote", record);
                }));

              case 22:
                resolvedEncoded = _context10.sent;
                _context10.next = 25;
                return this.pushChanges(client, resolvedEncoded, result, options);

              case 25:
                if (!(result.published.length > 0)) {
                  _context10.next = 29;
                  break;
                }

                // Avoid redownloading our own changes during the last pull.
                pullOpts = (0, _objectSpread2.default)({}, options, {
                  lastModified: lastModified,
                  exclude: result.published
                });
                _context10.next = 29;
                return this.pullChanges(client, result, pullOpts);

              case 29:
                if (!result.ok) {
                  _context10.next = 33;
                  break;
                }

                _context10.next = 32;
                return this.db.saveLastModified(result.lastModified);

              case 32:
                this._lastModified = _context10.sent;

              case 33:
                _context10.next = 39;
                break;

              case 35:
                _context10.prev = 35;
                _context10.t0 = _context10["catch"](9);
                this.events.emit("sync:error", (0, _objectSpread2.default)({}, options, {
                  error: _context10.t0
                }));
                throw _context10.t0;

              case 39:
                _context10.prev = 39;
                // Ensure API default remote is reverted if a custom one's been used
                this.api.remote = previousRemote;
                return _context10.finish(39);

              case 42:
                this.events.emit("sync:success", (0, _objectSpread2.default)({}, options, {
                  result: result
                }));
                return _context10.abrupt("return", result);

              case 44:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[9, 35, 39, 42]]);
      }));

      return function sync() {
        return _sync.apply(this, arguments);
      };
    }()
    /**
     * Load a list of records already synced with the remote server.
     *
     * The local records which are unsynced or whose timestamp is either missing
     * or superior to those being loaded will be ignored.
     *
     * @param  {Array} records The previously exported list of records to load.
     * @return {Promise} with the effectively imported records.
     */

  }, {
    key: "loadDump",
    value: function () {
      var _loadDump = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(records) {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, record, _ref7, data, existingById, newRecords;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (Array.isArray(records)) {
                  _context11.next = 2;
                  break;
                }

                throw new Error("Records is not an array.");

              case 2:
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context11.prev = 5;
                _iterator3 = records[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context11.next = 16;
                  break;
                }

                record = _step3.value;

                if (!(!record.hasOwnProperty("id") || !this.idSchema.validate(record.id))) {
                  _context11.next = 11;
                  break;
                }

                throw new Error("Record has invalid ID: " + JSON.stringify(record));

              case 11:
                if (record.last_modified) {
                  _context11.next = 13;
                  break;
                }

                throw new Error("Record has no last_modified value: " + JSON.stringify(record));

              case 13:
                _iteratorNormalCompletion3 = true;
                _context11.next = 7;
                break;

              case 16:
                _context11.next = 22;
                break;

              case 18:
                _context11.prev = 18;
                _context11.t0 = _context11["catch"](5);
                _didIteratorError3 = true;
                _iteratorError3 = _context11.t0;

              case 22:
                _context11.prev = 22;
                _context11.prev = 23;

                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }

              case 25:
                _context11.prev = 25;

                if (!_didIteratorError3) {
                  _context11.next = 28;
                  break;
                }

                throw _iteratorError3;

              case 28:
                return _context11.finish(25);

              case 29:
                return _context11.finish(22);

              case 30:
                _context11.next = 32;
                return this.list({}, {
                  includeDeleted: true
                });

              case 32:
                _ref7 = _context11.sent;
                data = _ref7.data;
                existingById = data.reduce(function (acc, record) {
                  acc[record.id] = record;
                  return acc;
                }, {});
                newRecords = records.filter(function (record) {
                  var localRecord = existingById[record.id];
                  var shouldKeep = // No local record with this id.
                  localRecord === undefined || // Or local record is synced
                  localRecord._status === "synced" && // And was synced from server
                  localRecord.last_modified !== undefined && // And is older than imported one.
                  record.last_modified > localRecord.last_modified;
                  return shouldKeep;
                });
                _context11.next = 38;
                return this.db.loadDump(newRecords.map(markSynced));

              case 38:
                return _context11.abrupt("return", _context11.sent);

              case 39:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[5, 18, 22, 30], [23,, 25, 29]]);
      }));

      return function loadDump(_x11) {
        return _loadDump.apply(this, arguments);
      };
    }()
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * The bucket name.
     * @type {String}
     */

  }, {
    key: "bucket",
    get: function get() {
      return this._bucket;
    }
    /**
     * The last modified timestamp.
     * @type {Number}
     */

  }, {
    key: "lastModified",
    get: function get() {
      return this._lastModified;
    }
    /**
     * Synchronization strategies. Available strategies are:
     *
     * - `MANUAL`: Conflicts will be reported in a dedicated array.
     * - `SERVER_WINS`: Conflicts are resolved using remote data.
     * - `CLIENT_WINS`: Conflicts are resolved using local data.
     *
     * @type {Object}
     */

  }], [{
    key: "strategy",
    get: function get() {
      return {
        CLIENT_WINS: "client_wins",
        SERVER_WINS: "server_wins",
        MANUAL: "manual"
      };
    }
  }]);
  return Collection;
}();
/**
 * A Collection-oriented wrapper for an adapter's transaction.
 *
 * This defines the high-level functions available on a collection.
 * The collection itself offers functions of the same name. These will
 * perform just one operation in its own transaction.
 */


exports.default = Collection;

var CollectionTransaction =
/*#__PURE__*/
function () {
  function CollectionTransaction(collection, adapterTransaction) {
    (0, _classCallCheck2.default)(this, CollectionTransaction);
    this.collection = collection;
    this.adapterTransaction = adapterTransaction;
    this._events = [];
  }

  (0, _createClass2.default)(CollectionTransaction, [{
    key: "_queueEvent",
    value: function _queueEvent(action, payload) {
      this._events.push({
        action: action,
        payload: payload
      });
    }
    /**
     * Emit queued events, to be called once every transaction operations have
     * been executed successfully.
     */

  }, {
    key: "emitEvents",
    value: function emitEvents() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _step4.value,
              action = _step4$value.action,
              payload = _step4$value.payload;
          this.collection.events.emit(action, payload);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (this._events.length > 0) {
        var targets = this._events.map(function (_ref8) {
          var action = _ref8.action,
              payload = _ref8.payload;
          return (0, _objectSpread2.default)({
            action: action
          }, payload);
        });

        this.collection.events.emit("change", {
          targets: targets
        });
      }

      this._events = [];
    }
    /**
     * Retrieve a record by its id from the local database, or
     * undefined if none exists.
     *
     * This will also return virtually deleted records.
     *
     * @param  {String} id
     * @return {Object}
     */

  }, {
    key: "getAny",
    value: function getAny(id) {
      var record = this.adapterTransaction.get(id);
      return {
        data: record,
        permissions: {}
      };
    }
    /**
     * Retrieve a record by its id from the local database.
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {String} id
     * @param  {Object} options
     * @return {Object}
     */

  }, {
    key: "get",
    value: function get(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        includeDeleted: false
      };
      var res = this.getAny(id);

      if (!res.data || !options.includeDeleted && res.data._status === "deleted") {
        throw new Error("Record with id=".concat(id, " not found."));
      }

      return res;
    }
    /**
     * Deletes a record from the local database.
     *
     * Options:
     * - {Boolean} virtual: When set to `true`, doesn't actually delete the record,
     *   update its `_status` attribute to `deleted` instead (default: true)
     *
     * @param  {String} id       The record's Id.
     * @param  {Object} options  The options object.
     * @return {Object}
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        virtual: true
      };
      // Ensure the record actually exists.
      var existing = this.adapterTransaction.get(id);
      var alreadyDeleted = existing && existing._status == "deleted";

      if (!existing || alreadyDeleted && options.virtual) {
        throw new Error("Record with id=".concat(id, " not found."));
      } // Virtual updates status.


      if (options.virtual) {
        this.adapterTransaction.update(markDeleted(existing));
      } else {
        // Delete for real.
        this.adapterTransaction.delete(id);
      }

      this._queueEvent("delete", {
        data: existing
      });

      return {
        data: existing,
        permissions: {}
      };
    }
    /**
     * Soft delete all records from the local database.
     *
     * @param  {Array} ids        Array of non-deleted Record Ids.
     * @return {Object}
     */

  }, {
    key: "deleteAll",
    value: function deleteAll(ids) {
      var _this10 = this;

      var existingRecords = [];
      ids.forEach(function (id) {
        existingRecords.push(_this10.adapterTransaction.get(id));

        _this10.delete(id);
      });

      this._queueEvent("deleteAll", {
        data: existingRecords
      });

      return {
        data: existingRecords,
        permissions: {}
      };
    }
    /**
     * Deletes a record from the local database, if any exists.
     * Otherwise, do nothing.
     *
     * @param  {String} id       The record's Id.
     * @return {Object}
     */

  }, {
    key: "deleteAny",
    value: function deleteAny(id) {
      var existing = this.adapterTransaction.get(id);

      if (existing) {
        this.adapterTransaction.update(markDeleted(existing));

        this._queueEvent("delete", {
          data: existing
        });
      }

      return {
        data: (0, _objectSpread2.default)({
          id: id
        }, existing),
        deleted: !!existing,
        permissions: {}
      };
    }
    /**
     * Adds a record to the local database, asserting that none
     * already exist with this ID.
     *
     * @param  {Object} record, which must contain an ID
     * @return {Object}
     */

  }, {
    key: "create",
    value: function create(record) {
      if ((0, _typeof2.default)(record) !== "object") {
        throw new Error("Record is not an object.");
      }

      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot create a record missing id");
      }

      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: ".concat(record.id));
      }

      this.adapterTransaction.create(record);

      this._queueEvent("create", {
        data: record
      });

      return {
        data: record,
        permissions: {}
      };
    }
    /**
     * Updates a record from the local database.
     *
     * Options:
     * - {Boolean} synced: Sets record status to "synced" (default: false)
     * - {Boolean} patch:  Extends the existing record instead of overwriting it
     *   (default: false)
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Object}
     */

  }, {
    key: "update",
    value: function update(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        synced: false,
        patch: false
      };

      if ((0, _typeof2.default)(record) !== "object") {
        throw new Error("Record is not an object.");
      }

      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot update a record missing id.");
      }

      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: ".concat(record.id));
      }

      var oldRecord = this.adapterTransaction.get(record.id);

      if (!oldRecord) {
        throw new Error("Record with id=".concat(record.id, " not found."));
      }

      var newRecord = options.patch ? (0, _objectSpread2.default)({}, oldRecord, record) : record;

      var updated = this._updateRaw(oldRecord, newRecord, options);

      this.adapterTransaction.update(updated);

      this._queueEvent("update", {
        data: updated,
        oldRecord: oldRecord
      });

      return {
        data: updated,
        oldRecord: oldRecord,
        permissions: {}
      };
    }
    /**
     * Lower-level primitive for updating a record while respecting
     * _status and last_modified.
     *
     * @param  {Object} oldRecord: the record retrieved from the DB
     * @param  {Object} newRecord: the record to replace it with
     * @return {Object}
     */

  }, {
    key: "_updateRaw",
    value: function _updateRaw(oldRecord, newRecord) {
      var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref9$synced = _ref9.synced,
          synced = _ref9$synced === void 0 ? false : _ref9$synced;

      var updated = (0, _objectSpread2.default)({}, newRecord); // Make sure to never loose the existing timestamp.

      if (oldRecord && oldRecord.last_modified && !updated.last_modified) {
        updated.last_modified = oldRecord.last_modified;
      } // If only local fields have changed, then keep record as synced.
      // If status is created, keep record as created.
      // If status is deleted, mark as updated.


      var isIdentical = oldRecord && recordsEqual(oldRecord, updated, this.localFields);
      var keepSynced = isIdentical && oldRecord._status == "synced";
      var neverSynced = !oldRecord || oldRecord && oldRecord._status == "created";
      var newStatus = keepSynced || synced ? "synced" : neverSynced ? "created" : "updated";
      return markStatus(updated, newStatus);
    }
    /**
     * Upsert a record into the local database.
     *
     * This record must have an ID.
     *
     * If a record with this ID already exists, it will be replaced.
     * Otherwise, this record will be inserted.
     *
     * @param  {Object} record
     * @return {Object}
     */

  }, {
    key: "upsert",
    value: function upsert(record) {
      if ((0, _typeof2.default)(record) !== "object") {
        throw new Error("Record is not an object.");
      }

      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot update a record missing id.");
      }

      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: ".concat(record.id));
      }

      var oldRecord = this.adapterTransaction.get(record.id);

      var updated = this._updateRaw(oldRecord, record);

      this.adapterTransaction.update(updated); // Don't return deleted records -- pretend they are gone

      if (oldRecord && oldRecord._status == "deleted") {
        oldRecord = undefined;
      }

      if (oldRecord) {
        this._queueEvent("update", {
          data: updated,
          oldRecord: oldRecord
        });
      } else {
        this._queueEvent("create", {
          data: updated
        });
      }

      return {
        data: updated,
        oldRecord: oldRecord,
        permissions: {}
      };
    }
  }]);
  return CollectionTransaction;
}();

exports.CollectionTransaction = CollectionTransaction;

},{"./adapters/IDB":322,"./adapters/base":323,"./utils":326,"@babel/runtime/helpers/asyncToGenerator":281,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/typeof":301,"@babel/runtime/regenerator":304,"uuid":316}],325:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _events = require("events");

var _kintoHttp = _interopRequireDefault(require("kinto-http"));

var _base = _interopRequireDefault(require("./adapters/base"));

var _IDB = _interopRequireDefault(require("./adapters/IDB"));

var _KintoBase2 = _interopRequireDefault(require("./KintoBase"));

// babel-polyfill can only be imported once
if (!global._babelPolyfill) {
  require("@babel/polyfill");
}

var Kinto =
/*#__PURE__*/
function (_KintoBase) {
  (0, _inherits2.default)(Kinto, _KintoBase);
  (0, _createClass2.default)(Kinto, null, [{
    key: "adapters",

    /**
     * Provides a public access to the base adapter classes. Users can create
     * a custom DB adapter by extending BaseAdapter.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        BaseAdapter: _base.default,
        IDB: _IDB.default
      };
    }
  }]);

  function Kinto() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Kinto);
    var defaults = {
      adapter: Kinto.adapters.IDB,
      events: new _events.EventEmitter(),
      ApiClass: _kintoHttp.default
    };
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Kinto).call(this, (0, _objectSpread2.default)({}, defaults, options)));
  }

  return Kinto;
}(_KintoBase2.default); // This fixes compatibility with CommonJS required by browserify.
// See http://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default/33683495#33683495


exports.default = Kinto;

if ((typeof module === "undefined" ? "undefined" : (0, _typeof2.default)(module)) === "object") {
  module.exports = Kinto;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./KintoBase":321,"./adapters/IDB":322,"./adapters/base":323,"@babel/polyfill":1,"@babel/runtime/helpers/classCallCheck":282,"@babel/runtime/helpers/createClass":283,"@babel/runtime/helpers/getPrototypeOf":285,"@babel/runtime/helpers/inherits":286,"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/objectSpread":293,"@babel/runtime/helpers/possibleConstructorReturn":296,"@babel/runtime/helpers/typeof":301,"events":305,"kinto-http":313}],326:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortObjects = sortObjects;
exports.filterObject = filterObject;
exports.filterObjects = filterObjects;
exports.waterfall = waterfall;
exports.deepEqual = deepEqual;
exports.omitKeys = omitKeys;
exports.arrayEqual = arrayEqual;
exports.RE_RECORD_ID = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var RE_RECORD_ID = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;
/**
 * Checks if a value is undefined.
 * @param  {Any}  value
 * @return {Boolean}
 */

exports.RE_RECORD_ID = RE_RECORD_ID;

function _isUndefined(value) {
  return typeof value === "undefined";
}
/**
 * Sorts records in a list according to a given ordering.
 *
 * @param  {String} order The ordering, eg. `-last_modified`.
 * @param  {Array}  list  The collection to order.
 * @return {Array}
 */


function sortObjects(order, list) {
  var hasDash = order[0] === "-";
  var field = hasDash ? order.slice(1) : order;
  var direction = hasDash ? -1 : 1;
  return list.slice().sort(function (a, b) {
    if (a[field] && _isUndefined(b[field])) {
      return direction;
    }

    if (b[field] && _isUndefined(a[field])) {
      return -direction;
    }

    if (_isUndefined(a[field]) && _isUndefined(b[field])) {
      return 0;
    }

    return a[field] > b[field] ? direction : -direction;
  });
}
/**
 * Test if a single object matches all given filters.
 *
 * @param  {Object} filters  The filters object.
 * @param  {Object} entry    The object to filter.
 * @return {Boolean}
 */


function filterObject(filters, entry) {
  return Object.keys(filters).every(function (filter) {
    var value = filters[filter];

    if (Array.isArray(value)) {
      return value.some(function (candidate) {
        return candidate === entry[filter];
      });
    }

    return entry[filter] === value;
  });
}
/**
 * Filters records in a list matching all given filters.
 *
 * @param  {Object} filters  The filters object.
 * @param  {Array}  list     The collection to filter.
 * @return {Array}
 */


function filterObjects(filters, list) {
  return list.filter(function (entry) {
    return filterObject(filters, entry);
  });
}
/**
 * Resolves a list of functions sequentially, which can be sync or async; in
 * case of async, functions must return a promise.
 *
 * @param  {Array} fns  The list of functions.
 * @param  {Any}   init The initial value.
 * @return {Promise}
 */


function waterfall(fns, init) {
  if (!fns.length) {
    return Promise.resolve(init);
  }

  return fns.reduce(function (promise, nextFn) {
    return promise.then(nextFn);
  }, Promise.resolve(init));
}
/**
 * Simple deep object comparison function. This only supports comparison of
 * serializable JavaScript objects.
 *
 * @param  {Object} a The source object.
 * @param  {Object} b The compared object.
 * @return {Boolean}
 */


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if ((0, _typeof2.default)(a) !== (0, _typeof2.default)(b)) {
    return false;
  }

  if (!(a && (0, _typeof2.default)(a) == "object") || !(b && (0, _typeof2.default)(b) == "object")) {
    return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (var k in a) {
    if (!deepEqual(a[k], b[k])) {
      return false;
    }
  }

  return true;
}
/**
 * Return an object without the specified keys.
 *
 * @param  {Object} obj        The original object.
 * @param  {Array}  keys       The list of keys to exclude.
 * @return {Object}            A copy without the specified keys.
 */


function omitKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = {};

  for (var k in obj) {
    if (keys.includes(k)) {
      continue;
    }

    result[k] = obj[k];
  }

  return result;
}

function arrayEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (var i = a.length; i--;) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

},{"@babel/runtime/helpers/interopRequireDefault":287,"@babel/runtime/helpers/typeof":301}]},{},[325])(325)
});

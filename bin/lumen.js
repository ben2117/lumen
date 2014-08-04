global.nexus = {};
(function () {
  nexus["lumen/runtime"] = {};
  var nil63 = function (x) {
    return(x === undefined || x === null);
  };
  nexus["lumen/runtime"]["nil?"] = nil63;
  var is63 = function (x) {
    return(!nil63(x));
  };
  nexus["lumen/runtime"]["is?"] = is63;
  var length = function (x) {
    return(x.length || 0);
  };
  nexus["lumen/runtime"].length = length;
  var none63 = function (x) {
    return(length(x) === 0);
  };
  nexus["lumen/runtime"]["none?"] = none63;
  var some63 = function (x) {
    return(length(x) > 0);
  };
  nexus["lumen/runtime"]["some?"] = some63;
  var one63 = function (x) {
    return(length(x) === 1);
  };
  nexus["lumen/runtime"]["one?"] = one63;
  var hd = function (l) {
    return(l[0]);
  };
  nexus["lumen/runtime"].hd = hd;
  var type = function (x) {
    return(typeof(x));
  };
  nexus["lumen/runtime"].type = type;
  var string63 = function (x) {
    return(type(x) === "string");
  };
  nexus["lumen/runtime"]["string?"] = string63;
  var number63 = function (x) {
    return(type(x) === "number");
  };
  nexus["lumen/runtime"]["number?"] = number63;
  var boolean63 = function (x) {
    return(type(x) === "boolean");
  };
  nexus["lumen/runtime"]["boolean?"] = boolean63;
  var function63 = function (x) {
    return(type(x) === "function");
  };
  nexus["lumen/runtime"]["function?"] = function63;
  var composite63 = function (x) {
    return(is63(x) && type(x) === "object");
  };
  nexus["lumen/runtime"]["composite?"] = composite63;
  var atom63 = function (x) {
    return(nil63(x) || !composite63(x));
  };
  nexus["lumen/runtime"]["atom?"] = atom63;
  var table63 = function (x) {
    return(composite63(x) && nil63(hd(x)));
  };
  nexus["lumen/runtime"]["table?"] = table63;
  var list63 = function (x) {
    return(composite63(x) && is63(hd(x)));
  };
  nexus["lumen/runtime"]["list?"] = list63;
  var substring = function (str, from, upto) {
    return(str.substring(from, upto));
  };
  nexus["lumen/runtime"].substring = substring;
  var sub = function (x, from, upto) {
    if (string63(x)) {
      return(substring(x, from || 0, upto));
    } else {
      var l = [];
      var j = 0;
      var _g83;
      if (nil63(from) || from < 0) {
        _g83 = 0;
      } else {
        _g83 = from;
      }
      var i = _g83;
      var n = length(x);
      var _g84;
      if (nil63(upto) || upto > n) {
        _g84 = n;
      } else {
        _g84 = upto;
      }
      var _g27 = _g84;
      while (i < _g27) {
        l[j] = x[i];
        i = i + 1;
        j = j + 1;
      }
      var _g28 = x;
      var k = undefined;
      for (k in _g28) {
        var v = _g28[k];
        var _g29 = parseInt(k);
        var _g85;
        if (isNaN(_g29)) {
          _g85 = k;
        } else {
          _g85 = _g29;
        }
        var _g30 = _g85;
        if (!number63(_g30)) {
          l[_g30] = v;
        }
      }
      return(l);
    }
  };
  nexus["lumen/runtime"].sub = sub;
  var keys = function (x) {
    var t = [];
    var _g31 = x;
    var k = undefined;
    for (k in _g31) {
      var v = _g31[k];
      var _g32 = parseInt(k);
      var _g86;
      if (isNaN(_g32)) {
        _g86 = k;
      } else {
        _g86 = _g32;
      }
      var _g33 = _g86;
      if (!number63(_g33)) {
        t[_g33] = v;
      }
    }
    return(t);
  };
  nexus["lumen/runtime"].keys = keys;
  var inner = function (x) {
    return(sub(x, 1, length(x) - 1));
  };
  nexus["lumen/runtime"].inner = inner;
  var tl = function (l) {
    return(sub(l, 1));
  };
  nexus["lumen/runtime"].tl = tl;
  var char = function (str, n) {
    return(str.charAt(n));
  };
  nexus["lumen/runtime"].char = char;
  var code = function (str, n) {
    return(str.charCodeAt(n));
  };
  nexus["lumen/runtime"].code = code;
  var string_literal63 = function (x) {
    return(string63(x) && char(x, 0) === "\"");
  };
  nexus["lumen/runtime"]["string-literal?"] = string_literal63;
  var id_literal63 = function (x) {
    return(string63(x) && char(x, 0) === "|");
  };
  nexus["lumen/runtime"]["id-literal?"] = id_literal63;
  var add = function (l, x) {
    l.push(x);
    return(undefined);
  };
  nexus["lumen/runtime"].add = add;
  var drop = function (l) {
    return(l.pop());
  };
  nexus["lumen/runtime"].drop = drop;
  var last = function (l) {
    return(l[length(l) - 1]);
  };
  nexus["lumen/runtime"].last = last;
  var reverse = function (l) {
    var l1 = sub(l, length(l));
    var i = length(l) - 1;
    while (i >= 0) {
      add(l1, l[i]);
      i = i - 1;
    }
    return(l1);
  };
  nexus["lumen/runtime"].reverse = reverse;
  var join = function (a, b) {
    if (a && b) {
      var c = [];
      var o = length(a);
      var _g34 = a;
      var k = undefined;
      for (k in _g34) {
        var v = _g34[k];
        var _g35 = parseInt(k);
        var _g87;
        if (isNaN(_g35)) {
          _g87 = k;
        } else {
          _g87 = _g35;
        }
        var _g36 = _g87;
        c[_g36] = v;
      }
      var _g37 = b;
      var k = undefined;
      for (k in _g37) {
        var v = _g37[k];
        var _g38 = parseInt(k);
        var _g88;
        if (isNaN(_g38)) {
          _g88 = k;
        } else {
          _g88 = _g38;
        }
        var _g39 = _g88;
        if (number63(_g39)) {
          _g39 = _g39 + o;
        }
        c[_g39] = v;
      }
      return(c);
    } else {
      return(a || b || []);
    }
  };
  nexus["lumen/runtime"].join = join;
  var reduce = function (f, x) {
    if (none63(x)) {
      return(x);
    } else {
      if (one63(x)) {
        return(hd(x));
      } else {
        return(f(hd(x), reduce(f, tl(x))));
      }
    }
  };
  nexus["lumen/runtime"].reduce = reduce;
  var shift = function (k, n) {
    if (number63(k)) {
      return(k - n);
    } else {
      return(k);
    }
  };
  nexus["lumen/runtime"].shift = shift;
  var keep = function (f, x) {
    var t = [];
    var o = 0;
    var _g40 = x;
    var k = undefined;
    for (k in _g40) {
      var v = _g40[k];
      var _g41 = parseInt(k);
      var _g89;
      if (isNaN(_g41)) {
        _g89 = k;
      } else {
        _g89 = _g41;
      }
      var _g42 = _g89;
      if (f(v)) {
        t[shift(_g42, o)] = v;
      } else {
        o = o + 1;
      }
    }
    return(t);
  };
  nexus["lumen/runtime"].keep = keep;
  var in63 = function (x, t) {
    var _g43 = t;
    var _g19 = undefined;
    for (_g19 in _g43) {
      var y = _g43[_g19];
      var _g44 = parseInt(_g19);
      var _g90;
      if (isNaN(_g44)) {
        _g90 = _g19;
      } else {
        _g90 = _g44;
      }
      var _g45 = _g90;
      if (x === y) {
        return(true);
      }
    }
  };
  nexus["lumen/runtime"]["in?"] = in63;
  var find = function (f, t) {
    var _g46 = t;
    var _g20 = undefined;
    for (_g20 in _g46) {
      var x = _g46[_g20];
      var _g47 = parseInt(_g20);
      var _g91;
      if (isNaN(_g47)) {
        _g91 = _g20;
      } else {
        _g91 = _g47;
      }
      var _g48 = _g91;
      var _g49 = f(x);
      if (_g49) {
        return(_g49);
      }
    }
  };
  nexus["lumen/runtime"].find = find;
  var pair = function (l) {
    var i = 0;
    var l1 = [];
    while (i < length(l)) {
      add(l1, [l[i], l[i + 1]]);
      i = i + 2;
    }
    return(l1);
  };
  nexus["lumen/runtime"].pair = pair;
  var sort = function (l, f) {
    var _g92;
    if (f) {
      _g92 = function (a, b) {
        if (f(a, b)) {
          return(-1);
        } else {
          return(1);
        }
      };
    }
    return(l.sort(_g92));
  };
  nexus["lumen/runtime"].sort = sort;
  var iterate = function (f, count) {
    var i = 0;
    while (i < count) {
      f(i);
      i = i + 1;
    }
  };
  nexus["lumen/runtime"].iterate = iterate;
  var replicate = function (n, x) {
    var l = [];
    iterate(function () {
      return(add(l, x));
    }, n);
    return(l);
  };
  nexus["lumen/runtime"].replicate = replicate;
  var series = function (f, l) {
    return(iterate(function (i) {
      return(f(l[i]));
    }, length(l)));
  };
  nexus["lumen/runtime"].series = series;
  var map = function (f, x) {
    var t = [];
    var o = 0;
    var _g50 = x;
    var k = undefined;
    for (k in _g50) {
      var v = _g50[k];
      var _g51 = parseInt(k);
      var _g93;
      if (isNaN(_g51)) {
        _g93 = k;
      } else {
        _g93 = _g51;
      }
      var _g52 = _g93;
      var y = f(v);
      if (is63(y)) {
        t[shift(_g52, o)] = y;
      } else {
        o = o + 1;
      }
    }
    return(t);
  };
  nexus["lumen/runtime"].map = map;
  var keys63 = function (t) {
    var b = false;
    var _g53 = t;
    var k = undefined;
    for (k in _g53) {
      var _g21 = _g53[k];
      var _g54 = parseInt(k);
      var _g94;
      if (isNaN(_g54)) {
        _g94 = k;
      } else {
        _g94 = _g54;
      }
      var _g55 = _g94;
      if (!number63(_g55)) {
        b = true;
        break;
      }
    }
    return(b);
  };
  nexus["lumen/runtime"]["keys?"] = keys63;
  var empty63 = function (t) {
    var b = true;
    var _g56 = t;
    var _g22 = undefined;
    for (_g22 in _g56) {
      var _g23 = _g56[_g22];
      var _g57 = parseInt(_g22);
      var _g95;
      if (isNaN(_g57)) {
        _g95 = _g22;
      } else {
        _g95 = _g57;
      }
      var _g58 = _g95;
      b = false;
      break;
    }
    return(b);
  };
  nexus["lumen/runtime"]["empty?"] = empty63;
  var stash = function (args) {
    if (keys63(args)) {
      var p = [];
      var _g59 = args;
      var k = undefined;
      for (k in _g59) {
        var v = _g59[k];
        var _g60 = parseInt(k);
        var _g96;
        if (isNaN(_g60)) {
          _g96 = k;
        } else {
          _g96 = _g60;
        }
        var _g61 = _g96;
        if (!number63(_g61)) {
          p[_g61] = v;
        }
      }
      p._stash = true;
      add(args, p);
    }
    return(args);
  };
  nexus["lumen/runtime"].stash = stash;
  var unstash = function (args) {
    if (none63(args)) {
      return([]);
    } else {
      var l = last(args);
      if (table63(l) && l._stash) {
        var args1 = sub(args, 0, length(args) - 1);
        var _g62 = l;
        var k = undefined;
        for (k in _g62) {
          var v = _g62[k];
          var _g63 = parseInt(k);
          var _g97;
          if (isNaN(_g63)) {
            _g97 = k;
          } else {
            _g97 = _g63;
          }
          var _g64 = _g97;
          if (!(_g64 === "_stash")) {
            args1[_g64] = v;
          }
        }
        return(args1);
      } else {
        return(args);
      }
    }
  };
  nexus["lumen/runtime"].unstash = unstash;
  var search = function (str, pattern, start) {
    var i = str.indexOf(pattern, start);
    if (i >= 0) {
      return(i);
    }
  };
  nexus["lumen/runtime"].search = search;
  var split = function (str, sep) {
    if (str === "" || sep === "") {
      return([]);
    } else {
      var strs = [];
      while (true) {
        var i = search(str, sep);
        if (nil63(i)) {
          break;
        } else {
          add(strs, sub(str, 0, i));
          str = sub(str, i + 1);
        }
      }
      add(strs, str);
      return(strs);
    }
  };
  nexus["lumen/runtime"].split = split;
  var cat = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g65 = sub(xs, 0);
    if (none63(_g65)) {
      return("");
    } else {
      return(reduce(function (a, b) {
        return(a + b);
      }, _g65));
    }
  };
  nexus["lumen/runtime"].cat = cat;
  var _43 = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g66 = sub(xs, 0);
    return(reduce(function (a, b) {
      return(a + b);
    }, _g66));
  };
  nexus["lumen/runtime"]["+"] = _43;
  var _ = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g67 = sub(xs, 0);
    return(reduce(function (b, a) {
      return(a - b);
    }, reverse(_g67)));
  };
  nexus["lumen/runtime"]["-"] = _;
  var _42 = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g68 = sub(xs, 0);
    return(reduce(function (a, b) {
      return(a * b);
    }, _g68));
  };
  nexus["lumen/runtime"]["*"] = _42;
  var _47 = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g69 = sub(xs, 0);
    return(reduce(function (b, a) {
      return(a / b);
    }, reverse(_g69)));
  };
  nexus["lumen/runtime"]["/"] = _47;
  var _37 = function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var _g70 = sub(xs, 0);
    return(reduce(function (b, a) {
      return(a % b);
    }, reverse(_g70)));
  };
  nexus["lumen/runtime"]["%"] = _37;
  var _62 = function (a, b) {
    return(a > b);
  };
  nexus["lumen/runtime"][">"] = _62;
  var _60 = function (a, b) {
    return(a < b);
  };
  nexus["lumen/runtime"]["<"] = _60;
  var _61 = function (a, b) {
    return(a === b);
  };
  nexus["lumen/runtime"]["="] = _61;
  var _6261 = function (a, b) {
    return(a >= b);
  };
  nexus["lumen/runtime"][">="] = _6261;
  var _6061 = function (a, b) {
    return(a <= b);
  };
  nexus["lumen/runtime"]["<="] = _6061;
  global.require = require;
  var fs = require("fs");
  nexus["lumen/runtime"].fs = fs;
  var read_file = function (path) {
    return(fs.readFileSync(path, "utf8"));
  };
  nexus["lumen/runtime"]["read-file"] = read_file;
  var write_file = function (path, data) {
    return(fs.writeFileSync(path, data, "utf8"));
  };
  nexus["lumen/runtime"]["write-file"] = write_file;
  print = function (x) {
    return(console.log(x));
  };
  var type = function (x) {
    return(typeof(x));
  };
  nexus["lumen/runtime"].type = type;
  var write = function (x) {
    return(process.stdout.write(x));
  };
  nexus["lumen/runtime"].write = write;
  var exit = function (code) {
    return(process.exit(code));
  };
  nexus["lumen/runtime"].exit = exit;
  var today = function () {
    var pad = function (n) {
      if (n < 10) {
        return("0" + n);
      } else {
        return(string(n));
      }
    };
    var now = new Date();
    return(pad(now.getUTCFullYear()) + "-" + pad(now.getUTCMonth() + 1) + "-" + pad(now.getUTCDate()));
  };
  nexus["lumen/runtime"].today = today;
  var now = function () {
    return(floor(new Date().getTime() / 1000));
  };
  nexus["lumen/runtime"].now = now;
  var number = function (str) {
    var n = parseFloat(str);
    if (!isNaN(n)) {
      return(n);
    }
  };
  nexus["lumen/runtime"].number = number;
  var string = function (x) {
    if (nil63(x)) {
      return("nil");
    } else {
      if (boolean63(x)) {
        if (x) {
          return("true");
        } else {
          return("false");
        }
      } else {
        if (function63(x)) {
          return("#<function>");
        } else {
          if (atom63(x)) {
            return(x + "");
          } else {
            var str = "(";
            var sp = "";
            var xs = [];
            var ks = [];
            var _g71 = x;
            var k = undefined;
            for (k in _g71) {
              var v = _g71[k];
              var _g72 = parseInt(k);
              var _g98;
              if (isNaN(_g72)) {
                _g98 = k;
              } else {
                _g98 = _g72;
              }
              var _g73 = _g98;
              if (number63(_g73)) {
                xs[_g73] = string(v);
              } else {
                add(ks, _g73 + ":");
                add(ks, string(v));
              }
            }
            var _g74 = join(xs, ks);
            var _g24 = undefined;
            for (_g24 in _g74) {
              var v = _g74[_g24];
              var _g75 = parseInt(_g24);
              var _g99;
              if (isNaN(_g75)) {
                _g99 = _g24;
              } else {
                _g99 = _g75;
              }
              var _g76 = _g99;
              str = str + sp + v;
              sp = " ";
            }
            return(str + ")");
          }
        }
      }
    }
  };
  nexus["lumen/runtime"].string = string;
  var space = function (xs) {
    var string = function (x) {
      if (string_literal63(x) || list63(x) && hd(x) === "cat") {
        return(x);
      } else {
        return(["string", x]);
      }
    };
    if (one63(xs)) {
      return(string(hd(xs)));
    } else {
      return(reduce(function (a, b) {
        return(["cat", string(a), "\" \"", string(b)]);
      }, xs));
    }
  };
  nexus["lumen/runtime"].space = space;
  var apply = function (f, args) {
    var _g77 = stash(args);
    return(f.apply(f, _g77));
  };
  nexus["lumen/runtime"].apply = apply;
  var id_count = 0;
  nexus["lumen/runtime"]["id-count"] = id_count;
  var make_id = function () {
    id_count = id_count + 1;
    return("_g" + id_count);
  };
  nexus["lumen/runtime"]["make-id"] = make_id;
  var _37message_handler = function (msg) {
    var i = search(msg, ": ");
    return(sub(msg, i + 2));
  };
  nexus["lumen/runtime"]["%message-handler"] = _37message_handler;
  var toplevel63 = function () {
    return(one63(environment));
  };
  nexus["lumen/runtime"]["toplevel?"] = toplevel63;
  var module_key = function (spec) {
    if (atom63(spec)) {
      return(string(spec));
    } else {
      return(reduce(function (a, b) {
        return(module_key(a) + "/" + module_key(b));
      }, spec));
    }
  };
  nexus["lumen/runtime"]["module-key"] = module_key;
  var module = function (spec) {
    return(modules[module_key(spec)]);
  };
  nexus["lumen/runtime"].module = module;
  var setenv = function (k) {
    var keys = unstash(Array.prototype.slice.call(arguments, 1));
    var _g78 = sub(keys, 0);
    if (string63(k)) {
      var frame = last(environment);
      var x = frame[k] || {};
      var _g79 = _g78;
      var _g81 = undefined;
      for (_g81 in _g79) {
        var v = _g79[_g81];
        var _g80 = parseInt(_g81);
        var _g100;
        if (isNaN(_g80)) {
          _g100 = _g81;
        } else {
          _g100 = _g80;
        }
        var _g82 = _g100;
        x[_g82] = v;
      }
      if (toplevel63()) {
        var m = module(current_module);
        m.export[k] = x;
      }
      frame[k] = x;
    }
  };
  nexus["lumen/runtime"].setenv = setenv;
})();
(function () {
  nexus["lumen/lib"] = {};
  var _g104 = nexus["lumen/runtime"];
  var nil63 = _g104["nil?"];
  var is63 = _g104["is?"];
  var length = _g104.length;
  var none63 = _g104["none?"];
  var some63 = _g104["some?"];
  var one63 = _g104["one?"];
  var hd = _g104.hd;
  var string63 = _g104["string?"];
  var number63 = _g104["number?"];
  var boolean63 = _g104["boolean?"];
  var function63 = _g104["function?"];
  var composite63 = _g104["composite?"];
  var atom63 = _g104["atom?"];
  var table63 = _g104["table?"];
  var list63 = _g104["list?"];
  var substring = _g104.substring;
  var sub = _g104.sub;
  var keys = _g104.keys;
  var inner = _g104.inner;
  var tl = _g104.tl;
  var char = _g104.char;
  var code = _g104.code;
  var string_literal63 = _g104["string-literal?"];
  var id_literal63 = _g104["id-literal?"];
  var add = _g104.add;
  var drop = _g104.drop;
  var last = _g104.last;
  var reverse = _g104.reverse;
  var join = _g104.join;
  var reduce = _g104.reduce;
  var keep = _g104.keep;
  var in63 = _g104["in?"];
  var find = _g104.find;
  var pair = _g104.pair;
  var sort = _g104.sort;
  var iterate = _g104.iterate;
  var replicate = _g104.replicate;
  var series = _g104.series;
  var map = _g104.map;
  var keys63 = _g104["keys?"];
  var empty63 = _g104["empty?"];
  var stash = _g104.stash;
  var unstash = _g104.unstash;
  var search = _g104.search;
  var split = _g104.split;
  var cat = _g104.cat;
  var _43 = _g104["+"];
  var _ = _g104["-"];
  var _42 = _g104["*"];
  var _47 = _g104["/"];
  var _37 = _g104["%"];
  var _62 = _g104[">"];
  var _60 = _g104["<"];
  var _61 = _g104["="];
  var _6261 = _g104[">="];
  var _6061 = _g104["<="];
  var read_file = _g104["read-file"];
  var write_file = _g104["write-file"];
  var write = _g104.write;
  var exit = _g104.exit;
  var today = _g104.today;
  var now = _g104.now;
  var number = _g104.number;
  var string = _g104.string;
  var space = _g104.space;
  var apply = _g104.apply;
  var make_id = _g104["make-id"];
  var _37message_handler = _g104["%message-handler"];
  var toplevel63 = _g104["toplevel?"];
  var module_key = _g104["module-key"];
  var module = _g104.module;
  var setenv = _g104.setenv;
  var getenv = function (k, p) {
    if (string63(k)) {
      var b = find(function (e) {
        return(e[k]);
      }, reverse(environment));
      if (is63(b)) {
        if (p) {
          return(b[p]);
        } else {
          return(b);
        }
      }
    }
  };
  nexus["lumen/lib"].getenv = getenv;
  var macro_function = function (k) {
    return(getenv(k, "macro"));
  };
  nexus["lumen/lib"]["macro-function"] = macro_function;
  var macro63 = function (k) {
    return(is63(macro_function(k)));
  };
  nexus["lumen/lib"]["macro?"] = macro63;
  var special63 = function (k) {
    return(is63(getenv(k, "special")));
  };
  nexus["lumen/lib"]["special?"] = special63;
  var special_form63 = function (form) {
    return(list63(form) && special63(hd(form)));
  };
  nexus["lumen/lib"]["special-form?"] = special_form63;
  var statement63 = function (k) {
    return(special63(k) && getenv(k, "stmt"));
  };
  nexus["lumen/lib"]["statement?"] = statement63;
  var symbol_expansion = function (k) {
    return(getenv(k, "symbol"));
  };
  nexus["lumen/lib"]["symbol-expansion"] = symbol_expansion;
  var symbol63 = function (k) {
    return(is63(symbol_expansion(k)));
  };
  nexus["lumen/lib"]["symbol?"] = symbol63;
  var variable63 = function (k) {
    var b = find(function (frame) {
      return(frame[k] || frame._scope);
    }, reverse(environment));
    return(table63(b) && is63(b.variable));
  };
  nexus["lumen/lib"]["variable?"] = variable63;
  var global63 = function (k) {
    return(getenv(k, "global"));
  };
  nexus["lumen/lib"]["global?"] = global63;
  var bound63 = function (x) {
    return(macro63(x) || special63(x) || symbol63(x) || variable63(x) || global63(x));
  };
  nexus["lumen/lib"]["bound?"] = bound63;
  var escape = function (str) {
    var str1 = "\"";
    var i = 0;
    while (i < length(str)) {
      var c = char(str, i);
      var _g147;
      if (c === "\n") {
        _g147 = "\\n";
      } else {
        var _g148;
        if (c === "\"") {
          _g148 = "\\\"";
        } else {
          var _g149;
          if (c === "\\") {
            _g149 = "\\\\";
          } else {
            _g149 = c;
          }
          _g148 = _g149;
        }
        _g147 = _g148;
      }
      var c1 = _g147;
      str1 = str1 + c1;
      i = i + 1;
    }
    return(str1 + "\"");
  };
  nexus["lumen/lib"].escape = escape;
  var quoted = function (form) {
    if (string63(form)) {
      return(escape(form));
    } else {
      if (atom63(form)) {
        return(form);
      } else {
        return(join(["list"], map(quoted, form)));
      }
    }
  };
  nexus["lumen/lib"].quoted = quoted;
  var literal = function (s) {
    if (string_literal63(s)) {
      return(s);
    } else {
      return(quoted(s));
    }
  };
  nexus["lumen/lib"].literal = literal;
  var stash42 = function (args) {
    if (keys63(args)) {
      var l = ["%object", "\"_stash\"", true];
      var _g107 = args;
      var k = undefined;
      for (k in _g107) {
        var v = _g107[k];
        var _g108 = parseInt(k);
        var _g150;
        if (isNaN(_g108)) {
          _g150 = k;
        } else {
          _g150 = _g108;
        }
        var _g109 = _g150;
        if (!number63(_g109)) {
          add(l, literal(_g109));
          add(l, v);
        }
      }
      return(join(args, [l]));
    } else {
      return(args);
    }
  };
  nexus["lumen/lib"]["stash*"] = stash42;
  var bind = function (lh, rh) {
    if (composite63(lh) && list63(rh)) {
      var id = make_id();
      return(join([[id, rh]], bind(lh, id)));
    } else {
      if (atom63(lh)) {
        return([[lh, rh]]);
      } else {
        var bs = [];
        var _g110 = lh;
        var k = undefined;
        for (k in _g110) {
          var v = _g110[k];
          var _g111 = parseInt(k);
          var _g151;
          if (isNaN(_g111)) {
            _g151 = k;
          } else {
            _g151 = _g111;
          }
          var _g112 = _g151;
          var _g152;
          if (_g112 === "rest" || _g112 === "&") {
            _g152 = ["sub", rh, length(lh)];
          } else {
            _g152 = ["get", rh, ["quote", _g112]];
          }
          var x = _g152;
          var _g153;
          if (v === true) {
            _g153 = _g112;
          } else {
            _g153 = v;
          }
          var _g113 = _g153;
          bs = join(bs, bind(_g113, x));
        }
        return(bs);
      }
    }
  };
  nexus["lumen/lib"].bind = bind;
  var bind42 = function (args, body) {
    var args1 = [];
    var rest = function () {
      if (target === "js") {
        return(["unstash", [["get", ["get", ["get", "Array", ["quote", "prototype"]], ["quote", "slice"]], ["quote", "call"]], "arguments", length(args1)]]);
      } else {
        add(args1, "|...|");
        return(["unstash", ["list", "|...|"]]);
      }
    };
    if (atom63(args)) {
      return([args1, [join(["let", [args, rest()]], body)]]);
    } else {
      var bs = [];
      var k63 = keys63(args);
      var r = make_id();
      var _g114 = args;
      var k = undefined;
      for (k in _g114) {
        var v = _g114[k];
        var _g115 = parseInt(k);
        var _g154;
        if (isNaN(_g115)) {
          _g154 = k;
        } else {
          _g154 = _g115;
        }
        var _g116 = _g154;
        if (number63(_g116)) {
          if (atom63(v)) {
            add(args1, v);
          } else {
            var x = make_id();
            add(args1, x);
            bs = join(bs, [v, x]);
          }
        }
      }
      if (k63) {
        bs = join(bs, [r, rest()]);
        bs = join(bs, [keys(args), r]);
      }
      return([args1, [join(["let", bs], body)]]);
    }
  };
  nexus["lumen/lib"]["bind*"] = bind42;
  var quoting63 = function (depth) {
    return(number63(depth));
  };
  nexus["lumen/lib"]["quoting?"] = quoting63;
  var quasiquoting63 = function (depth) {
    return(quoting63(depth) && depth > 0);
  };
  nexus["lumen/lib"]["quasiquoting?"] = quasiquoting63;
  var can_unquote63 = function (depth) {
    return(quoting63(depth) && depth === 1);
  };
  nexus["lumen/lib"]["can-unquote?"] = can_unquote63;
  var quasisplice63 = function (x, depth) {
    return(list63(x) && can_unquote63(depth) && hd(x) === "unquote-splicing");
  };
  nexus["lumen/lib"]["quasisplice?"] = quasisplice63;
  var macroexpand = function (form) {
    if (symbol63(form)) {
      return(macroexpand(symbol_expansion(form)));
    } else {
      if (atom63(form)) {
        return(form);
      } else {
        var x = hd(form);
        if (x === "%local") {
          var _g101 = form[0];
          var name = form[1];
          var value = form[2];
          return(["%local", name, macroexpand(value)]);
        } else {
          if (x === "%function") {
            var _g102 = form[0];
            var args = form[1];
            var body = sub(form, 2);
            add(environment, {_scope: true});
            var _g119 = args;
            var _g120 = 0;
            while (_g120 < length(_g119)) {
              var _g117 = _g119[_g120];
              setenv(_g117, {_stash: true, variable: true});
              _g120 = _g120 + 1;
            }
            var _g118 = join(["%function", args], macroexpand(body));
            drop(environment);
            return(_g118);
          } else {
            if (x === "%local-function" || x === "%global-function") {
              var _g103 = form[0];
              var _g121 = form[1];
              var _g122 = form[2];
              var _g123 = sub(form, 3);
              add(environment, {_scope: true});
              var _g126 = _g122;
              var _g127 = 0;
              while (_g127 < length(_g126)) {
                var _g124 = _g126[_g127];
                setenv(_g124, {_stash: true, variable: true});
                _g127 = _g127 + 1;
              }
              var _g125 = join([x, _g121, _g122], macroexpand(_g123));
              drop(environment);
              return(_g125);
            } else {
              if (macro63(x)) {
                return(macroexpand(apply(macro_function(x), tl(form))));
              } else {
                return(map(macroexpand, form));
              }
            }
          }
        }
      }
    }
  };
  nexus["lumen/lib"].macroexpand = macroexpand;
  var quasiexpand;
  nexus["lumen/lib"].quasiexpand = quasiexpand;
  var quasiquote_list;
  nexus["lumen/lib"]["quasiquote-list"] = quasiquote_list;
  quasiquote_list = function (form, depth) {
    var xs = [["list"]];
    var _g128 = form;
    var k = undefined;
    for (k in _g128) {
      if (isNaN(parseInt(k))) {
        var v = _g128[k];
        var _g155;
        if (quasisplice63(v, depth)) {
          _g155 = quasiexpand(v[1]);
        } else {
          _g155 = quasiexpand(v, depth);
        }
        var _g129 = _g155;
        last(xs)[k] = _g129;
      }
    }
    var _g130 = form;
    var _g131 = 0;
    while (_g131 < length(_g130)) {
      var x = _g130[_g131];
      if (quasisplice63(x, depth)) {
        var _g132 = quasiexpand(x[1]);
        add(xs, _g132);
        add(xs, ["list"]);
      } else {
        add(last(xs), quasiexpand(x, depth));
      }
      _g131 = _g131 + 1;
    }
    var pruned = keep(function (x) {
      return(length(x) > 1 || !(hd(x) === "list") || keys63(x));
    }, xs);
    return(join(["join*"], pruned));
  };
  nexus["lumen/lib"]["quasiquote-list"] = quasiquote_list;
  quasiexpand = function (form, depth) {
    if (quasiquoting63(depth)) {
      if (atom63(form)) {
        return(["quote", form]);
      } else {
        if (can_unquote63(depth) && hd(form) === "unquote") {
          return(quasiexpand(form[1]));
        } else {
          if (hd(form) === "unquote" || hd(form) === "unquote-splicing") {
            return(quasiquote_list(form, depth - 1));
          } else {
            if (hd(form) === "quasiquote") {
              return(quasiquote_list(form, depth + 1));
            } else {
              return(quasiquote_list(form, depth));
            }
          }
        }
      }
    } else {
      if (atom63(form)) {
        return(form);
      } else {
        if (hd(form) === "quote") {
          return(form);
        } else {
          if (hd(form) === "quasiquote") {
            return(quasiexpand(form[1], 1));
          } else {
            return(map(function (x) {
              return(quasiexpand(x, depth));
            }, form));
          }
        }
      }
    }
  };
  nexus["lumen/lib"].quasiexpand = quasiexpand;
  global.indent_level = 0;
  var indentation = function () {
    return(apply(cat, replicate(indent_level, "  ")));
  };
  nexus["lumen/lib"].indentation = indentation;
  var reserved = {"=": true, "==": true, "+": true, "-": true, "%": true, "*": true, "/": true, "<": true, ">": true, "<=": true, ">=": true, "break": true, "case": true, "catch": true, "continue": true, "debugger": true, "default": true, "delete": true, "do": true, "else": true, "finally": true, "for": true, "function": true, "if": true, "in": true, "instanceof": true, "new": true, "return": true, "switch": true, "this": true, "throw": true, "try": true, "typeof": true, "var": true, "void": true, "with": true, "and": true, "end": true, "repeat": true, "while": true, "false": true, "local": true, "nil": true, "then": true, "not": true, "true": true, "elseif": true, "or": true, "until": true};
  nexus["lumen/lib"].reserved = reserved;
  var reserved63 = function (x) {
    return(reserved[x]);
  };
  nexus["lumen/lib"]["reserved?"] = reserved63;
  var numeric63 = function (n) {
    return(n > 47 && n < 58);
  };
  nexus["lumen/lib"]["numeric?"] = numeric63;
  var valid_code63 = function (n) {
    return(numeric63(n) || n > 64 && n < 91 || n > 96 && n < 123 || n === 95);
  };
  nexus["lumen/lib"]["valid-code?"] = valid_code63;
  var valid_id63 = function (id) {
    if (none63(id) || reserved63(id)) {
      return(false);
    } else {
      var i = 0;
      while (i < length(id)) {
        if (!valid_code63(code(id, i))) {
          return(false);
        }
        i = i + 1;
      }
      return(true);
    }
  };
  nexus["lumen/lib"]["valid-id?"] = valid_id63;
  var id = function (id) {
    var id1 = "";
    var i = 0;
    while (i < length(id)) {
      var c = char(id, i);
      var n = code(c);
      var _g156;
      if (c === "-") {
        _g156 = "_";
      } else {
        var _g157;
        if (valid_code63(n)) {
          _g157 = c;
        } else {
          var _g158;
          if (i === 0) {
            _g158 = "_" + n;
          } else {
            _g158 = n;
          }
          _g157 = _g158;
        }
        _g156 = _g157;
      }
      var c1 = _g156;
      id1 = id1 + c1;
      i = i + 1;
    }
    return(id1);
  };
  nexus["lumen/lib"].id = id;
  var key = function (k) {
    var wrap = function (s) {
      if (target === "lua") {
        return("[" + s + "]");
      } else {
        return(s);
      }
    };
    var i = inner(k);
    if (valid_id63(i)) {
      return(i);
    } else {
      return(wrap(k));
    }
  };
  nexus["lumen/lib"].key = key;
  var imported = function (spec) {
    var _g137 = unstash(Array.prototype.slice.call(arguments, 1));
    var _g138 = _g137.all;
    var m = make_id();
    var k = module_key(spec);
    var imports = [];
    if (nexus[k]) {
      var _g139 = module(spec).export;
      var n = undefined;
      for (n in _g139) {
        if (isNaN(parseInt(n))) {
          var b = _g139[n];
          if (b.variable && (_g138 || b.export)) {
            add(imports, ["%local", n, ["get", m, ["quote", n]]]);
          }
        }
      }
    }
    if (some63(imports)) {
      return(join([["%local", m, ["get", "nexus", ["quote", k]]]], imports));
    }
  };
  nexus["lumen/lib"].imported = imported;
  var link = function (name, form) {
    if (toplevel63()) {
      var k = module_key(current_module);
      return(["do", form, ["set", ["get", ["get", "nexus", ["quote", k]], ["quote", name]], name]]);
    } else {
      return(form);
    }
  };
  nexus["lumen/lib"].link = link;
  var extend = function (t) {
    var xs = unstash(Array.prototype.slice.call(arguments, 1));
    var _g140 = sub(xs, 0);
    return(join(t, _g140));
  };
  nexus["lumen/lib"].extend = extend;
  var exclude = function (t) {
    var keys = unstash(Array.prototype.slice.call(arguments, 1));
    var _g141 = sub(keys, 0);
    var t1 = [];
    var _g142 = t;
    var _g143 = 0;
    while (_g143 < length(_g142)) {
      var x = _g142[_g143];
      add(t1, x);
      _g143 = _g143 + 1;
    }
    var _g144 = t;
    var k = undefined;
    for (k in _g144) {
      if (isNaN(parseInt(k))) {
        var v = _g144[k];
        if (!_g141[k]) {
          t1[k] = v;
        }
      }
    }
    return(t1);
  };
  nexus["lumen/lib"].exclude = exclude;
  var quote_binding = function (b) {
    if (is63(b.symbol)) {
      return(extend(b, {_stash: true, symbol: ["quote", b.symbol]}));
    } else {
      if (b.macro && b.form) {
        return(exclude(extend(b, {_stash: true, macro: b.form}), {_stash: true, form: true}));
      } else {
        if (b.special && b.form) {
          return(exclude(extend(b, {_stash: true, special: b.form}), {_stash: true, form: true}));
        } else {
          if (is63(b.variable)) {
            return(b);
          } else {
            if (is63(b.global)) {
              return(b);
            }
          }
        }
      }
    }
  };
  nexus["lumen/lib"]["quote-binding"] = quote_binding;
  var mapo = function (f, t) {
    var o = [];
    var _g145 = t;
    var k = undefined;
    for (k in _g145) {
      if (isNaN(parseInt(k))) {
        var v = _g145[k];
        var x = f(v);
        if (is63(x)) {
          add(o, literal(k));
          add(o, x);
        }
      }
    }
    return(o);
  };
  nexus["lumen/lib"].mapo = mapo;
  var quote_frame = function (t) {
    return(join(["%object"], mapo(function (b) {
      return(join(["table"], quote_binding(b)));
    }, t)));
  };
  nexus["lumen/lib"]["quote-frame"] = quote_frame;
  var quote_environment = function (env) {
    return(join(["list"], map(quote_frame, env)));
  };
  nexus["lumen/lib"]["quote-environment"] = quote_environment;
  var quote_module = function (m) {
    var _g146 = ["table"];
    _g146.import = quoted(m.import);
    _g146.alias = quoted(m.alias);
    _g146.export = quote_frame(m.export);
    return(_g146);
  };
  nexus["lumen/lib"]["quote-module"] = quote_module;
  var quote_modules = function () {
    return(join(["table"], map(quote_module, modules)));
  };
  nexus["lumen/lib"]["quote-modules"] = quote_modules;
  var initial_environment = function () {
    return([{"define-module": getenv("define-module")}]);
  };
  nexus["lumen/lib"]["initial-environment"] = initial_environment;
})();
(function () {
  nexus["lumen/reader"] = {};
  var _g159 = nexus["lumen/runtime"];
  var nil63 = _g159["nil?"];
  var is63 = _g159["is?"];
  var length = _g159.length;
  var none63 = _g159["none?"];
  var some63 = _g159["some?"];
  var one63 = _g159["one?"];
  var hd = _g159.hd;
  var string63 = _g159["string?"];
  var number63 = _g159["number?"];
  var boolean63 = _g159["boolean?"];
  var function63 = _g159["function?"];
  var composite63 = _g159["composite?"];
  var atom63 = _g159["atom?"];
  var table63 = _g159["table?"];
  var list63 = _g159["list?"];
  var substring = _g159.substring;
  var sub = _g159.sub;
  var keys = _g159.keys;
  var inner = _g159.inner;
  var tl = _g159.tl;
  var char = _g159.char;
  var code = _g159.code;
  var string_literal63 = _g159["string-literal?"];
  var id_literal63 = _g159["id-literal?"];
  var add = _g159.add;
  var drop = _g159.drop;
  var last = _g159.last;
  var reverse = _g159.reverse;
  var join = _g159.join;
  var reduce = _g159.reduce;
  var keep = _g159.keep;
  var in63 = _g159["in?"];
  var find = _g159.find;
  var pair = _g159.pair;
  var sort = _g159.sort;
  var iterate = _g159.iterate;
  var replicate = _g159.replicate;
  var series = _g159.series;
  var map = _g159.map;
  var keys63 = _g159["keys?"];
  var empty63 = _g159["empty?"];
  var stash = _g159.stash;
  var unstash = _g159.unstash;
  var search = _g159.search;
  var split = _g159.split;
  var cat = _g159.cat;
  var _43 = _g159["+"];
  var _ = _g159["-"];
  var _42 = _g159["*"];
  var _47 = _g159["/"];
  var _37 = _g159["%"];
  var _62 = _g159[">"];
  var _60 = _g159["<"];
  var _61 = _g159["="];
  var _6261 = _g159[">="];
  var _6061 = _g159["<="];
  var read_file = _g159["read-file"];
  var write_file = _g159["write-file"];
  var write = _g159.write;
  var exit = _g159.exit;
  var today = _g159.today;
  var now = _g159.now;
  var number = _g159.number;
  var string = _g159.string;
  var space = _g159.space;
  var apply = _g159.apply;
  var make_id = _g159["make-id"];
  var _37message_handler = _g159["%message-handler"];
  var toplevel63 = _g159["toplevel?"];
  var module_key = _g159["module-key"];
  var module = _g159.module;
  var setenv = _g159.setenv;
  var delimiters = {"(": true, ")": true, ";": true, "\n": true};
  nexus["lumen/reader"].delimiters = delimiters;
  var whitespace = {" ": true, "\t": true, "\n": true};
  nexus["lumen/reader"].whitespace = whitespace;
  var make_stream = function (str) {
    return({pos: 0, string: str, len: length(str)});
  };
  nexus["lumen/reader"]["make-stream"] = make_stream;
  var peek_char = function (s) {
    if (s.pos < s.len) {
      return(char(s.string, s.pos));
    }
  };
  nexus["lumen/reader"]["peek-char"] = peek_char;
  var read_char = function (s) {
    var c = peek_char(s);
    if (c) {
      s.pos = s.pos + 1;
      return(c);
    }
  };
  nexus["lumen/reader"]["read-char"] = read_char;
  var skip_non_code = function (s) {
    while (true) {
      var c = peek_char(s);
      if (nil63(c)) {
        break;
      } else {
        if (whitespace[c]) {
          read_char(s);
        } else {
          if (c === ";") {
            while (c && !(c === "\n")) {
              c = read_char(s);
            }
            skip_non_code(s);
          } else {
            break;
          }
        }
      }
    }
  };
  nexus["lumen/reader"]["skip-non-code"] = skip_non_code;
  var read_table = {};
  nexus["lumen/reader"]["read-table"] = read_table;
  var eof = {};
  nexus["lumen/reader"].eof = eof;
  var read = function (s) {
    skip_non_code(s);
    var c = peek_char(s);
    if (is63(c)) {
      return((read_table[c] || read_table[""])(s));
    } else {
      return(eof);
    }
  };
  nexus["lumen/reader"].read = read;
  var read_all = function (s) {
    var l = [];
    while (true) {
      var form = read(s);
      if (form === eof) {
        break;
      }
      add(l, form);
    }
    return(l);
  };
  nexus["lumen/reader"]["read-all"] = read_all;
  var read_from_string = function (str) {
    var x = read(make_stream(str));
    if (x != eof) {
      return(x);
    }
  };
  nexus["lumen/reader"]["read-from-string"] = read_from_string;
  var key63 = function (atom) {
    return(string63(atom) && length(atom) > 1 && char(atom, length(atom) - 1) === ":");
  };
  nexus["lumen/reader"]["key?"] = key63;
  var flag63 = function (atom) {
    return(string63(atom) && length(atom) > 1 && char(atom, 0) === ":");
  };
  nexus["lumen/reader"]["flag?"] = flag63;
  read_table[""] = function (s) {
    var str = "";
    var dot63 = false;
    while (true) {
      var c = peek_char(s);
      if (c && (!whitespace[c] && !delimiters[c])) {
        if (c === ".") {
          dot63 = true;
        }
        str = str + c;
        read_char(s);
      } else {
        break;
      }
    }
    var n = number(str);
    if (is63(n)) {
      return(n);
    } else {
      if (str === "true") {
        return(true);
      } else {
        if (str === "false") {
          return(false);
        } else {
          if (str === "_") {
            return(make_id());
          } else {
            if (dot63 && !one63(str)) {
              return(reduce(function (a, b) {
                return(["get", b, ["quote", a]]);
              }, reverse(split(str, "."))));
            } else {
              return(str);
            }
          }
        }
      }
    }
  };
  read_table["("] = function (s) {
    read_char(s);
    var l = [];
    while (true) {
      skip_non_code(s);
      var c = peek_char(s);
      if (c && !(c === ")")) {
        var x = read(s);
        if (key63(x)) {
          var k = sub(x, 0, length(x) - 1);
          var v = read(s);
          l[k] = v;
        } else {
          if (flag63(x)) {
            l[sub(x, 1)] = true;
          } else {
            add(l, x);
          }
        }
      } else {
        if (c) {
          read_char(s);
          break;
        } else {
          throw new Error("Expected ) at " + s.pos);
        }
      }
    }
    return(l);
  };
  read_table[")"] = function (s) {
    throw new Error("Unexpected ) at " + s.pos);
  };
  read_table["\""] = function (s) {
    read_char(s);
    var str = "\"";
    while (true) {
      var c = peek_char(s);
      if (c && !(c === "\"")) {
        if (c === "\\") {
          str = str + read_char(s);
        }
        str = str + read_char(s);
      } else {
        if (c) {
          read_char(s);
          break;
        } else {
          throw new Error("Expected \" at " + s.pos);
        }
      }
    }
    return(str + "\"");
  };
  read_table["|"] = function (s) {
    read_char(s);
    var str = "|";
    while (true) {
      var c = peek_char(s);
      if (c && !(c === "|")) {
        str = str + read_char(s);
      } else {
        if (c) {
          read_char(s);
          break;
        } else {
          throw new Error("Expected | at " + s.pos);
        }
      }
    }
    return(str + "|");
  };
  read_table["'"] = function (s) {
    read_char(s);
    return(["quote", read(s)]);
  };
  read_table["`"] = function (s) {
    read_char(s);
    return(["quasiquote", read(s)]);
  };
  read_table[","] = function (s) {
    read_char(s);
    if (peek_char(s) === "@") {
      read_char(s);
      return(["unquote-splicing", read(s)]);
    } else {
      return(["unquote", read(s)]);
    }
  };
})();
(function () {
  nexus["lumen/compiler"] = {};
  var _g170 = nexus["lumen/runtime"];
  var nil63 = _g170["nil?"];
  var is63 = _g170["is?"];
  var length = _g170.length;
  var none63 = _g170["none?"];
  var some63 = _g170["some?"];
  var one63 = _g170["one?"];
  var hd = _g170.hd;
  var string63 = _g170["string?"];
  var number63 = _g170["number?"];
  var boolean63 = _g170["boolean?"];
  var function63 = _g170["function?"];
  var composite63 = _g170["composite?"];
  var atom63 = _g170["atom?"];
  var table63 = _g170["table?"];
  var list63 = _g170["list?"];
  var substring = _g170.substring;
  var sub = _g170.sub;
  var keys = _g170.keys;
  var inner = _g170.inner;
  var tl = _g170.tl;
  var char = _g170.char;
  var code = _g170.code;
  var string_literal63 = _g170["string-literal?"];
  var id_literal63 = _g170["id-literal?"];
  var add = _g170.add;
  var drop = _g170.drop;
  var last = _g170.last;
  var reverse = _g170.reverse;
  var join = _g170.join;
  var reduce = _g170.reduce;
  var keep = _g170.keep;
  var in63 = _g170["in?"];
  var find = _g170.find;
  var pair = _g170.pair;
  var sort = _g170.sort;
  var iterate = _g170.iterate;
  var replicate = _g170.replicate;
  var series = _g170.series;
  var map = _g170.map;
  var keys63 = _g170["keys?"];
  var empty63 = _g170["empty?"];
  var stash = _g170.stash;
  var unstash = _g170.unstash;
  var search = _g170.search;
  var split = _g170.split;
  var cat = _g170.cat;
  var _43 = _g170["+"];
  var _ = _g170["-"];
  var _42 = _g170["*"];
  var _47 = _g170["/"];
  var _37 = _g170["%"];
  var _62 = _g170[">"];
  var _60 = _g170["<"];
  var _61 = _g170["="];
  var _6261 = _g170[">="];
  var _6061 = _g170["<="];
  var read_file = _g170["read-file"];
  var write_file = _g170["write-file"];
  var write = _g170.write;
  var exit = _g170.exit;
  var today = _g170.today;
  var now = _g170.now;
  var number = _g170.number;
  var string = _g170.string;
  var space = _g170.space;
  var apply = _g170.apply;
  var make_id = _g170["make-id"];
  var _37message_handler = _g170["%message-handler"];
  var toplevel63 = _g170["toplevel?"];
  var module_key = _g170["module-key"];
  var module = _g170.module;
  var setenv = _g170.setenv;
  var _g173 = nexus["lumen/lib"];
  var getenv = _g173.getenv;
  var macro_function = _g173["macro-function"];
  var macro63 = _g173["macro?"];
  var special63 = _g173["special?"];
  var special_form63 = _g173["special-form?"];
  var statement63 = _g173["statement?"];
  var symbol_expansion = _g173["symbol-expansion"];
  var symbol63 = _g173["symbol?"];
  var variable63 = _g173["variable?"];
  var bound63 = _g173["bound?"];
  var quoted = _g173.quoted;
  var stash42 = _g173["stash*"];
  var bind = _g173.bind;
  var bind42 = _g173["bind*"];
  var quasiexpand = _g173.quasiexpand;
  var macroexpand = _g173.macroexpand;
  var indentation = _g173.indentation;
  var reserved63 = _g173["reserved?"];
  var valid_id63 = _g173["valid-id?"];
  var id = _g173.id;
  var key = _g173.key;
  var imported = _g173.imported;
  var link = _g173.link;
  var mapo = _g173.mapo;
  var quote_environment = _g173["quote-environment"];
  var quote_modules = _g173["quote-modules"];
  var initial_environment = _g173["initial-environment"];
  var _g174 = nexus["lumen/reader"];
  var make_stream = _g174["make-stream"];
  var read_table = _g174["read-table"];
  var read = _g174.read;
  var read_all = _g174["read-all"];
  var read_from_string = _g174["read-from-string"];
  var _g178 = [];
  _g178.js = "!";
  _g178.lua = "not ";
  var _g176 = [];
  var _g179 = [];
  _g179.js = "!";
  _g179.lua = "not ";
  _g176["not"] = _g179;
  var _g181 = [];
  _g181["*"] = true;
  _g181["/"] = true;
  _g181["%"] = true;
  var _g183 = [];
  _g183["+"] = true;
  _g183["-"] = true;
  var _g187 = [];
  _g187.js = "+";
  _g187.lua = "..";
  var _g185 = [];
  var _g188 = [];
  _g188.js = "+";
  _g188.lua = "..";
  _g185.cat = _g188;
  var _g190 = [];
  _g190["<"] = true;
  _g190[">"] = true;
  _g190["<="] = true;
  _g190[">="] = true;
  var _g194 = [];
  _g194.js = "===";
  _g194.lua = "==";
  var _g196 = [];
  _g196.js = "!=";
  _g196.lua = "~=";
  var _g192 = [];
  var _g197 = [];
  _g197.js = "===";
  _g197.lua = "==";
  _g192["="] = _g197;
  var _g198 = [];
  _g198.js = "!=";
  _g198.lua = "~=";
  _g192["~="] = _g198;
  var _g202 = [];
  _g202.js = "&&";
  _g202.lua = "and";
  var _g200 = [];
  var _g203 = [];
  _g203.js = "&&";
  _g203.lua = "and";
  _g200["and"] = _g203;
  var _g207 = [];
  _g207.js = "||";
  _g207.lua = "or";
  var _g205 = [];
  var _g208 = [];
  _g208.js = "||";
  _g208.lua = "or";
  _g205["or"] = _g208;
  var infix = [_g176, _g181, _g183, _g185, _g190, _g192, _g200, _g205];
  nexus["lumen/compiler"].infix = infix;
  var unary63 = function (form) {
    var op = form[0];
    var args = sub(form, 1);
    return(one63(args) && in63(op, ["not", "-"]));
  };
  nexus["lumen/compiler"]["unary?"] = unary63;
  var precedence = function (form) {
    if (list63(form) && !unary63(form)) {
      var _g209 = infix;
      var i = 0;
      while (i < length(_g209)) {
        var level = _g209[i];
        if (level[hd(form)]) {
          return(i);
        }
        i = i + 1;
      }
    }
    return(0);
  };
  nexus["lumen/compiler"].precedence = precedence;
  var getop = function (op) {
    return(find(function (level) {
      var x = level[op];
      if (x === true) {
        return(op);
      } else {
        if (is63(x)) {
          return(x[target]);
        }
      }
    }, infix));
  };
  nexus["lumen/compiler"].getop = getop;
  var infix63 = function (x) {
    return(is63(getop(x)));
  };
  nexus["lumen/compiler"]["infix?"] = infix63;
  var compile;
  nexus["lumen/compiler"].compile = compile;
  var compile_args = function (args) {
    var str = "(";
    var _g210 = args;
    var i = 0;
    while (i < length(_g210)) {
      var arg = _g210[i];
      str = str + compile(arg);
      if (i < length(args) - 1) {
        str = str + ", ";
      }
      i = i + 1;
    }
    return(str + ")");
  };
  nexus["lumen/compiler"]["compile-args"] = compile_args;
  var compile_atom = function (x) {
    if (x === "nil" && target === "lua") {
      return(x);
    } else {
      if (x === "nil") {
        return("undefined");
      } else {
        if (id_literal63(x)) {
          return(inner(x));
        } else {
          if (string_literal63(x)) {
            return(x);
          } else {
            if (string63(x)) {
              return(id(x));
            } else {
              if (boolean63(x)) {
                if (x) {
                  return("true");
                } else {
                  return("false");
                }
              } else {
                if (number63(x)) {
                  return(x + "");
                } else {
                  throw new Error("Cannot compile atom: " + string(x));
                }
              }
            }
          }
        }
      }
    }
  };
  nexus["lumen/compiler"]["compile-atom"] = compile_atom;
  var terminator = function (stmt63) {
    if (!stmt63) {
      return("");
    } else {
      if (target === "js") {
        return(";\n");
      } else {
        return("\n");
      }
    }
  };
  nexus["lumen/compiler"].terminator = terminator;
  var compile_special = function (form, stmt63) {
    var x = form[0];
    var args = sub(form, 1);
    var _g211 = getenv(x);
    var special = _g211.special;
    var stmt = _g211.stmt;
    var self_tr63 = _g211.tr;
    var tr = terminator(stmt63 && !self_tr63);
    return(apply(special, args) + tr);
  };
  nexus["lumen/compiler"]["compile-special"] = compile_special;
  var parenthesize_call63 = function (x) {
    return(list63(x) && (hd(x) === "%function" || precedence(x) > 0));
  };
  nexus["lumen/compiler"]["parenthesize-call?"] = parenthesize_call63;
  var compile_call = function (form) {
    var f = hd(form);
    var f1 = compile(f);
    var args = compile_args(stash42(tl(form)));
    if (parenthesize_call63(f)) {
      return("(" + f1 + ")" + args);
    } else {
      return(f1 + args);
    }
  };
  nexus["lumen/compiler"]["compile-call"] = compile_call;
  var op_delims = function (parent, child) {
    var _g212 = unstash(Array.prototype.slice.call(arguments, 2));
    var right = _g212.right;
    var _g241;
    if (right) {
      _g241 = _6261;
    } else {
      _g241 = _62;
    }
    if (_g241(precedence(child), precedence(parent))) {
      return(["(", ")"]);
    } else {
      return(["", ""]);
    }
  };
  nexus["lumen/compiler"]["op-delims"] = op_delims;
  var compile_infix = function (form) {
    var op = form[0];
    var _g213 = sub(form, 1);
    var a = _g213[0];
    var b = _g213[1];
    var _g214 = op_delims(form, a);
    var ao = _g214[0];
    var ac = _g214[1];
    var _g215 = op_delims(form, b, {_stash: true, right: true});
    var bo = _g215[0];
    var bc = _g215[1];
    var _g216 = compile(a);
    var _g217 = compile(b);
    var _g218 = getop(op);
    if (unary63(form)) {
      return(_g218 + ao + _g216 + ac);
    } else {
      return(ao + _g216 + ac + " " + _g218 + " " + bo + _g217 + bc);
    }
  };
  nexus["lumen/compiler"]["compile-infix"] = compile_infix;
  var compile_function = function (args, body) {
    var _g219 = unstash(Array.prototype.slice.call(arguments, 2));
    var name = _g219.name;
    var prefix = _g219.prefix;
    var _g242;
    if (name) {
      _g242 = compile(name);
    } else {
      _g242 = "";
    }
    var id = _g242;
    var _g220 = prefix || "";
    var _g221 = compile_args(args);
    indent_level = indent_level + 1;
    var _g223 = compile(body, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var _g222 = _g223;
    var ind = indentation();
    var _g243;
    if (target === "js") {
      _g243 = "";
    } else {
      _g243 = "end";
    }
    var tr = _g243;
    if (name) {
      tr = tr + "\n";
    }
    if (target === "js") {
      return("function " + id + _g221 + " {\n" + _g222 + ind + "}" + tr);
    } else {
      return(_g220 + "function " + id + _g221 + "\n" + _g222 + ind + tr);
    }
  };
  nexus["lumen/compiler"]["compile-function"] = compile_function;
  var can_return63 = function (form) {
    return(is63(form) && (atom63(form) || !(hd(form) === "return") && !statement63(hd(form))));
  };
  nexus["lumen/compiler"]["can-return?"] = can_return63;
  compile = function (form) {
    var _g224 = unstash(Array.prototype.slice.call(arguments, 1));
    var stmt = _g224.stmt;
    if (nil63(form)) {
      return("");
    } else {
      if (special_form63(form)) {
        return(compile_special(form, stmt));
      } else {
        var tr = terminator(stmt);
        var _g244;
        if (stmt) {
          _g244 = indentation();
        } else {
          _g244 = "";
        }
        var ind = _g244;
        var _g245;
        if (atom63(form)) {
          _g245 = compile_atom(form);
        } else {
          var _g246;
          if (infix63(hd(form))) {
            _g246 = compile_infix(form);
          } else {
            _g246 = compile_call(form);
          }
          _g245 = _g246;
        }
        var _g225 = _g245;
        return(ind + _g225 + tr);
      }
    }
  };
  nexus["lumen/compiler"].compile = compile;
  var lower;
  nexus["lumen/compiler"].lower = lower;
  var lower_statement = function (form, tail63) {
    var hoist = [];
    var e = lower(form, hoist, true, tail63);
    if (some63(hoist) && is63(e)) {
      return(join(["do"], join(hoist, [e])));
    } else {
      if (is63(e)) {
        return(e);
      } else {
        if (length(hoist) > 1) {
          return(join(["do"], hoist));
        } else {
          return(hd(hoist));
        }
      }
    }
  };
  nexus["lumen/compiler"]["lower-statement"] = lower_statement;
  var lower_body = function (body, tail63) {
    return(lower_statement(join(["do"], body), tail63));
  };
  nexus["lumen/compiler"]["lower-body"] = lower_body;
  var lower_do = function (args, hoist, stmt63, tail63) {
    var _g226 = sub(args, 0, length(args) - 1);
    var _g227 = 0;
    while (_g227 < length(_g226)) {
      var x = _g226[_g227];
      add(hoist, lower(x, hoist, stmt63));
      _g227 = _g227 + 1;
    }
    var e = lower(last(args), hoist, stmt63, tail63);
    if (tail63 && can_return63(e)) {
      return(["return", e]);
    } else {
      return(e);
    }
  };
  nexus["lumen/compiler"]["lower-do"] = lower_do;
  var lower_if = function (args, hoist, stmt63, tail63) {
    var cond = args[0];
    var _g228 = args[1];
    var _g229 = args[2];
    if (stmt63 || tail63) {
      var _g248;
      if (_g229) {
        _g248 = [lower_body([_g229], tail63)];
      }
      return(add(hoist, join(["%if", lower(cond, hoist), lower_body([_g228], tail63)], _g248)));
    } else {
      var e = make_id();
      add(hoist, ["%local", e]);
      var _g247;
      if (_g229) {
        _g247 = [lower(["set", e, _g229])];
      }
      add(hoist, join(["%if", lower(cond, hoist), lower(["set", e, _g228])], _g247));
      return(e);
    }
  };
  nexus["lumen/compiler"]["lower-if"] = lower_if;
  var lower_short = function (x, args, hoist) {
    var a = args[0];
    var b = args[1];
    var hoist1 = [];
    var b1 = lower(b, hoist1);
    if (some63(hoist1)) {
      var id = make_id();
      var _g249;
      if (x === "and") {
        _g249 = ["%if", id, b, id];
      } else {
        _g249 = ["%if", id, id, b];
      }
      return(lower(["do", ["%local", id, a], _g249], hoist));
    } else {
      return([x, lower(a, hoist), b1]);
    }
  };
  nexus["lumen/compiler"]["lower-short"] = lower_short;
  var lower_try = function (args, hoist, tail63) {
    return(add(hoist, ["%try", lower_body(args, tail63)]));
  };
  nexus["lumen/compiler"]["lower-try"] = lower_try;
  var lower_while = function (args, hoist) {
    var c = args[0];
    var body = sub(args, 1);
    return(add(hoist, ["while", lower(c, hoist), lower_body(body)]));
  };
  nexus["lumen/compiler"]["lower-while"] = lower_while;
  var lower_for = function (args, hoist) {
    var t = args[0];
    var k = args[1];
    var body = sub(args, 2);
    return(add(hoist, ["%for", lower(t, hoist), k, lower_body(body)]));
  };
  nexus["lumen/compiler"]["lower-for"] = lower_for;
  var lower_function = function (args) {
    var a = args[0];
    var body = sub(args, 1);
    return(["%function", a, lower_body(body, true)]);
  };
  nexus["lumen/compiler"]["lower-function"] = lower_function;
  var lower_definition = function (kind, args, hoist) {
    var name = args[0];
    var _g230 = args[1];
    var body = sub(args, 2);
    return(add(hoist, [kind, name, _g230, lower_body(body, true)]));
  };
  nexus["lumen/compiler"]["lower-definition"] = lower_definition;
  var lower_call = function (form, hoist) {
    var _g231 = map(function (x) {
      return(lower(x, hoist));
    }, form);
    if (some63(_g231)) {
      return(_g231);
    }
  };
  nexus["lumen/compiler"]["lower-call"] = lower_call;
  var lower_infix63 = function (form) {
    return(infix63(hd(form)) && length(form) > 3);
  };
  nexus["lumen/compiler"]["lower-infix?"] = lower_infix63;
  var lower_infix = function (form, hoist) {
    var x = form[0];
    var args = sub(form, 1);
    return(lower(reduce(function (a, b) {
      return([x, b, a]);
    }, reverse(args)), hoist));
  };
  nexus["lumen/compiler"]["lower-infix"] = lower_infix;
  var lower_special = function (form, hoist) {
    var e = lower_call(form, hoist);
    if (e) {
      return(add(hoist, e));
    }
  };
  nexus["lumen/compiler"]["lower-special"] = lower_special;
  lower = function (form, hoist, stmt63, tail63) {
    if (atom63(form)) {
      return(form);
    } else {
      if (empty63(form)) {
        return(["%array"]);
      } else {
        if (nil63(hoist)) {
          return(lower_statement(form));
        } else {
          if (lower_infix63(form)) {
            return(lower_infix(form, hoist));
          } else {
            var x = form[0];
            var args = sub(form, 1);
            if (x === "do") {
              return(lower_do(args, hoist, stmt63, tail63));
            } else {
              if (x === "%if") {
                return(lower_if(args, hoist, stmt63, tail63));
              } else {
                if (x === "%try") {
                  return(lower_try(args, hoist, tail63));
                } else {
                  if (x === "while") {
                    return(lower_while(args, hoist));
                  } else {
                    if (x === "%for") {
                      return(lower_for(args, hoist));
                    } else {
                      if (x === "%function") {
                        return(lower_function(args));
                      } else {
                        if (in63(x, ["%local-function", "%global-function"])) {
                          return(lower_definition(x, args, hoist));
                        } else {
                          if (in63(x, ["and", "or"])) {
                            return(lower_short(x, args, hoist));
                          } else {
                            if (statement63(x)) {
                              return(lower_special(form, hoist));
                            } else {
                              return(lower_call(form, hoist));
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  nexus["lumen/compiler"].lower = lower;
  var process = function (form) {
    return(lower(macroexpand(form)));
  };
  nexus["lumen/compiler"].process = process;
  global.current_module = undefined;
  var module_path = function (spec) {
    return(module_key(spec) + ".l");
  };
  nexus["lumen/compiler"]["module-path"] = module_path;
  var encapsulate = function (body) {
    return([["%function", [], process(join(["do"], body))]]);
  };
  nexus["lumen/compiler"].encapsulate = encapsulate;
  var compile_file = function (file) {
    var str = read_file(file);
    var body = read_all(make_stream(str));
    var form = encapsulate(body);
    return(compile(form) + ";\n");
  };
  nexus["lumen/compiler"]["compile-file"] = compile_file;
  var run = function (code) {
    return(global.eval(code));
  };
  nexus["lumen/compiler"].run = run;
  var compiling63 = false;
  nexus["lumen/compiler"]["compiling?"] = compiling63;
  var compiler_output = "";
  nexus["lumen/compiler"]["compiler-output"] = compiler_output;
  var conclude = function (code) {
    if (compiling63) {
      compiler_output = compiler_output + code;
    } else {
      return(run(code));
    }
  };
  nexus["lumen/compiler"].conclude = conclude;
  var _37compile_module = function (spec) {
    var path = module_path(spec);
    var mod0 = current_module;
    var env0 = environment;
    current_module = spec;
    environment = initial_environment();
    var code = compile_file(path);
    current_module = mod0;
    environment = env0;
    return(conclude(code));
  };
  nexus["lumen/compiler"]["%compile-module"] = _37compile_module;
  var open_module = function (spec) {
    var _g232 = unstash(Array.prototype.slice.call(arguments, 1));
    var _g233 = _g232.all;
    var m = module(spec);
    var frame = last(environment);
    var _g234 = m.export;
    var k = undefined;
    for (k in _g234) {
      if (isNaN(parseInt(k))) {
        var v = _g234[k];
        if (v.export || _g233) {
          frame[k] = v;
        }
      }
    }
  };
  nexus["lumen/compiler"]["open-module"] = open_module;
  var load_module = function (spec) {
    var _g235 = unstash(Array.prototype.slice.call(arguments, 1));
    var _g236 = _g235.all;
    if (!module(spec)) {
      _37compile_module(spec);
    }
    return(open_module(spec, {_stash: true, all: _g236}));
  };
  nexus["lumen/compiler"]["load-module"] = load_module;
  var in_module = function (spec) {
    load_module(spec, {_stash: true, all: true});
    var m = module(spec);
    series(open_module, m.import);
    current_module = spec;
  };
  nexus["lumen/compiler"]["in-module"] = in_module;
  var import_modules = function (specs) {
    var imports = [];
    var bindings = [];
    var _g237 = specs || [];
    var _g238 = 0;
    while (_g238 < length(_g237)) {
      var spec = _g237[_g238];
      load_module(spec);
      var m = module(spec);
      if (m.alias) {
        var _g239 = import_modules(m.alias);
        var aliased = _g239[0];
        var bs = _g239[1];
        imports = join(imports, aliased);
        bindings = join(bindings, bs);
      } else {
        var _g240 = imported(spec);
        add(imports, spec);
        bindings = join(bindings, _g240);
      }
      _g238 = _g238 + 1;
    }
    return([imports, bindings]);
  };
  nexus["lumen/compiler"]["import-modules"] = import_modules;
  var compile_module = function (spec) {
    compiling63 = true;
    _37compile_module(spec);
    return(compiler_output);
  };
  nexus["lumen/compiler"]["compile-module"] = compile_module;
  var declare = function (form) {
    return(conclude(compile(process(form), {_stash: true, stmt: true})));
  };
  nexus["lumen/compiler"].declare = declare;
  var reimported = function () {
    var imports = [];
    var m = module(current_module);
    series(function (spec) {
      imports = join(imports, imported(spec));
    }, m.import);
    return(join(imports, imported(current_module, {_stash: true, all: true})));
  };
  nexus["lumen/compiler"].reimported = reimported;
  global._37result = undefined;
  var eval = function (form) {
    var previous = target;
    target = "js";
    var body = join(reimported(), [["set", "%result", form]]);
    var code = compile(encapsulate(body));
    target = previous;
    run(code);
    return(_37result);
  };
  nexus["lumen/compiler"].eval = eval;
})();
(function () {
  nexus["lumen/special"] = {};
  var _g250 = nexus["lumen/runtime"];
  var nil63 = _g250["nil?"];
  var is63 = _g250["is?"];
  var length = _g250.length;
  var none63 = _g250["none?"];
  var some63 = _g250["some?"];
  var one63 = _g250["one?"];
  var hd = _g250.hd;
  var string63 = _g250["string?"];
  var number63 = _g250["number?"];
  var boolean63 = _g250["boolean?"];
  var function63 = _g250["function?"];
  var composite63 = _g250["composite?"];
  var atom63 = _g250["atom?"];
  var table63 = _g250["table?"];
  var list63 = _g250["list?"];
  var substring = _g250.substring;
  var sub = _g250.sub;
  var keys = _g250.keys;
  var inner = _g250.inner;
  var tl = _g250.tl;
  var char = _g250.char;
  var code = _g250.code;
  var string_literal63 = _g250["string-literal?"];
  var id_literal63 = _g250["id-literal?"];
  var add = _g250.add;
  var drop = _g250.drop;
  var last = _g250.last;
  var reverse = _g250.reverse;
  var join = _g250.join;
  var reduce = _g250.reduce;
  var keep = _g250.keep;
  var in63 = _g250["in?"];
  var find = _g250.find;
  var pair = _g250.pair;
  var sort = _g250.sort;
  var iterate = _g250.iterate;
  var replicate = _g250.replicate;
  var series = _g250.series;
  var map = _g250.map;
  var keys63 = _g250["keys?"];
  var empty63 = _g250["empty?"];
  var stash = _g250.stash;
  var unstash = _g250.unstash;
  var search = _g250.search;
  var split = _g250.split;
  var cat = _g250.cat;
  var _43 = _g250["+"];
  var _ = _g250["-"];
  var _42 = _g250["*"];
  var _47 = _g250["/"];
  var _37 = _g250["%"];
  var _62 = _g250[">"];
  var _60 = _g250["<"];
  var _61 = _g250["="];
  var _6261 = _g250[">="];
  var _6061 = _g250["<="];
  var read_file = _g250["read-file"];
  var write_file = _g250["write-file"];
  var write = _g250.write;
  var exit = _g250.exit;
  var today = _g250.today;
  var now = _g250.now;
  var number = _g250.number;
  var string = _g250.string;
  var space = _g250.space;
  var apply = _g250.apply;
  var make_id = _g250["make-id"];
  var _37message_handler = _g250["%message-handler"];
  var toplevel63 = _g250["toplevel?"];
  var module_key = _g250["module-key"];
  var module = _g250.module;
  var setenv = _g250.setenv;
  var _g253 = nexus["lumen/lib"];
  var getenv = _g253.getenv;
  var macro_function = _g253["macro-function"];
  var macro63 = _g253["macro?"];
  var special63 = _g253["special?"];
  var special_form63 = _g253["special-form?"];
  var statement63 = _g253["statement?"];
  var symbol_expansion = _g253["symbol-expansion"];
  var symbol63 = _g253["symbol?"];
  var variable63 = _g253["variable?"];
  var bound63 = _g253["bound?"];
  var quoted = _g253.quoted;
  var stash42 = _g253["stash*"];
  var bind = _g253.bind;
  var bind42 = _g253["bind*"];
  var quasiexpand = _g253.quasiexpand;
  var macroexpand = _g253.macroexpand;
  var indentation = _g253.indentation;
  var reserved63 = _g253["reserved?"];
  var valid_id63 = _g253["valid-id?"];
  var id = _g253.id;
  var key = _g253.key;
  var imported = _g253.imported;
  var link = _g253.link;
  var mapo = _g253.mapo;
  var quote_environment = _g253["quote-environment"];
  var quote_modules = _g253["quote-modules"];
  var initial_environment = _g253["initial-environment"];
  var _g254 = nexus["lumen/compiler"];
  var compile_function = _g254["compile-function"];
  var compile = _g254.compile;
  var open_module = _g254["open-module"];
  var load_module = _g254["load-module"];
  var in_module = _g254["in-module"];
  var import_modules = _g254["import-modules"];
  var compile_module = _g254["compile-module"];
  var declare = _g254.declare;
  var eval = _g254.eval;
})();
(function () {
  nexus["lumen/core"] = {};
  var _g428 = nexus["lumen/runtime"];
  var nil63 = _g428["nil?"];
  var is63 = _g428["is?"];
  var length = _g428.length;
  var none63 = _g428["none?"];
  var some63 = _g428["some?"];
  var one63 = _g428["one?"];
  var hd = _g428.hd;
  var string63 = _g428["string?"];
  var number63 = _g428["number?"];
  var boolean63 = _g428["boolean?"];
  var function63 = _g428["function?"];
  var composite63 = _g428["composite?"];
  var atom63 = _g428["atom?"];
  var table63 = _g428["table?"];
  var list63 = _g428["list?"];
  var substring = _g428.substring;
  var sub = _g428.sub;
  var keys = _g428.keys;
  var inner = _g428.inner;
  var tl = _g428.tl;
  var char = _g428.char;
  var code = _g428.code;
  var string_literal63 = _g428["string-literal?"];
  var id_literal63 = _g428["id-literal?"];
  var add = _g428.add;
  var drop = _g428.drop;
  var last = _g428.last;
  var reverse = _g428.reverse;
  var join = _g428.join;
  var reduce = _g428.reduce;
  var keep = _g428.keep;
  var in63 = _g428["in?"];
  var find = _g428.find;
  var pair = _g428.pair;
  var sort = _g428.sort;
  var iterate = _g428.iterate;
  var replicate = _g428.replicate;
  var series = _g428.series;
  var map = _g428.map;
  var keys63 = _g428["keys?"];
  var empty63 = _g428["empty?"];
  var stash = _g428.stash;
  var unstash = _g428.unstash;
  var search = _g428.search;
  var split = _g428.split;
  var cat = _g428.cat;
  var _43 = _g428["+"];
  var _ = _g428["-"];
  var _42 = _g428["*"];
  var _47 = _g428["/"];
  var _37 = _g428["%"];
  var _62 = _g428[">"];
  var _60 = _g428["<"];
  var _61 = _g428["="];
  var _6261 = _g428[">="];
  var _6061 = _g428["<="];
  var read_file = _g428["read-file"];
  var write_file = _g428["write-file"];
  var write = _g428.write;
  var exit = _g428.exit;
  var today = _g428.today;
  var now = _g428.now;
  var number = _g428.number;
  var string = _g428.string;
  var space = _g428.space;
  var apply = _g428.apply;
  var make_id = _g428["make-id"];
  var _37message_handler = _g428["%message-handler"];
  var toplevel63 = _g428["toplevel?"];
  var module_key = _g428["module-key"];
  var module = _g428.module;
  var setenv = _g428.setenv;
  var _g431 = nexus["lumen/lib"];
  var getenv = _g431.getenv;
  var macro_function = _g431["macro-function"];
  var macro63 = _g431["macro?"];
  var special63 = _g431["special?"];
  var special_form63 = _g431["special-form?"];
  var statement63 = _g431["statement?"];
  var symbol_expansion = _g431["symbol-expansion"];
  var symbol63 = _g431["symbol?"];
  var variable63 = _g431["variable?"];
  var bound63 = _g431["bound?"];
  var quoted = _g431.quoted;
  var stash42 = _g431["stash*"];
  var bind = _g431.bind;
  var bind42 = _g431["bind*"];
  var quasiexpand = _g431.quasiexpand;
  var macroexpand = _g431.macroexpand;
  var indentation = _g431.indentation;
  var reserved63 = _g431["reserved?"];
  var valid_id63 = _g431["valid-id?"];
  var id = _g431.id;
  var key = _g431.key;
  var imported = _g431.imported;
  var link = _g431.link;
  var mapo = _g431.mapo;
  var quote_environment = _g431["quote-environment"];
  var quote_modules = _g431["quote-modules"];
  var initial_environment = _g431["initial-environment"];
  var _g432 = nexus["lumen/compiler"];
  var compile_function = _g432["compile-function"];
  var compile = _g432.compile;
  var open_module = _g432["open-module"];
  var load_module = _g432["load-module"];
  var in_module = _g432["in-module"];
  var import_modules = _g432["import-modules"];
  var compile_module = _g432["compile-module"];
  var declare = _g432.declare;
  var eval = _g432.eval;
  global.target = "js";
})();
(function () {
  nexus["lumen/boot"] = {};
  var _g741 = nexus["lumen/runtime"];
  var nil63 = _g741["nil?"];
  var is63 = _g741["is?"];
  var length = _g741.length;
  var none63 = _g741["none?"];
  var some63 = _g741["some?"];
  var one63 = _g741["one?"];
  var hd = _g741.hd;
  var string63 = _g741["string?"];
  var number63 = _g741["number?"];
  var boolean63 = _g741["boolean?"];
  var function63 = _g741["function?"];
  var composite63 = _g741["composite?"];
  var atom63 = _g741["atom?"];
  var table63 = _g741["table?"];
  var list63 = _g741["list?"];
  var substring = _g741.substring;
  var sub = _g741.sub;
  var keys = _g741.keys;
  var inner = _g741.inner;
  var tl = _g741.tl;
  var char = _g741.char;
  var code = _g741.code;
  var string_literal63 = _g741["string-literal?"];
  var id_literal63 = _g741["id-literal?"];
  var add = _g741.add;
  var drop = _g741.drop;
  var last = _g741.last;
  var reverse = _g741.reverse;
  var join = _g741.join;
  var reduce = _g741.reduce;
  var keep = _g741.keep;
  var in63 = _g741["in?"];
  var find = _g741.find;
  var pair = _g741.pair;
  var sort = _g741.sort;
  var iterate = _g741.iterate;
  var replicate = _g741.replicate;
  var series = _g741.series;
  var map = _g741.map;
  var keys63 = _g741["keys?"];
  var empty63 = _g741["empty?"];
  var stash = _g741.stash;
  var unstash = _g741.unstash;
  var search = _g741.search;
  var split = _g741.split;
  var cat = _g741.cat;
  var _43 = _g741["+"];
  var _ = _g741["-"];
  var _42 = _g741["*"];
  var _47 = _g741["/"];
  var _37 = _g741["%"];
  var _62 = _g741[">"];
  var _60 = _g741["<"];
  var _61 = _g741["="];
  var _6261 = _g741[">="];
  var _6061 = _g741["<="];
  var read_file = _g741["read-file"];
  var write_file = _g741["write-file"];
  var write = _g741.write;
  var exit = _g741.exit;
  var today = _g741.today;
  var now = _g741.now;
  var number = _g741.number;
  var string = _g741.string;
  var space = _g741.space;
  var apply = _g741.apply;
  var make_id = _g741["make-id"];
  var _37message_handler = _g741["%message-handler"];
  var toplevel63 = _g741["toplevel?"];
  var module_key = _g741["module-key"];
  var module = _g741.module;
  var setenv = _g741.setenv;
  var _g744 = nexus["lumen/lib"];
  var getenv = _g744.getenv;
  var macro_function = _g744["macro-function"];
  var macro63 = _g744["macro?"];
  var special63 = _g744["special?"];
  var special_form63 = _g744["special-form?"];
  var statement63 = _g744["statement?"];
  var symbol_expansion = _g744["symbol-expansion"];
  var symbol63 = _g744["symbol?"];
  var variable63 = _g744["variable?"];
  var bound63 = _g744["bound?"];
  var quoted = _g744.quoted;
  var stash42 = _g744["stash*"];
  var bind = _g744.bind;
  var bind42 = _g744["bind*"];
  var quasiexpand = _g744.quasiexpand;
  var macroexpand = _g744.macroexpand;
  var indentation = _g744.indentation;
  var reserved63 = _g744["reserved?"];
  var valid_id63 = _g744["valid-id?"];
  var id = _g744.id;
  var key = _g744.key;
  var imported = _g744.imported;
  var link = _g744.link;
  var mapo = _g744.mapo;
  var quote_environment = _g744["quote-environment"];
  var quote_modules = _g744["quote-modules"];
  var initial_environment = _g744["initial-environment"];
  var _g745 = nexus["lumen/compiler"];
  var compile_function = _g745["compile-function"];
  var compile = _g745.compile;
  var open_module = _g745["open-module"];
  var load_module = _g745["load-module"];
  var in_module = _g745["in-module"];
  var import_modules = _g745["import-modules"];
  var compile_module = _g745["compile-module"];
  var declare = _g745.declare;
  var eval = _g745.eval;
  global.modules = {lumen: {import: [["lumen", "special"]], alias: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"]], export: {}}, "lumen/special": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"], ["lumen", "lib"], ["lumen", "compiler"]], export: {"do": {export: true, special: function () {
    var forms = unstash(Array.prototype.slice.call(arguments, 0));
    var str = "";
    var _g758 = forms;
    var _g759 = 0;
    while (_g759 < length(_g758)) {
      var x = _g758[_g759];
      str = str + compile(x, {_stash: true, stmt: true});
      _g759 = _g759 + 1;
    }
    return(str);
  }, foo: true, tr: true, stmt: true}, "%if": {export: true, special: function (cond, cons, alt) {
    var _g760 = compile(cond);
    indent_level = indent_level + 1;
    var _g762 = compile(cons, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var _g761 = _g762;
    var _g829;
    if (alt) {
      indent_level = indent_level + 1;
      var _g764 = compile(alt, {_stash: true, stmt: true});
      indent_level = indent_level - 1;
      _g829 = _g764;
    }
    var _g763 = _g829;
    var ind = indentation();
    var str = "";
    if (target === "js") {
      str = str + ind + "if (" + _g760 + ") {\n" + _g761 + ind + "}";
    } else {
      str = str + ind + "if " + _g760 + " then\n" + _g761;
    }
    if (_g763 && target === "js") {
      str = str + " else {\n" + _g763 + ind + "}";
    } else {
      if (_g763) {
        str = str + ind + "else\n" + _g763;
      }
    }
    if (target === "lua") {
      return(str + ind + "end\n");
    } else {
      return(str + "\n");
    }
  }, foo: true, tr: true, stmt: true}, "while": {export: true, special: function (cond, form) {
    var _g765 = compile(cond);
    indent_level = indent_level + 1;
    var _g766 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var body = _g766;
    var ind = indentation();
    if (target === "js") {
      return(ind + "while (" + _g765 + ") {\n" + body + ind + "}\n");
    } else {
      return(ind + "while " + _g765 + " do\n" + body + ind + "end\n");
    }
  }, foo: true, tr: true, stmt: true}, "%for": {export: true, special: function (t, k, form) {
    var _g767 = compile(t);
    var ind = indentation();
    indent_level = indent_level + 1;
    var _g768 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var body = _g768;
    if (target === "lua") {
      return(ind + "for " + k + " in next, " + _g767 + " do\n" + body + ind + "end\n");
    } else {
      return(ind + "for (" + k + " in " + _g767 + ") {\n" + body + ind + "}\n");
    }
  }, foo: true, tr: true, stmt: true}, "%try": {export: true, special: function (form) {
    var ind = indentation();
    indent_level = indent_level + 1;
    var _g769 = compile(form, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var body = _g769;
    var e = make_id();
    var hf = ["return", ["%array", false, ["get", e, "\"message\""]]];
    indent_level = indent_level + 1;
    var _g770 = compile(hf, {_stash: true, stmt: true});
    indent_level = indent_level - 1;
    var h = _g770;
    return(ind + "try {\n" + body + ind + "}\n" + ind + "catch (" + e + ") {\n" + h + ind + "}\n");
  }, foo: true, tr: true, stmt: true}, "break": {special: function () {
    return(indentation() + "break");
  }, foo: true, export: true, stmt: true}, "%function": {special: function (args, body) {
    return(compile_function(args, body));
  }, foo: true, export: true}, "%global-function": {export: true, special: function (name, args, body) {
    if (target === "lua") {
      var x = compile_function(args, body, {_stash: true, name: name});
      return(indentation() + x);
    } else {
      return(compile(["set", name, ["%function", args, body]], {_stash: true, stmt: true}));
    }
  }, foo: true, tr: true, stmt: true}, "%local-function": {export: true, special: function (name, args, body) {
    var x = compile_function(args, body, {_stash: true, name: name, prefix: "local "});
    return(indentation() + x);
  }, foo: true, tr: true, stmt: true}, "return": {special: function (x) {
    var _g830;
    if (nil63(x)) {
      _g830 = "return";
    } else {
      _g830 = "return(" + compile(x) + ")";
    }
    var _g771 = _g830;
    return(indentation() + _g771);
  }, foo: true, export: true, stmt: true}, error: {special: function (x) {
    var _g831;
    if (target === "js") {
      _g831 = "throw new " + compile(["Error", x]);
    } else {
      _g831 = "error(" + compile(x) + ")";
    }
    var e = _g831;
    return(indentation() + e);
  }, foo: true, export: true, stmt: true}, "%local": {special: function (name, value) {
    var id = compile(name);
    var value1 = compile(value);
    var _g832;
    if (is63(value)) {
      _g832 = " = " + value1;
    } else {
      _g832 = "";
    }
    var rh = _g832;
    var _g833;
    if (target === "js") {
      _g833 = "var ";
    } else {
      _g833 = "local ";
    }
    var keyword = _g833;
    var ind = indentation();
    return(ind + keyword + id + rh);
  }, foo: true, export: true, stmt: true}, set: {special: function (lh, rh) {
    var _g772 = compile(lh);
    var _g834;
    if (nil63(rh)) {
      _g834 = "nil";
    } else {
      _g834 = rh;
    }
    var _g773 = compile(_g834);
    return(indentation() + _g772 + " = " + _g773);
  }, foo: true, export: true, stmt: true}, get: {special: function (t, k) {
    var _g774 = compile(t);
    var k1 = compile(k);
    if (target === "lua" && char(_g774, 0) === "{") {
      _g774 = "(" + _g774 + ")";
    }
    if (string_literal63(k) && valid_id63(inner(k))) {
      return(_g774 + "." + inner(k));
    } else {
      return(_g774 + "[" + k1 + "]");
    }
  }, foo: true, export: true}, "not": {}, "%array": {special: function () {
    var forms = unstash(Array.prototype.slice.call(arguments, 0));
    var _g835;
    if (target === "lua") {
      _g835 = "{";
    } else {
      _g835 = "[";
    }
    var open = _g835;
    var _g836;
    if (target === "lua") {
      _g836 = "}";
    } else {
      _g836 = "]";
    }
    var close = _g836;
    var str = "";
    var _g775 = forms;
    var i = 0;
    while (i < length(_g775)) {
      var x = _g775[i];
      str = str + compile(x);
      if (i < length(forms) - 1) {
        str = str + ", ";
      }
      i = i + 1;
    }
    return(open + str + close);
  }, foo: true, export: true}, "%object": {special: function () {
    var forms = unstash(Array.prototype.slice.call(arguments, 0));
    var str = "{";
    var _g837;
    if (target === "lua") {
      _g837 = " = ";
    } else {
      _g837 = ": ";
    }
    var sep = _g837;
    var pairs = pair(forms);
    var n_1 = length(pairs) - 1;
    var _g776 = pairs;
    var i = 0;
    while (i < length(_g776)) {
      var _g777 = _g776[i];
      var k = _g777[0];
      var v = _g777[1];
      if (!string63(k)) {
        throw new Error("Illegal key: " + string(k));
      }
      str = str + key(k) + sep + compile(v);
      if (i < n_1) {
        str = str + ", ";
      }
      i = i + 1;
    }
    return(str + "}");
  }, foo: true, export: true}}}, "lumen/system": {import: [["lumen", "special"], ["lumen", "core"]], export: {nexus: {export: true, global: true}}}, "lumen/lib": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"]], export: {getenv: {export: true, variable: true}, "macro-function": {export: true, variable: true}, "macro?": {export: true, variable: true}, "special?": {export: true, variable: true}, "special-form?": {export: true, variable: true}, "statement?": {export: true, variable: true}, "symbol-expansion": {export: true, variable: true}, "symbol?": {export: true, variable: true}, "variable?": {export: true, variable: true}, "bound?": {export: true, variable: true}, quoted: {export: true, variable: true}, "stash*": {export: true, variable: true}, bind: {export: true, variable: true}, "bind*": {export: true, variable: true}, quasiexpand: {export: true, variable: true}, macroexpand: {export: true, variable: true}, indentation: {export: true, variable: true}, "with-indent": {export: true, macro: function (form) {
    var result = make_id();
    return(["do", ["inc", "indent-level"], ["let", [result, form], ["dec", "indent-level"], result]]);
  }}, "reserved?": {export: true, variable: true}, "valid-id?": {export: true, variable: true}, id: {export: true, variable: true}, key: {export: true, variable: true}, imported: {export: true, variable: true}, link: {export: true, variable: true}, mapo: {export: true, variable: true}, "quote-environment": {export: true, variable: true}, "quote-modules": {export: true, variable: true}, "initial-environment": {export: true, variable: true}, "global?": {variable: true}, escape: {variable: true}, literal: {variable: true}, "quoting?": {variable: true}, "quasiquoting?": {variable: true}, "can-unquote?": {variable: true}, "quasisplice?": {variable: true}, "quasiquote-list": {variable: true}, "indent-level": {global: true, export: true}, reserved: {variable: true}, "numeric?": {variable: true}, "valid-code?": {variable: true}, extend: {variable: true}, exclude: {variable: true}, "quote-binding": {variable: true}, "quote-frame": {variable: true}, "quote-module": {variable: true}}}, user: {import: ["lumen", ["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"]], export: {}}, "lumen/reader": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"]], export: {"make-stream": {export: true, variable: true}, "read-table": {export: true, variable: true}, "define-reader": {export: true, macro: function (_g778) {
    var char = _g778[0];
    var stream = _g778[1];
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g779 = sub(body, 0);
    return(["set", ["get", "read-table", char], join(["fn", [stream]], _g779)]);
  }}, read: {export: true, variable: true}, "read-all": {export: true, variable: true}, "read-from-string": {export: true, variable: true}, delimiters: {variable: true}, whitespace: {variable: true}, "peek-char": {variable: true}, "read-char": {variable: true}, "skip-non-code": {variable: true}, eof: {variable: true}, "key?": {variable: true}, "flag?": {variable: true}}}, "lumen/main": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"], ["lumen", "reader"], ["lumen", "compiler"]], export: {}}, "lumen/compiler": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"], ["lumen", "lib"], ["lumen", "reader"]], export: {"compile-function": {export: true, variable: true}, compile: {export: true, variable: true}, "open-module": {export: true, variable: true}, "load-module": {export: true, variable: true}, "in-module": {export: true, variable: true}, "import-modules": {export: true, variable: true}, "compile-module": {export: true, variable: true}, declare: {export: true, variable: true}, eval: {export: true, variable: true}, infix: {variable: true}, "unary?": {variable: true}, precedence: {variable: true}, getop: {variable: true}, "infix?": {variable: true}, "compile-args": {variable: true}, "compile-atom": {variable: true}, terminator: {variable: true}, "compile-special": {variable: true}, "parenthesize-call?": {variable: true}, "compile-call": {variable: true}, "op-delims": {variable: true}, "compile-infix": {variable: true}, "can-return?": {variable: true}, lower: {variable: true}, "lower-statement": {variable: true}, "lower-body": {variable: true}, "lower-do": {variable: true}, "lower-if": {variable: true}, "lower-short": {variable: true}, "lower-try": {variable: true}, "lower-while": {variable: true}, "lower-for": {variable: true}, "lower-function": {variable: true}, "lower-definition": {variable: true}, "lower-call": {variable: true}, "lower-infix?": {variable: true}, "lower-infix": {variable: true}, "lower-special": {variable: true}, process: {variable: true}, "current-module": {global: true, export: true}, "module-path": {variable: true}, encapsulate: {variable: true}, "compile-file": {variable: true}, run: {variable: true}, "compiling?": {variable: true}, "compiler-output": {variable: true}, conclude: {variable: true}, "%compile-module": {variable: true}, reimported: {variable: true}, "%result": {global: true, export: true}}}, "lumen/runtime": {import: [["lumen", "special"], ["lumen", "core"]], export: {"nil?": {export: true, variable: true}, "is?": {export: true, variable: true}, length: {export: true, variable: true}, "none?": {export: true, variable: true}, "some?": {export: true, variable: true}, "one?": {export: true, variable: true}, hd: {export: true, variable: true}, "string?": {export: true, variable: true}, "number?": {export: true, variable: true}, "boolean?": {export: true, variable: true}, "function?": {export: true, variable: true}, "composite?": {export: true, variable: true}, "atom?": {export: true, variable: true}, "table?": {export: true, variable: true}, "list?": {export: true, variable: true}, substring: {export: true, variable: true}, sub: {export: true, variable: true}, keys: {export: true, variable: true}, inner: {export: true, variable: true}, tl: {export: true, variable: true}, char: {export: true, variable: true}, code: {export: true, variable: true}, "string-literal?": {export: true, variable: true}, "id-literal?": {export: true, variable: true}, add: {export: true, variable: true}, drop: {export: true, variable: true}, last: {export: true, variable: true}, reverse: {export: true, variable: true}, join: {export: true, variable: true}, reduce: {export: true, variable: true}, keep: {export: true, variable: true}, "in?": {export: true, variable: true}, find: {export: true, variable: true}, pair: {export: true, variable: true}, sort: {export: true, variable: true}, iterate: {export: true, variable: true}, replicate: {export: true, variable: true}, series: {export: true, variable: true}, map: {export: true, variable: true}, "keys?": {export: true, variable: true}, "empty?": {export: true, variable: true}, stash: {export: true, variable: true}, unstash: {export: true, variable: true}, search: {export: true, variable: true}, split: {export: true, variable: true}, cat: {export: true, variable: true}, "+": {export: true, variable: true}, "-": {export: true, variable: true}, "*": {export: true, variable: true}, "/": {export: true, variable: true}, "%": {export: true, variable: true}, ">": {export: true, variable: true}, "<": {export: true, variable: true}, "=": {export: true, variable: true}, ">=": {export: true, variable: true}, "<=": {export: true, variable: true}, "read-file": {export: true, variable: true}, "write-file": {export: true, variable: true}, write: {export: true, variable: true}, exit: {export: true, variable: true}, today: {export: true, variable: true}, now: {export: true, variable: true}, number: {export: true, variable: true}, string: {export: true, variable: true}, space: {export: true, variable: true}, apply: {export: true, variable: true}, "make-id": {export: true, variable: true}, "%message-handler": {export: true, variable: true}, "toplevel?": {export: true, variable: true}, "module-key": {export: true, variable: true}, module: {export: true, variable: true}, setenv: {export: true, variable: true}, type: {variable: true}, shift: {variable: true}, require: {global: true, export: true}, fs: {variable: true}, print: {global: true, export: true}, "id-count": {variable: true}}}, "lumen/boot": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"], ["lumen", "lib"], ["lumen", "compiler"]], export: {"%initial-environment": {macro: function () {
    return(quote_environment(initial_environment()));
  }}, "%initial-modules": {macro: function () {
    return(quote_modules());
  }}, modules: {global: true, export: true}}}, "lumen/core": {import: [["lumen", "runtime"], ["lumen", "special"], ["lumen", "core"], ["lumen", "lib"], ["lumen", "compiler"]], export: {quote: {macro: function (form) {
    return(quoted(form));
  }, export: true}, quasiquote: {macro: function (form) {
    return(quasiexpand(form, 1));
  }, export: true}, at: {macro: function (l, i) {
    if (target === "lua" && number63(i)) {
      i = i + 1;
    } else {
      if (target === "lua") {
        i = ["+", i, 1];
      }
    }
    return(["get", l, i]);
  }, export: true}, list: {macro: function () {
    var body = unstash(Array.prototype.slice.call(arguments, 0));
    var l = join(["%array"], body);
    if (!keys63(body)) {
      return(l);
    } else {
      var id = make_id();
      var init = [];
      var _g780 = body;
      var k = undefined;
      for (k in _g780) {
        if (isNaN(parseInt(k))) {
          var v = _g780[k];
          add(init, ["set", ["get", id, ["quote", k]], v]);
        }
      }
      return(join(["let", [id, l]], join(init, [id])));
    }
  }, export: true}, "if": {macro: function () {
    var branches = unstash(Array.prototype.slice.call(arguments, 0));
    var step = function (_g781) {
      var a = _g781[0];
      var b = _g781[1];
      var c = sub(_g781, 2);
      if (is63(b)) {
        return([join(["%if", a, b], step(c))]);
      } else {
        if (is63(a)) {
          return([a]);
        }
      }
    };
    return(hd(step(branches)));
  }, export: true}, when: {macro: function (cond) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g782 = sub(body, 0);
    return(["if", cond, join(["do"], _g782)]);
  }, export: true}, unless: {macro: function (cond) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g783 = sub(body, 0);
    return(["if", ["not", cond], join(["do"], _g783)]);
  }, export: true}, table: {macro: function () {
    var body = unstash(Array.prototype.slice.call(arguments, 0));
    return(join(["%object"], mapo(function (x) {
      return(x);
    }, body)));
  }, export: true}, let: {macro: function (bindings) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g784 = sub(body, 0);
    if (length(bindings) < 2) {
      return(join(["do"], _g784));
    } else {
      var renames = [];
      var locals = [];
      var lh = bindings[0];
      var rh = bindings[1];
      var _g785 = bind(lh, rh);
      var _g786 = 0;
      while (_g786 < length(_g785)) {
        var _g787 = _g785[_g786];
        var id = _g787[0];
        var val = _g787[1];
        if (bound63(id) || reserved63(id) || toplevel63()) {
          var id1 = make_id();
          add(renames, id);
          add(renames, id1);
          id = id1;
        } else {
          setenv(id, {_stash: true, variable: true});
        }
        add(locals, ["%local", id, val]);
        _g786 = _g786 + 1;
      }
      return(join(["do"], join(locals, [["let-symbol", renames, join(["let", sub(bindings, 2)], _g784)]])));
    }
  }, export: true}, "define-module": {macro: function (spec) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g788 = sub(body, 0);
    var imp = _g788.import;
    var exp = _g788.export;
    var alias = _g788.alias;
    var _g789 = import_modules(imp);
    var imports = _g789[0];
    var bindings = _g789[1];
    var k = module_key(spec);
    modules[k] = {import: imports, export: {}, alias: alias};
    var _g790 = exp || [];
    var _g791 = 0;
    while (_g791 < length(_g790)) {
      var x = _g790[_g791];
      setenv(x, {_stash: true, export: true});
      _g791 = _g791 + 1;
    }
    return(join(["do", ["set", ["get", "nexus", ["quote", k]], ["table"]]], bindings));
  }, export: true}, "define-macro": {macro: function (name, args) {
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g792 = sub(body, 0);
    var form = join(["fn", args], _g792);
    var _g793 = ["setenv", ["quote", name]];
    _g793.macro = form;
    _g793.form = ["quote", form];
    eval(_g793);
    return(undefined);
  }, export: true}, "define-special": {macro: function (name, args) {
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g794 = sub(body, 0);
    var form = join(["fn", args], _g794);
    var keys = sub(_g794, length(_g794));
    var _g795 = ["setenv", ["quote", name]];
    _g795.special = form;
    _g795.form = ["quote", form];
    eval(join(_g795, keys));
    return(undefined);
  }, export: true}, "define-symbol": {macro: function (name, expansion) {
    setenv(name, {_stash: true, symbol: expansion});
    return(undefined);
  }, export: true}, "define*": {macro: function (name, x) {
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g796 = sub(body, 0);
    setenv(name, {_stash: true, global: true, export: true});
    if (some63(_g796)) {
      var _g797 = bind42(x, _g796);
      var args = _g797[0];
      var _g798 = _g797[1];
      return(join(["%global-function", name, args], _g798));
    } else {
      if (target === "js") {
        return(["set", ["get", "global", ["quote", id(name)]], x]);
      } else {
        return(["set", name, x]);
      }
    }
  }, export: true}, define: {macro: function (name, x) {
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g799 = sub(body, 0);
    setenv(name, {_stash: true, variable: true});
    if (some63(_g799) && target === "js") {
      return(link(name, ["%local", name, join(["fn", x], _g799)]));
    } else {
      if (some63(_g799)) {
        var _g800 = bind42(x, _g799);
        var args = _g800[0];
        var _g801 = _g800[1];
        return(link(name, join(["%local-function", name, args], _g801)));
      } else {
        return(link(name, ["%local", name, x]));
      }
    }
  }, export: true}, "set*": {macro: function (name, value) {
    return(link(name, ["set", name, value]));
  }, export: true}, "with-bindings": {macro: function (_g802) {
    var names = _g802[0];
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g803 = sub(body, 0);
    var x = make_id();
    var _g805 = ["setenv", x];
    _g805.variable = true;
    var _g804 = ["with-frame", ["each", [x], names, _g805]];
    _g804.scope = true;
    return(join(_g804, _g803));
  }, export: true}, "let-macro": {macro: function (definitions) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g806 = sub(body, 0);
    add(environment, {});
    map(function (m) {
      return(macroexpand(join(["define-macro"], m)));
    }, definitions);
    var _g807 = join(["do"], macroexpand(_g806));
    drop(environment);
    return(_g807);
  }, export: true}, "let-symbol": {macro: function (expansions) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g808 = sub(body, 0);
    add(environment, {});
    map(function (_g810) {
      var name = _g810[0];
      var exp = _g810[1];
      return(macroexpand(["define-symbol", name, exp]));
    }, pair(expansions));
    var _g809 = join(["do"], macroexpand(_g808));
    drop(environment);
    return(_g809);
  }, export: true}, fn: {macro: function (args) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g811 = sub(body, 0);
    var _g812 = bind42(args, _g811);
    var _g813 = _g812[0];
    var _g814 = _g812[1];
    return(join(["%function", _g813], _g814));
  }, export: true}, guard: {macro: function (expr) {
    if (target === "js") {
      return([["fn", [], ["%try", ["list", true, expr]]]]);
    } else {
      var e = make_id();
      var x = make_id();
      var ex = "|" + e + "," + x + "|";
      return(["let", [ex, ["xpcall", ["fn", [], expr], "%message-handler"]], ["list", e, x]]);
    }
  }, export: true}, all: {macro: function (_g815, t) {
    var k = _g815[0];
    var v = _g815[1];
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g816 = sub(body, 0);
    var x = make_id();
    var n = make_id();
    var _g838;
    if (target === "lua") {
      _g838 = _g816;
    } else {
      _g838 = [join(["let", [n, ["parseInt", k], k, ["if", ["isNaN", n], k, n]]], _g816)];
    }
    return(["let", [x, t, k, "nil"], ["%for", x, k, join(["let", [v, ["get", x, k]]], _g838)]]);
  }, export: true}, each: {macro: function (b, t) {
    var body = unstash(Array.prototype.slice.call(arguments, 2));
    var _g817 = sub(body, 0);
    var k = b[0];
    var v = b[1];
    var t1 = make_id();
    var _g839;
    if (nil63(v)) {
      var _g840;
      if (b.i) {
        _g840 = "i";
      } else {
        _g840 = make_id();
      }
      var i = _g840;
      _g839 = ["let", [i, 0], ["while", ["<", i, ["length", t1]], join(["let", [k, ["at", t1, i]]], _g817), ["inc", i]]];
    } else {
      var _g818 = ["target"];
      _g818.js = ["isNaN", ["parseInt", k]];
      _g818.lua = ["not", ["number?", k]];
      _g839 = ["let", [k, "nil"], ["%for", t1, k, ["when", _g818, join(["let", [v, ["get", t1, k]]], _g817)]]];
    }
    return(["let", [t1, t], _g839]);
  }, export: true}, "set-of": {macro: function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    var l = [];
    var _g819 = xs;
    var _g820 = 0;
    while (_g820 < length(_g819)) {
      var x = _g819[_g820];
      l[x] = true;
      _g820 = _g820 + 1;
    }
    return(join(["table"], l));
  }, export: true}, language: {macro: function () {
    return(["quote", target]);
  }, export: true}, target: {macro: function () {
    var clauses = unstash(Array.prototype.slice.call(arguments, 0));
    return(clauses[target]);
  }, export: true, global: true}, "join*": {macro: function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    return(reduce(function (a, b) {
      return(["join", a, b]);
    }, xs));
  }, export: true}, "join!": {macro: function (a) {
    var bs = unstash(Array.prototype.slice.call(arguments, 1));
    var _g821 = sub(bs, 0);
    return(["set", a, join(["join*", a], _g821)]);
  }, export: true}, "cat!": {macro: function (a) {
    var bs = unstash(Array.prototype.slice.call(arguments, 1));
    var _g822 = sub(bs, 0);
    return(["set", a, join(["cat", a], _g822)]);
  }, export: true}, inc: {macro: function (n, by) {
    return(["set", n, ["+", n, by || 1]]);
  }, export: true}, dec: {macro: function (n, by) {
    return(["set", n, ["-", n, by || 1]]);
  }, export: true}, pr: {macro: function () {
    var xs = unstash(Array.prototype.slice.call(arguments, 0));
    return(["print", space(xs)]);
  }, export: true}, "with-frame": {macro: function () {
    var body = unstash(Array.prototype.slice.call(arguments, 0));
    var _g823 = sub(body, 0);
    var scope = body.scope;
    var x = make_id();
    var _g824 = ["table"];
    _g824._scope = scope;
    return(["do", ["add", "environment", _g824], ["let", [x, join(["do"], _g823)], ["drop", "environment"], x]]);
  }, export: true}}}};
  global.environment = [{"define-module": {macro: function (spec) {
    var body = unstash(Array.prototype.slice.call(arguments, 1));
    var _g825 = sub(body, 0);
    var imp = _g825.import;
    var exp = _g825.export;
    var alias = _g825.alias;
    var _g826 = import_modules(imp);
    var imports = _g826[0];
    var bindings = _g826[1];
    var k = module_key(spec);
    modules[k] = {import: imports, export: {}, alias: alias};
    var _g827 = exp || [];
    var _g828 = 0;
    while (_g828 < length(_g827)) {
      var x = _g827[_g828];
      setenv(x, {_stash: true, export: true});
      _g828 = _g828 + 1;
    }
    return(join(["do", ["set", ["get", "nexus", ["quote", k]], ["table"]]], bindings));
  }, export: true}}];
})();
(function () {
  nexus.user = {};
  var _g841 = nexus["lumen/runtime"];
  var nil63 = _g841["nil?"];
  var is63 = _g841["is?"];
  var length = _g841.length;
  var none63 = _g841["none?"];
  var some63 = _g841["some?"];
  var one63 = _g841["one?"];
  var hd = _g841.hd;
  var string63 = _g841["string?"];
  var number63 = _g841["number?"];
  var boolean63 = _g841["boolean?"];
  var function63 = _g841["function?"];
  var composite63 = _g841["composite?"];
  var atom63 = _g841["atom?"];
  var table63 = _g841["table?"];
  var list63 = _g841["list?"];
  var substring = _g841.substring;
  var sub = _g841.sub;
  var keys = _g841.keys;
  var inner = _g841.inner;
  var tl = _g841.tl;
  var char = _g841.char;
  var code = _g841.code;
  var string_literal63 = _g841["string-literal?"];
  var id_literal63 = _g841["id-literal?"];
  var add = _g841.add;
  var drop = _g841.drop;
  var last = _g841.last;
  var reverse = _g841.reverse;
  var join = _g841.join;
  var reduce = _g841.reduce;
  var keep = _g841.keep;
  var in63 = _g841["in?"];
  var find = _g841.find;
  var pair = _g841.pair;
  var sort = _g841.sort;
  var iterate = _g841.iterate;
  var replicate = _g841.replicate;
  var series = _g841.series;
  var map = _g841.map;
  var keys63 = _g841["keys?"];
  var empty63 = _g841["empty?"];
  var stash = _g841.stash;
  var unstash = _g841.unstash;
  var search = _g841.search;
  var split = _g841.split;
  var cat = _g841.cat;
  var _43 = _g841["+"];
  var _ = _g841["-"];
  var _42 = _g841["*"];
  var _47 = _g841["/"];
  var _37 = _g841["%"];
  var _62 = _g841[">"];
  var _60 = _g841["<"];
  var _61 = _g841["="];
  var _6261 = _g841[">="];
  var _6061 = _g841["<="];
  var read_file = _g841["read-file"];
  var write_file = _g841["write-file"];
  var write = _g841.write;
  var exit = _g841.exit;
  var today = _g841.today;
  var now = _g841.now;
  var number = _g841.number;
  var string = _g841.string;
  var space = _g841.space;
  var apply = _g841.apply;
  var make_id = _g841["make-id"];
  var _37message_handler = _g841["%message-handler"];
  var toplevel63 = _g841["toplevel?"];
  var module_key = _g841["module-key"];
  var module = _g841.module;
  var setenv = _g841.setenv;
})();
(function () {
  nexus["lumen/main"] = {};
  var _g2 = nexus["lumen/runtime"];
  var nil63 = _g2["nil?"];
  var is63 = _g2["is?"];
  var length = _g2.length;
  var none63 = _g2["none?"];
  var some63 = _g2["some?"];
  var one63 = _g2["one?"];
  var hd = _g2.hd;
  var string63 = _g2["string?"];
  var number63 = _g2["number?"];
  var boolean63 = _g2["boolean?"];
  var function63 = _g2["function?"];
  var composite63 = _g2["composite?"];
  var atom63 = _g2["atom?"];
  var table63 = _g2["table?"];
  var list63 = _g2["list?"];
  var substring = _g2.substring;
  var sub = _g2.sub;
  var inner = _g2.inner;
  var tl = _g2.tl;
  var char = _g2.char;
  var code = _g2.code;
  var string_literal63 = _g2["string-literal?"];
  var id_literal63 = _g2["id-literal?"];
  var add = _g2.add;
  var drop = _g2.drop;
  var last = _g2.last;
  var reverse = _g2.reverse;
  var join = _g2.join;
  var reduce = _g2.reduce;
  var keep = _g2.keep;
  var in63 = _g2["in?"];
  var find = _g2.find;
  var pair = _g2.pair;
  var sort = _g2.sort;
  var iterate = _g2.iterate;
  var replicate = _g2.replicate;
  var series = _g2.series;
  var map = _g2.map;
  var keys63 = _g2["keys?"];
  var empty63 = _g2["empty?"];
  var stash = _g2.stash;
  var unstash = _g2.unstash;
  var search = _g2.search;
  var split = _g2.split;
  var cat = _g2.cat;
  var _43 = _g2["+"];
  var _ = _g2["-"];
  var _42 = _g2["*"];
  var _47 = _g2["/"];
  var _37 = _g2["%"];
  var _62 = _g2[">"];
  var _60 = _g2["<"];
  var _61 = _g2["="];
  var _6261 = _g2[">="];
  var _6061 = _g2["<="];
  var read_file = _g2["read-file"];
  var write_file = _g2["write-file"];
  var write = _g2.write;
  var exit = _g2.exit;
  var today = _g2.today;
  var now = _g2.now;
  var number = _g2.number;
  var string = _g2.string;
  var space = _g2.space;
  var apply = _g2.apply;
  var make_id = _g2["make-id"];
  var _37message_handler = _g2["%message-handler"];
  var toplevel63 = _g2["toplevel?"];
  var module_key = _g2["module-key"];
  var module = _g2.module;
  var setenv = _g2.setenv;
  var _g5 = nexus["lumen/reader"];
  var make_stream = _g5["make-stream"];
  var read_table = _g5["read-table"];
  var read = _g5.read;
  var read_all = _g5["read-all"];
  var read_from_string = _g5["read-from-string"];
  var _g6 = nexus["lumen/compiler"];
  var compile_function = _g6["compile-function"];
  var compile = _g6.compile;
  var open_module = _g6["open-module"];
  var load_module = _g6["load-module"];
  var in_module = _g6["in-module"];
  var import_modules = _g6["import-modules"];
  var compile_module = _g6["compile-module"];
  var declare = _g6.declare;
  var eval = _g6.eval;
  var rep = function (str) {
    var _g844 = (function () {
      try {
        return([true, eval(read_from_string(str))]);
      }
      catch (_g846) {
        return([false, _g846.message]);
      }
    })();
    var _g1 = _g844[0];
    var x = _g844[1];
    if (is63(x)) {
      return(print(string(x)));
    }
  };
  nexus["lumen/main"].rep = rep;
  var repl = function () {
    var step = function (str) {
      rep(str);
      return(write("> "));
    };
    write("> ");
    process.stdin.setEncoding("utf8");
    return(process.stdin.on("data", step));
  };
  nexus["lumen/main"].repl = repl;
  var usage = function () {
    print("usage: lumen [options] <module>");
    print("options:");
    print("  -o <output>\tOutput file");
    print("  -t <target>\tTarget language (default: lua)");
    print("  -e <expr>\tExpression to evaluate");
    return(exit());
  };
  nexus["lumen/main"].usage = usage;
  var main = function () {
    var args = sub(process.argv, 2);
    if (hd(args) === "-h" || hd(args) === "--help") {
      usage();
    }
    var spec = undefined;
    var output = undefined;
    var target1 = undefined;
    var expr = undefined;
    var _g845 = args;
    var i = 0;
    while (i < length(_g845)) {
      var arg = _g845[i];
      if (arg === "-o" || arg === "-t" || arg === "-e") {
        if (i === length(args) - 1) {
          print("missing argument for" + " " + string(arg));
        } else {
          i = i + 1;
          var val = args[i];
          if (arg === "-o") {
            output = val;
          } else {
            if (arg === "-t") {
              target1 = val;
            } else {
              if (arg === "-e") {
                expr = val;
              }
            }
          }
        }
      } else {
        if (nil63(spec) && "-" != char(arg, 0)) {
          spec = arg;
        }
      }
      i = i + 1;
    }
    if (output) {
      if (target1) {
        target = target1;
      }
      return(write_file(output, compile_module(spec)));
    } else {
      in_module(spec || "user");
      if (expr) {
        return(rep(expr));
      } else {
        return(repl());
      }
    }
  };
  nexus["lumen/main"].main = main;
  main();
})();
